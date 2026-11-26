/* 스터디아 왕국 지원센터: 공통 헤더·푸터·메뉴·테마 */
(function(){
  var APP = '../';                 // 학생 앱 (루트 index.html)
  var page = document.body.getAttribute('data-page') || 'home';
  var MENU = [
    ['home','index.html','홈'],
    ['student','student.html','학생 가이드'],
    ['rules','rules.html','규칙 도감'],
    ['parent','parent.html','보호자 안내'],
    ['faq','faq.html','자주 묻는 질문'],
    ['admin','admin.html','선생님']
  ];
  var mark = '<svg class="mark" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">'+
    '<rect x="0" y="0" width="16" height="16" fill="#46B1D8"/><rect x="0" y="12" width="16" height="2" fill="#5DBB4A"/><rect x="0" y="14" width="16" height="2" fill="#8A5A34"/>'+
    '<rect x="5" y="3" width="6" height="9" fill="#F7E7C6"/><rect x="4" y="2" width="2" height="2" fill="#F7E7C6"/><rect x="7" y="1" width="2" height="2" fill="#F7E7C6"/><rect x="10" y="2" width="2" height="2" fill="#F7E7C6"/>'+
    '<rect x="7" y="8" width="2" height="4" fill="#2B1D16"/><rect x="7" y="0" width="1" height="1" fill="#E2453C"/><rect x="8" y="0" width="2" height="1" fill="#E2453C"/></svg>';
  var sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var burger = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';

  var head = document.createElement('header');
  head.className = 'top';
  head.innerHTML = '<div class="wrap"><a class="logo" href="index.html">'+mark+'<span>스터디아 왕국 <small>지원센터</small></span></a>'+
    '<nav class="menu" id="menu" aria-label="주 메뉴">'+MENU.map(function(m){return '<a href="'+m[1]+'"'+(m[0]===page?' aria-current="page"':'')+'>'+m[2]+'</a>'}).join('')+'</nav>'+
    '<button class="iconbtn" id="menuBtn" aria-label="메뉴 열기" aria-expanded="false" aria-controls="menu">'+burger+'</button>'+
    '<button class="iconbtn" id="themeBtn" aria-label="밝게·어둡게 바꾸기"></button></div>';
  document.body.insertBefore(head, document.body.firstChild);

  var foot = document.createElement('footer');
  foot.innerHTML = '<div class="wrap"><div><b style="color:var(--ink)">스터디아 왕국 지원센터</b><br>초등 1~6학년 · 공부가 모험이 되는 곳</div>'+
    '<nav aria-label="바로 가기"><a href="'+APP+'">스터디아 입장</a><a href="'+APP+'rank.html">랭킹</a><a href="student.html">학생 가이드</a><a href="parent.html">보호자 안내</a><a href="faq.html">자주 묻는 질문</a></nav>'+
    '<div class="tiny" style="flex-basis:100%">아이디·비밀번호·보호자 링크는 이 사이트에 없어요. 선생님께 직접 받아 주세요. 다른 사람에게 보내지 마세요.</div></div>';
  document.body.appendChild(foot);

  var btn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  btn.onclick = function(){ var o = menu.classList.toggle('open'); btn.setAttribute('aria-expanded', o); };
  menu.addEventListener('click', function(e){ if(e.target.tagName==='A'){ menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });

  var root = document.documentElement, tb = document.getElementById('themeBtn');
  function cur(){ return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function paint(){ tb.innerHTML = cur()==='dark' ? sun : moon; }
  try{ var saved = localStorage.getItem('studia-help-theme'); if(saved) root.setAttribute('data-theme', saved); }catch(e){}
  paint();
  tb.onclick = function(){ var n = cur()==='dark' ? 'light' : 'dark'; root.setAttribute('data-theme', n); try{ localStorage.setItem('studia-help-theme', n); }catch(e){} paint(); };
})();
