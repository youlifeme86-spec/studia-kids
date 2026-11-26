/* 스터디아 사운드: 효과음과 보스 BGM을 Web Audio로 직접 만들어요 (외부 음원 없음, 저작권 걱정 없음)
 * SKSound.play('click'|'tab'|'confirm'|'attack'|'crit'|'kill'|'heal'|'item'|'error')
 * SKSound.bgm('boss'|'raid'|null)  SKSound.on / SKSound.toggle()
 * 진동: SKSound.buzz(패턴) — 안드로이드 크롬만 되고 아이폰은 브라우저가 막아요. 소리를 끄면 진동도 꺼져요. */
(function(){
  const KEY='sk-sound';let on=true;try{on=localStorage.getItem(KEY)!=='off'}catch(e){}
  let ctx=null,master=null,sfxBus=null,bgmBus=null,noiseBuf=null;
  function ac(){if(!ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;ctx=new C();
      master=ctx.createGain();master.gain.value=0.9;master.connect(ctx.destination);
      sfxBus=ctx.createGain();sfxBus.gain.value=0.55;sfxBus.connect(master);
      bgmBus=ctx.createGain();bgmBus.gain.value=0.0;bgmBus.connect(master);
      noiseBuf=ctx.createBuffer(1,ctx.sampleRate*0.5,ctx.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
    if(ctx.state==='suspended')ctx.resume();return ctx}
  // 첫 터치 때 오디오를 깨워요 (브라우저 규칙)
  const wake=()=>{if(on)ac()};['pointerdown','keydown','touchstart'].forEach(ev=>document.addEventListener(ev,wake,{capture:true,passive:true}));

  function tone(t,f1,f2,dur,type,vol,bus){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'square';o.frequency.setValueAtTime(f1,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);
    g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.008);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g);g.connect(bus||sfxBus);o.start(t);o.stop(t+dur+0.02)}
  function noise(t,dur,vol,freq,q,bus){const n=ctx.createBufferSource();n.buffer=noiseBuf;const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=freq||1800;f.Q.value=q||0.8;const g=ctx.createGain();
    g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);n.connect(f);f.connect(g);g.connect(bus||sfxBus);n.start(t);n.stop(t+dur+0.02)}
  const N=n=>440*Math.pow(2,(n-69)/12);
  const SFX={
    click(t){tone(t,1100,1600,0.05,'square',0.10);tone(t+0.03,1650,0,0.04,'triangle',0.06)},
    tab(t){tone(t,520,780,0.07,'triangle',0.16);tone(t+0.05,1040,0,0.06,'sine',0.08)},
    confirm(t){tone(t,660,0,0.08,'square',0.12);tone(t+0.08,990,0,0.14,'square',0.12)},
    attack(t){tone(t,180,45,0.18,'sine',0.5);noise(t,0.16,0.5,2200,0.7);tone(t+0.01,900,300,0.09,'sawtooth',0.10)},
    crit(t){SFX.attack(t);tone(t+0.06,1320,2640,0.18,'square',0.10);noise(t+0.06,0.25,0.25,5000,1.5)},
    kill(t){[72,76,79,84].forEach((n,i)=>tone(t+i*0.09,N(n),0,0.16,'square',0.13));[60,64,67,72].forEach(n=>tone(t+0.4,N(n),0,0.7,'triangle',0.12));noise(t+0.4,0.5,0.12,6000,0.5)},
    heal(t){[76,72,69,64].forEach((n,i)=>tone(t+i*0.07,N(n),N(n)*0.97,0.12,'triangle',0.13))},
    item(t){[84,88,91].forEach((n,i)=>tone(t+i*0.06,N(n),0,0.1,'square',0.09))},
    error(t){tone(t,220,180,0.16,'square',0.12)}
  };
  function play(name){if(!on||!SFX[name])return;if(!ac())return;try{SFX[name](ctx.currentTime+0.005)}catch(e){}}
  function buzz(p){if(!on)return;try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}}

  /* ---- 보스 BGM: 웅장한 단조 루프 (북 + 베이스 + 금관 화음 + 멜로디) ---- */
  const SONGS={
    boss:{bpm:132,root:45, // A단조
      bass:[0,0,0,0,-4,-4,-4,-4,-2,-2,-2,-2,-5,-5,-7,-5],
      chords:[[0,3,7],[-4,0,3],[-2,2,5],[-5,-1,2]],
      mel:[12,null,15,null,19,null,17,15,12,null,15,17,19,null,22,null, 20,null,19,17,15,null,12,null,14,null,15,null,14,null,10,null]},
    raid:{bpm:112,root:43, // G단조, 조금 더 느리고 묵직하게
      bass:[0,0,0,0,-2,-2,-2,-2,-4,-4,-4,-4,-5,-5,-5,-5],
      chords:[[0,3,7],[-2,2,5],[-4,0,3],[-5,-1,2]],
      mel:[19,null,null,17,15,null,14,null,15,null,null,12,10,null,null,null, 19,null,22,null,24,null,22,19,20,null,19,null,15,null,14,null]}
  };
  let cur=null,timer=null,step=0,nextT=0;
  function sched(){const S=SONGS[cur];if(!S)return;const sp=60/S.bpm/2; // 8분음표
    while(nextT<ctx.currentTime+0.25){const t=nextT,i=step%32,bar=Math.floor(step/8)%4;
      // 북: 쿵(1,3박) 착(2,4박), 하이햇
      if(i%8===0||i%8===5)tone(t,120,40,0.22,'sine',0.55,bgmBus);
      if(i%8===4)noise(t,0.18,0.35,1600,0.6,bgmBus);
      if(i%2===1)noise(t,0.04,0.08,8000,1,bgmBus);
      // 베이스
      const b=S.bass[step%16];tone(t,N(S.root+b),0,sp*0.9,'sawtooth',0.10,bgmBus);
      // 금관 화음 (마디 첫 박)
      if(i%8===0)S.chords[bar].forEach(c=>tone(t,N(S.root+24+c),0,sp*7.5,'triangle',0.035,bgmBus));
      // 멜로디
      const m=S.mel[step%32];if(m!=null)tone(t,N(S.root+12+m),0,sp*1.6,'square',0.045,bgmBus);
      nextT+=sp;step++}}
  function bgm(name){if(name===cur)return;if(!name||!on){stopBgm();return}if(!ac())return;
    stopBgm(true);cur=name;step=0;nextT=ctx.currentTime+0.1;bgmBus.gain.cancelScheduledValues(ctx.currentTime);bgmBus.gain.setValueAtTime(0.0001,ctx.currentTime);bgmBus.gain.exponentialRampToValueAtTime(0.5,ctx.currentTime+1.2);
    timer=setInterval(sched,60);sched()}
  function stopBgm(quick){cur=null;if(timer){clearInterval(timer);timer=null}if(ctx&&bgmBus){bgmBus.gain.cancelScheduledValues(ctx.currentTime);bgmBus.gain.setValueAtTime(bgmBus.gain.value,ctx.currentTime);bgmBus.gain.linearRampToValueAtTime(0,ctx.currentTime+(quick?0.05:0.4))}}
  document.addEventListener('visibilitychange',()=>{if(!ctx)return;if(document.hidden)ctx.suspend();else if(on)ctx.resume()});

  function set(v){on=!!v;try{localStorage.setItem(KEY,on?'on':'off')}catch(e){}if(!on){stopBgm()}else{ac()}}
  window.SKSound={play,buzz,bgm,get on(){return on},set,toggle(){set(!on);return on},get bgmName(){return cur}};
})();
