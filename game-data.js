/* 스터디아 왕국 초등 · 게임 데이터 (학생 앱·랭킹·관리자 화면이 같이 씀)
 * 숫자나 이름을 바꾸려면 이 파일만 고치면 세 화면에 함께 반영돼요.
 */
(function(){
const SK={};

/* ---------- 9대 왕국 (키는 중고등판과 같고 이름·설명만 초등용) ---------- */
SK.KINGDOMS={
  dopa:{n:'반짝선물 왕국',zone:'동부',zn:'동부 반짝 권역',c:'#E8559A',p:'바로 보상',d:'꾸미기 보상 +20% (데미지와는 상관없어요)'},
  nj:{n:'차곡차곡 마을',zone:'동부',zn:'동부 반짝 권역',c:'#C9925E',p:'루틴 쌓기',d:'연속 출석 1일당 데미지 +2% (최대 +30%)'},
  gds:{n:'와글와글 왕국',zone:'동부',zn:'동부 반짝 권역',c:'#F07B3F',p:'함께 힘',d:'파티 친구와 같은 날 체크하면 +30%'},
  ddk:{n:'척척 제국',zone:'서부',zn:'서부 도전 권역',c:'#3E8EDB',p:'연속 콤보',d:'체크를 이어서 할 때마다 +5% (최대 +25%)'},
  hc:{n:'씩씩 연방',zone:'서부',zn:'서부 도전 권역',c:'#D64545',p:'도전 크리티컬',d:'미션1 숙제검사·선생님 추가 포인트에 치명타 ×2'},
  ft:{n:'보물창고 왕국',zone:'서부',zn:'서부 도전 권역',c:'#8D6E4A',p:'보물 모으기',d:'장비·스킨 해금 +25% (데미지와는 상관없어요)'},
  gim:{n:'다시보기 요새',zone:'북부',zn:'북부 비밀 권역',c:'#4C7A5A',p:'다시 풀기',d:'미션2 채점하고 고치기 1회마다 +5% (최대 +30%)'},
  ult:{n:'별빛집중 왕국',zone:'북부',zn:'북부 비밀 권역',c:'#7A4FD0',p:'별빛 충전',d:'15분 집중 타이머 완주 시 궁극기 게이지 +40% (다른 왕국 +20%)'},
  ukk:{n:'오뚝이 공화국',zone:'북부',zn:'북부 비밀 권역',c:'#2BA7A0',p:'다시 일어나기',d:'3일 쉬고 돌아온 날 첫 체크 +50%, 연속 출석 끊김 1번 막아 줌'}
};
SK.ZONES=[['동부','동부 반짝 권역'],['서부','서부 도전 권역'],['북부','북부 비밀 권역']];
SK.KN={반짝선물:'dopa',차곡차곡:'nj',와글와글:'gds',척척:'ddk',씩씩:'hc',보물창고:'ft',다시보기:'gim',별빛집중:'ult',오뚝이:'ukk'};

/* ---------- 성향테스트 10문항 (선택지마다 왕국·배점은 중고등판과 같음) ---------- */
SK.TEST=[
 ['공부 시작 전, 내 책상 위에 꼭 있어야 하는 것은?',[
  ['예쁜 색연필과 스티커, 가지런한 필통','차곡차곡','보물창고'],
  ['다 하고 먹을 간식과 신나는 노래','반짝선물','와글와글'],
  ['연필 한 자루, 지우개, 오늘 할 문제집만','다시보기','별빛집중'],
  ['타이머와 순서대로 쌓아 둔 할 일','척척','씩씩']]],
 ['어려운 수학 문제를 만났을 때 나는?',[
  ['"내가 꼭 풀 거야!" 끝까지 도전한다','씩씩','별빛집중'],
  ['일단 별표 하고 다음 문제부터 푼다','척척','오뚝이'],
  ['"풀면 스티커 하나!" 하고 도전한다','반짝선물','보물창고'],
  ['친구나 선생님께 "같이 풀어 주세요!"','와글와글','차곡차곡']]],
 ['친구가 "오늘 같이 숙제할래?"라고 물으면?',[
  ['좋아! 같이 하면 더 신나','와글와글','반짝선물'],
  ['예쁜 도서관이나 내 방에서 하면 좋아','차곡차곡','보물창고'],
  ['나는 혼자 조용히 해야 잘 돼','별빛집중','다시보기'],
  ['누가 먼저 끝내나 시합하자!','씩씩','오뚝이']]],
 ['아는 문제를 실수로 틀렸을 때 나는?',[
  ['"에이, 다음엔 맞히지 뭐!" 웃고 넘긴다','오뚝이','와글와글'],
  ['틀린 문제를 다시 세 번 풀어 본다','다시보기','척척'],
  ['좋아하는 간식을 먹고 기분을 푼다','반짝선물','차곡차곡'],
  ['왜 틀렸는지 찾아서 다음엔 조심한다','보물창고','별빛집중']]],
 ['숙제를 할 때 나의 스타일은?',[
  ['작은 것부터 하나씩 빨리빨리','척척','씩씩'],
  ['달력에 스티커를 붙이며 차근차근','차곡차곡','와글와글'],
  ['집중이 잘 될 때 한 번에 몰아서','별빛집중','다시보기'],
  ['계획이 틀어져도 오늘 할 것만은 꼭','오뚝이','반짝선물']]],
 ['놀이나 게임을 할 때 내가 좋아하는 것은?',[
  ['캐릭터 옷과 아이템을 멋지게 꾸미기','보물창고','반짝선물'],
  ['지고 있다가 끝에 역전하기','씩씩','오뚝이'],
  ['규칙과 비법을 외워서 가장 빨리 깨기','다시보기','척척'],
  ['친구들과 한 팀으로 힘을 합치기','와글와글','차곡차곡']]],
 ['공부하는데 TV나 영상이 너무 보고 싶을 때 나는?',[
  ['"타이머 끝나면 볼 거야!"','별빛집중','척척'],
  ['리모컨이나 태블릿을 다른 방에 둔다','차곡차곡','다시보기'],
  ['이미 봐 버렸다면 "지금부터 두 배로 열심히!"','오뚝이','씩씩'],
  ['공부하는 내 모습을 가족에게 자랑한다','와글와글','보물창고']]],
 ['공부하면서 가장 신나는 순간은?',[
  ['문제집 한 권을 끝까지 다 풀었을 때','보물창고','차곡차곡'],
  ['받아쓰기나 단원평가 점수가 확 올랐을 때','씩씩','척척'],
  ['어제 틀린 문제를 오늘 맞혔을 때','다시보기','별빛집중'],
  ['다 하고 칭찬이나 선물을 받을 때','반짝선물','오뚝이']]],
 ['스터디아에서 나만의 무기를 하나 고른다면?',[
  ['버튼 한 번에 뿅뿅 나가는 별빛 레이저','척척','반짝선물'],
  ['강화할수록 빛나는 전설의 검','보물창고','씩씩'],
  ['힘을 모았다가 한 번에 쏘는 마법 지팡이','별빛집중','다시보기'],
  ['친구를 지켜 주는 응원봉과 행운 방패','오뚝이','와글와글']]],
 ['꿈의 문을 열었을 때 가장 듣고 싶은 말은?',[
  ['"와, 너는 진짜 최강 용사야!"','씩씩','다시보기',2],
  ['"매일 꾸준히 해서 해냈구나!"','차곡차곡','별빛집중',2],
  ['"보물이랑 선물이 다 네 거야!"','반짝선물','보물창고','오뚝이',2],
  ['"우리 같이 해냈어! 주인공은 바로 너야."','와글와글','척척',2]]]
];

/* ---------- 캐릭터 선택지 (초등용으로 순화) ---------- */
SK.JOBS='공주,왕자,용사,왕,여왕,기사,여행가,모험가,마법사,연금술사,드래곤 조련사,힐러,소환사,닌자,탐정,요리사,발명가,과학자,화가,수의사,우주비행사,운동선수,아이돌,크리에이터'.split(',');
SK.PERS='집이 좋아,친구부자,무대 체질,꼼꼼이,기분파,느긋이,장난꾸러기,행운아,부지런쟁이,겉바속촉,승부욕 대장,계획쟁이,즉흥쟁이,솔직이,에너지 대장,조심쟁이,꿈꾸는 아이,눈치 빠른 아이,호기심 대장,다정이'.split(',');
SK.FOODS='떡볶이,김밥,치킨,피자,햄버거,돈가스,짜장면,초밥,계란말이,핫도그,붕어빵,마라탕,탕후루,아이스크림,딸기,수박,바나나우유,딸기우유'.split(',');
SK.HOBBY='레고·블록,종이접기,그림,다꾸,보드게임,만화책,웹툰,축구·풋살,줄넘기,자전거,피아노·악기,노래·춤,아이돌 응원,동물 돌보기,카드 모으기,요리,과학 실험,음악 듣기'.split(',');
SK.GOALS=['괴물을 모두 물리치고 스터디아 구하기','최고의 단짝 친구 만나기','꿈의 문 열고 꿈 이루기','최강 모험단 만들기'];
SK.COLORS=[['루비 레드','#D7263D'],['구운 고구마 오렌지','#F26B1D'],['행운 옐로우','#E3B10E'],['에메랄드 그린','#1FA67A'],['민트 초코','#3FB8A2'],['스카이 블루','#4FA9E8'],['코발트 네이비','#24408E'],['요정 퍼플','#9B4DFF'],['벚꽃 핑크','#EE7FAE'],['실버 문','#8E97A6'],['골드 크라운','#C99A12'],['밤하늘 블랙','#2B2B2E']];
/* 캐릭터 이름·직접 입력에 막는 말 (필요하면 더 넣으세요) */
SK.BANNED=['바보','멍청','병신','시발','씨발','ㅅㅂ','ㅂㅅ','개새','존나','좆','꺼져','죽어','미친','븅신','엿먹'];
SK.badWord=function(t){t=String(t||'').replace(/\s/g,'');return SK.BANNED.some(w=>t.includes(w))};
/* 마음 체크 한마디에서 선생님께 알릴 말 (내용은 보내지 않고 '알림 있음' 표시만) */
SK.DANGER=['죽고싶','죽고 싶','죽을래','사라지고싶','사라지고 싶','자해','때려','맞았','무서워','괴롭혀','왕따','살기싫','살기 싫'];
SK.dangerWord=function(t){t=String(t||'');return SK.DANGER.some(w=>t.includes(w))};

/* ---------- 과목 보스 6종 (HP 합 2,730) ---------- */
SK.SUBJ={
  m:{n:'수학',boss:'분수 골렘',hp:750,c:'#E8484A',sk:['받아올림 까먹기','분모 바꿔치기','단위 헷갈리기'],gear:'황금 컴퍼스 검',title:'계산 마스터'},
  e:{n:'영어',boss:'단어 먹보 몬스터',hp:750,c:'#4FA9E8',sk:['철자 뒤섞기','발음 안개','단어 잊어버리기'],gear:'원어민의 번역 망토',title:'단어 지배자'},
  k:{n:'국어',boss:'맞춤법 안개요정',hp:300,c:'#F26B1D',sk:['띄어쓰기 미로','받침 바꿔치기','중심 문장 숨기기'],gear:'꿰뚫는 형광펜 지팡이',title:'낱말 탐정'},
  b:{n:'EBS',boss:'궁금증 슬라임',hp:300,c:'#1FA67A',sk:['개념 섞기','졸음 안개','강의 건너뛰기'],gear:'무지개 플라스크 가방',title:'꼬마 탐구왕'},
  r:{n:'독서',boss:'책장 잠금 드래곤',hp:180,c:'#9B4DFF',sk:['책장 봉인','줄거리 지우기','책갈피 숨기기'],gear:'이야기 깃펜',title:'책 마법사'},
  w:{n:'숙제',boss:'미루기 대마왕',hp:450,c:'#7A4B2A',sk:['"이따 할게" 주문','숙제 가방 숨기기','연필 부러뜨리기'],gear:'약속의 황금 시계',title:'약속 지킴이'}
};
SK.SUBJ_KEYS=['m','e','k','b','r','w'];

/* ---------- 루틴런 체크 9개 (점수·횟수 제한·표준 시간) ---------- */
/* wk = 한 주(월~일)에 점수가 되는 횟수, min = 학부모 리포트 예상 공부시간(추측) */
SK.ACT={
  math:{n:'수학',pt:5,s:'m',wk:6,min:30},
  eng:{n:'영어',pt:5,s:'e',wk:6,min:30},
  kor:{n:'국어',pt:3,s:'k',wk:4,min:20},
  ebs:{n:'EBS',pt:3,s:'b',wk:4,min:20},
  m1:{n:'미션1 숙제검사',pt:5,s:'w',wk:2,min:30,teacher:true},
  m2:{n:'미션2 채점하고 고치기',pt:1,s:'w',min:15},
  school:{n:'학교숙제',pt:1,s:'w',wk:1,min:20},
  book:{n:'책읽기',pt:1,s:'r',min:20},
  clean:{n:'청소 (저녁에 방과 책상)',pt:1,s:null,life:true,min:0}
};
SK.ORDER=['math','eng','kor','ebs','m1','m2','school','book','clean'];

/* ---------- 시즌·점수 규칙 ---------- */
SK.BASE=300;            /* 한 달 기준치 300점 = 3,000 데미지 */
SK.DAILY_CAP=30;        /* 하루 랭킹 상한 (체크 + 올클리어) */
SK.DEADLINE_HOUR=22;    /* 그날 밤 10시 마감 */
SK.ALLCLEAR=2; SK.STREAK3=2; SK.STREAK7=5;
SK.BLESS_PCT=10; SK.ITEM_GEAR=100; SK.ITEM_CHEST=300;
SK.TIMER_MIN=15;
SK.LOTS_MIN=150;        /* 하루 예상 공부시간이 이보다 많으면 '쉬어도 돼' 안내 */
SK.STAGES=[[0,'아기',''],[80,'꼬마','리본'],[180,'씩씩이','망토'],[300,'챔피언','왕관'],[420,'전설','빛나는 왕관']];
SK.stage=function(pts){let s=SK.STAGES[0];SK.STAGES.forEach(x=>{if(pts>=x[0])s=x});return s};
SK.LV_TITLES=['떨어진 아이','견습 모험가','숙련 모험가','왕국 수호자','대륙의 주인'];

/* ---------- 계절·방학 레이드 6종 ---------- */
/* specs: m = 문이 열리는 달, n = 충전하는 달 수 (열리기 전 n달) */
SK.RAIDS=[
 {id:'spring',n:'꽃샘바람 마녀',when:'새 학년 적응',specs:[{m:4,n:1}],sk:['새 반 두근거림','춘곤증 꽃가루'],title:'새싹 용사'},
 {id:'summer',n:'녹아내리는 아이스크림 거인',when:'1학기 마무리',specs:[{m:7,n:2}],sk:['더위 멍때리기','방학 설렘'],title:'폭염 생존자'},
 {id:'sleepy',n:'늦잠 괴물 잠보',when:'여름방학',specs:[{m:8,n:1}],sk:['이불 속 주문','하루 종일 TV'],title:'방학 루틴왕'},
 {id:'autumn',n:'낙엽 졸음 마왕',when:'독서의 계절',specs:[{m:10,n:1}],sk:['책장 덮기','천고마비 식곤증'],title:'가을 독서왕'},
 {id:'winter',n:'눈사람 왕 프로스트',when:'학년 마무리',specs:[{m:12,n:2}],sk:['이불 밖은 위험해','연말 파티 유혹'],title:'학년 마무리 전설'},
 {id:'icedragon',n:'꽁꽁 얼음 용',when:'겨울방학·새 학년 준비',specs:[{m:2,n:1}],sk:['방학 까먹기','새 학년 걱정'],title:'한 학년 점프'}
];
SK.HIDDEN={n:'꿈의 문 수문장',hp:12*SK.BASE*10};
/* ---------- 늦게 온 용사의 축복 (중간에 들어온 아이) ----------
 * 가입일(캐릭터 만든 날) 전에 지나간 날만큼 보스 체력을 미리 깎아 줘요. 랭킹 점수에는 안 들어가요.
 * 미리 깎는 양 = 보스 체력(또는 충전 최대치) × 지나간 날 비율 × 아래 %.  0으로 하면 꺼져요. */
SK.LATE={boss:100,raid:75,hidden:100};
/* ---------- 보스 반격 ----------
 * 가입한 뒤 체크를 하나도 안 한 날마다 그달 과목 보스가 최대 체력의 pct% 회복해요 (한 달 합계 maxPct%까지).
 * 이미 쓰러뜨린 보스는 회복하지 않아요. 점수는 깎이지 않아요. pct를 0으로 하면 꺼져요. */
SK.REGEN={pct:3,maxPct:15};


/* ---------- 마음 체크 8칸 ---------- */
SK.CELLS=['몰입','각성','통제','이완','지루함','무관심','걱정','불안'];
SK.CELLMSG={몰입:['"오늘 완전 집중 모드였어!"','유지하고 다음 단계 미리보기'],각성:['"어려웠는데 끝까지 했구나!"','같은 난이도 + EBS 개념 복습'],통제:['"여유 있네? 한 단계 올려 볼까?"','조금 어려운 문제 도전'],이완:['"쉬웠지? 실수만 조심!"','채점하고 고치기 해 보기'],지루함:['"지루했지? 내일은 타이머 도전!"','15분 타이머 챌린지'],무관심:['"오늘은 쉬어가는 날. 괜찮아"','꿈 카드 다시 보기, 작은 체크 1개'],걱정:['"헷갈린 게 있었지? 천천히 다시 보자"','개념 복습 먼저'],불안:['"많이 어려웠지. 끝까지 한 게 대단해"','난이도 내리기, 쉬운 문제부터']};
SK.BADCELLS=['불안','무관심','걱정'];

/* ---------- 픽셀 그림 ---------- */
SK.ANIMALS={
 rabbit:{n:'토끼',f:'#F5F0E8',F:'#D9CFC2',w:'#FFFFFF',head:["...ff..ff...","...fp..pf...","...fp..pf...","..ffffffff..",".ffffffffff.",".ffeffffeff.",".fpffwwffpf.",".fffwppwfff.","..ffffffff.."]},
 bear:{n:'곰',f:'#B07A48',F:'#7A4A26',w:'#E9CDA2',head:["............",".FF......FF.",".FfF....FfF.","..ffffffff..",".ffffffffff.",".ffeffffeff.",".fffwwwwfff.",".fffwkkwfff.","..ffffffff.."]},
 cat:{n:'고양이',f:'#F2A65A',F:'#C77A35',w:'#FFF3E0',head:["............",".f........f.",".fp......pf.",".ffffffffff.",".fFfffffFff.",".ffeffffeff.",".pfffwwfffp.",".ffffwkwfff.","..ffffffff.."]},
 dog:{n:'강아지',f:'#F1D3A1',F:'#8A5A3A',w:'#FFFFFF',head:["............","............","..ffffffff..",".FffffffffF.","FFffffffffFF","FFfeffffefFF","FFffwwwwffFF",".FffwkkwffF.","..ffffffff.."]},
 lion:{n:'사자',f:'#F4C25A',F:'#D9772B',w:'#FFF1C9',head:["...FFFFFF...",".FFFFFFFFFF.","FFFffffffFFF","FFffffffffFF","FFfeffffefFF","FFffwwwwffFF","FFffwkkwffFF",".FFffwwffFF.","..FFFFFFFF.."]},
 squirrel:{n:'다람쥐',f:'#C98049',F:'#8E5326',w:'#F7E2C4',head:["............","..F......F..","..fF....Ff..","..ffffffff..",".ffffffffff.",".ffeffffeff.",".fwwffffwwf.",".fwwfppfwwf.","..ffffffff.."],
   extra:{x:11,y:4,rows:[".FF.","FffF","FffF",".Fff","..Ff","..Ff",".Ff.","Ff.."]}},
 croc:{n:'악어',f:'#5DB85A',F:'#3E8E3A',w:'#DFF2B8',head:["............","..ff....ff..",".fwef..fwef.",".ffffffffff.","ffFffffffFff",".ffffffffff.",".fwwwwwwwwf.",".fwkwwwwkwf.","..ffffffff.."]}
};
SK.ANIMAL_KEYS=['croc','lion','rabbit','squirrel','bear','dog','cat'];
const BODY=["...oooooo...","..oooooooo..",".hooOooOooh.",".hbbbybbbbh.","..oooooooo..","...ll..ll...","...LL..LL..."];
/* 직업마다 머리 장식 */
const JOB_HAT={마법사:'wiz',연금술사:'wiz',소환사:'wiz',힐러:'wiz',용사:'sword',기사:'helm',닌자:'band',공주:'crown',왕자:'crown',왕:'crown',여왕:'crown',아이돌:'crown',탐정:'cap',여행가:'cap',모험가:'cap',화가:'beret',요리사:'chef',우주비행사:'helm','드래곤 조련사':'band',운동선수:'band'};
const HATS={
 wiz:{x:2,y:0,rows:["....o...","...oo...","..ooyo..","oooooooo"]},
 crown:{x:3,y:1,rows:["y.yy.y","yyyyyy","yryyry"]},
 cap:{x:2,y:1,rows:["..oooo..",".oooooo.","oooooooO"]},
 beret:{x:2,y:1,rows:["..ooooo.",".ooooooo"]},
 chef:{x:3,y:0,rows:[".WWWW.","WWWWWW","WWWWWW","WWWWWW"]},
 helm:{x:2,y:1,rows:["..GGGG..",".GGGGGG.","GGGGGGGG"]},
 band:{x:1,y:3,rows:["oooooooooo"]},
 sword:{x:3,y:1,rows:["..GG..",".GGGG.","GGGGGG"]}};
const SWORD={x:11,y:7,rows:["..w","..w","..w","yyy",".b."]};
function shade(hex,k){const n=parseInt(String(hex).slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;return '#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v*k))).toString(16).padStart(2,'0')).join('')}
function grid(w,h){return Array.from({length:h},()=>Array(w).fill('.'))}
function stamp(g,rows,x,y){rows.forEach((r,j)=>{for(let i=0;i<r.length;i++){const c=r[i];if(c!=='.'&&g[y+j]&&x+i<g[0].length)g[y+j][x+i]=c}})}
function toCanvas(g,pal,scale){const h=g.length,w=g[0].length;const c=document.createElement('canvas');c.width=w*scale;c.height=h*scale;const x=c.getContext('2d');
  for(let j=0;j<h;j++)for(let i=0;i<w;i++){const ch=g[j][i];if(ch==='.'||ch===' ')continue;x.fillStyle=pal[ch]||'#f0f';x.fillRect(i*scale,j*scale,scale,scale)}c.className='px';return c}
SK.heroCanvas=function(animal,aura,job,scale){const A=SK.ANIMALS[animal]||SK.ANIMALS.rabbit;aura=aura||'#EE7FAE';const g=grid(15,16);
  if(A.extra)stamp(g,A.extra.rows,A.extra.x,A.extra.y);
  stamp(g,A.head,0,0);stamp(g,BODY,0,9);
  const jk=JOB_HAT[job]||null;const hat=jk&&HATS[jk];if(hat)stamp(g,hat.rows,hat.x,hat.y);
  if(jk==='sword'||job==='기사')stamp(g,SWORD.rows,SWORD.x,SWORD.y);
  const pal={f:A.f,h:A.f,F:A.F,w:A.w,e:'#2B1D16',k:'#2B1D16',p:'#F59AB5',b:'#6B4329',y:'#FFD84A',r:'#E2453C',l:'#4A3426',L:'#2B1D16',o:aura,O:shade(aura,.72),W:'#FFFFFF',G:'#B9C2CF'};
  return toCanvas(g,pal,scale||4)};

/* 보스 그림: 과목 보스 6 + 레이드 6 + 히든보스 + 소품 */
SK.SPR={
 m:{pal:{d:'#4B4F5C',G:'#A7ABB8',g:'#7D8290',o:'#FF8A2F',y:'#FFD84A'},rows:["....dddddddd....","...dGGGGGGGGd...","..dGGgGGGGgGGd..","..dGoogGGgooGd..","..dGGGGGGGGGGd..","..dGgddddddgGd..","...dGGGGGGGGd...",".dddddddddddddd.","dGGGdGGGyGGdGGGd","dGGGdGyyyyGdGGGd","dGGGdGGGyGGdGGGd","dgggdGGGGGGdgggd","....dGGGGGGd....","...dGGd..dGGd...","...dddd..dddd..."]},
 e:{pal:{v:'#5B2E8C',V:'#8D5BD1',w:'#FFFFFF',k:'#2B1030',r:'#F06A8A'},rows:[".....vvvvvv.....","...vvVVVVVVvv...","..vVVwwVVwwVVv..",".vVVwkwVVwkwVVv.",".vVVwwVVVVwwVVv.","vVVVVVVVVVVVVVVv","vVkkkkkkkkkkkkVv","vVkwkwkwkwkwkkVv","vVkkkkrrrrkkkkVv","vVkwkwkwkwkwkkVv","vVVkkkkkkkkkkVVv",".vVVVVVVVVVVVVv.","..vvVVvvvvVVvv..","...vv......vv..."]},
 k:{pal:{c:'#9FD8F0',C:'#D8F2FB',b:'#7FB8D6',B:'#E4F6FF',k:'#22415A',p:'#F59AB5',W:'#FFFFFF'},rows:["......bbbb......",".cc..bBBBBb..cc.","cCCc.bBkBkb.cCCc","cCCCcbBBBBbcCCCc",".cCCcbBppBbcCCc.","..cc.bBBBBb.cc..","......bWWb......",".....bWWWWb.....","....bWWWWWWb....","...bWWWWWWWWb...","....b..bb..b...."]},
 b:{pal:{y:'#FFD84A',e:'#2E7D32',E:'#6CC24A',w:'#FFFFFF',k:'#1B3A1C',m:'#1B3A1C'},rows:["......yyy.......",".....y...y......",".........y......","........y.......",".......y........",".......y........","................",".......y........",".....eeeeee.....","...eeEEEEEEee...","..eEEwwEEwwEEe..",".eEEEwkEEwkEEEe.",".eEEEEEEEEEEEEe.","eEEEEEEmmEEEEEEe","eEEEEEEEEEEEEEEe",".eeeeeeeeeeeeee."]},
 r:{pal:{r:'#B3261E',R:'#E2453C',w:'#FFFFFF',k:'#2B1D16',m:'#6E1410',t:'#7A4A2B',T:'#C98A55',y:'#FFD84A'},rows:["..r.......r.....","..rr.....rr.....","..rRRRRRRRr.....",".rRRwkRRwkRr....",".rRRRRRRRRRr..r.",".rRRRmmmmRRr.rr.","..rRRRRRRRr.rRr.","...rrRRRrr..rr..","..rRRRRRRRRrr...",".rRRtttttRRRr...",".rRtTyyTtRRr....",".rRtTyyTtRr.....","..rtttttRr......","..rr...rr.......","..rr...rr......."]},
 w:{pal:{y:'#FFD84A',Y:'#C99A12',n:'#2D1B4E',N:'#5B3B8C',r:'#FF5A5A',k:'#140A22',w:'#FFFFFF'},rows:["...y..y..y..y...","...yyyyyyyyyy...","...yYyyYYyyYy...","..nnnnnnnnnnnn..",".nNNNNNNNNNNNNn.",".nNrrNNNNNNrrNn.",".nNNNNNNNNNNNNn.",".nNNNkkkkkkNNNn.","..nNNNNNNNNNNn..","nnnnnnnnnnnnnnnn","nNNNnNwwwwNnNNNn","nNNNnwwkwwwnNNNn","nNNNnwwkkkwnNNNn","nNNNnNwwwwNnNNNn","....nnNNNNnn....","...nnn....nnn..."]},
 spring:{pal:{q:'#E26A9A',P:'#F7A1C4',w:'#FFFFFF',k:'#2B1D16',m:'#B3261E',t:'#7A4A2B'},rows:["....qPPPPPPq....","..qPPwPPPPwPPq..",".qPPPPPPPPPPPPq.","qPPwPPPPPPPPwPPq","qPPPPkPPPPkPPPPq","qPPPPPPPPPPPPPPq",".qPPPPPmmPPPPPq.","..qqqPPPPPPqqq..","......tttt......","...t..tttt..t...","....tttttttt....","......tttt......","......tttt......",".....tttttt.....","....tt.tt.tt...."]},
 summer:{pal:{p:'#F7A1C4',P:'#FFD1E3',c:'#C98A55',C:'#E9B97A',k:'#2B1D16',w:'#FFFFFF',b:'#8FE3DB'},rows:["....pppppppp....","..ppPPPPPPPPpp..",".pPPPwPPPPwPPPp.",".pPPkkPPPPkkPPp.","pPPPPPPPPPPPPPPp","pPPPPPkkkkPPPPPp",".pPPPPPPPPPPPPp.","..bpPbPPbPPbpb..","...b..b..b..b...","...cCcCcCcCcC...","....cCcCcCcCc...","....cCcCcCcCc...",".....cCcCcCc....","......cCcCc.....",".......cCc......","........c......."]},
 sleepy:{pal:{c:'#7C4DCC',C:'#C9B3F5',w:'#FFFFFF',k:'#2B1D16',m:'#5B3B8C',y:'#FFD84A',r:'#E2453C'},rows:["...........yy...","..........ryr...",".........rrr....","......CCCrr.....","....CCcccCC.....","...CccccccccC...","..CcckkcckkccC..","..CcccccccccC...",".CccccmmmmccccC.","CccccccccccccccC","CcCccccccccccCcC",".CCCCCCCCCCCCCC."]},
 autumn:{pal:{a:'#E07A2E',A:'#F2A541',s:'#F6C9A0',k:'#2B1D16',m:'#B3261E',v:'#6B3FA0'},rows:[".......aa.......","......aAAa......",".....aAAAAa.....","....aAAaAAAa....","..aaaaaaaaaaaa..",".....ssssss.....",".....skssks.....",".....ssmmss.....","....vvvvvvvv....","...vvvvAAvvvv...","..svvvvvvvvvvs..","...vvvvvvvvvv...","...vvvvvvvvvv...","..vvvvvvvvvvvv.."]},
 winter:{pal:{y:'#F7C531',W:'#D8EEF7',w:'#FFFFFF',k:'#2B1D16',o:'#F7A531',B:'#3B82F6'},rows:["....y.y.y.y.....","....yyyyyyy.....",".....WwwwW......","....WwkwkwW.....","....WwwoowW.....",".....WwwwW......","...BBBBBBBBB....","..WwwwwBBwwwW...",".WwwwwwkwwwwwW..",".WwwwwwwwwwwwW..",".WwwwwwkwwwwwW..","..WwwwwwwwwwW...","...WWWWWWWWW...."]},
 icedragon:{pal:{d:'#2B6CB0',D:'#BDEBFF',k:'#1B2A40'},rows:["..........dddd..",".........dDDDDd.",".........dDkDDd.",".........dDDDDDd",".........dDDddd.","...d....dDDDd...","..dd...dDDDDd...",".dDd..dDDDDDDd..",".dDDddDDDDDDDdd.","..dDDDDDDDDDDd..","...dDDDDDDDDd...","....dDDDDDDd....",".....dDd.dDd....",".....dd...dd...."]},
 hidden:{pal:{n:'#2D1B4E',N:'#5B3B8C',y:'#F7C531',w:'#FFFFFF'},rows:["....nnnnnnnn....","...nNNNNNNNNn...","..nNNyNNNNyNNn..","..nNNNNNNNNNNn..","..nNNwwNNwwNNn..","..nNNNNNNNNNNn..","..nNNNNyyNNNNn..",".nnNNNNNNNNNNnn.","nNNnNNNyyNNNnNNn","nNNnNNNyyNNNnNNn","nNNnNNNNNNNNnNNn","nnn.nNNNNNNn.nnn","....nNNnnNNn....","....nNn..nNn....","...nnNn..nNnn..."]},
 star:{pal:{y:'#F7C531'},rows:["..y..",".yyy.","yyyyy",".yyy.",".y.y."]},
 coin:{pal:{y:'#C9901A',Y:'#FFD84A'},rows:[".yyy.","yYyYy","yYYYy","yYyYy",".yyy."]},
 logo:{pal:{k:'#2B1D16',s:'#D9D2E6',S:'#A79FC0',p:'#7B3FE0',P:'#C9A2FF',w:'#FFFFFF',y:'#FFD23F',Y:'#FFF0A8',g:'#6CCB5F',G:'#2E9E6B',d:'#B9783F',D:'#7A4B2A',t:'#7A4B2A',m:'#E8484A',c:'#F4E7D0'},rows:["................yy................","..............YyyyyY..............","......Y.........yy................",".............kkkkkkkk.........Y...","...........kksssyyssskk...........","..Y.......kSsssppppsssSk..........","..........kSssppppppssSk..........","..........kSSpppPPpppSSk..........","..........kSsppPppPppsSk........Y.",".....GG...kSsppPwwPppsSk..........","....GgGG..kSSpppPPpppSSk..........","...GgGgGG.kSsppppPpppsSk..........","...GGgGGG.kSspppPppppsSk...mwmm...","....GGGG..kSSppPppPppSSk..mwmmwm..",".....tt...kSsppppppppsSk....cc....",".....tt...kSsppppppppsSk....cc....","..GggGggGggGggGggGggGggGggGggGgg..",".GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.","..DddddddddddddddddddddddddddddD..","...DdDdddDdddDdddDdddDdddDddddD...",".....DddddddddddddddddddddddD.....",".......DdDdddDdddDdddDddddD.......",".........DddddddddddddddD.........","...........DdDdddDddddD...........",".............DddddddD.............","...............DddD...............","................DD................"]},
 chest:{pal:{t:'#7A4A2B',y:'#F7C531',Y:'#FFD84A',k:'#2B1D16'},rows:[".tttttt.","tyyyyyyt","tttyyttt","tYYkkYYt","tYYYYYYt","tttttttt"]},
 block:{pal:{b:'#7A4B2A',Y:'#FFE999',y:'#FFC83D',w:'#FFFFFF'},rows:["bbbbbbbbbbbb","bYYYYYYYYYyb","bYyyyyyyyyyb","bYyyyywyyyyb","bYyyywwwyyyb","bYwwwwwwwwyb","bYywwwwwwyyb","bYyywwwwyyyb","bYywwyywwyyb","bYyyyyyyyyyb","byyyyyyyyyyb","bbbbbbbbbbbb"]},
 owl:{pal:{b:'#8A6A4A',B:'#D9C2A0',w:'#FFFFFF',k:'#2B1D16',y:'#FFB020'},rows:[".b....b.","bbbbbbbb","bwwbbwwb","bwkbbkwb","bbbyybbb",".bBBBBb.",".bBBBBb.","..y..y.."]},
 fish:{pal:{t:'#B5762E',T:'#F2B35E',k:'#2B1D16'},rows:["..tttttt..",".tTTTTTTt.","tTkTTTTTTt","tTTTTTTTTt",".tTTTTTTt.","..tttttt.t",".........t"]},
 cloud:{pal:{w:'#FFFFFF',b:'#BDEBFF'},rows:[".....wwww.......","...wwwwwwww.....",".wwwwwwwwwwwww..","wwwwwwwwwwwwwwww","bwwwwwwwwwwwwwwb",".bbbbbbbbbbbbbb."]},
 mush:{pal:{R:'#D7263D',w:'#FFFFFF',x:'#F3E3C3'},rows:[".RRRR.","RwRRwR","RRRRRR","..xx..","..xx.."]},
 tree:{pal:{D:'#6CC24A',d:'#3E8E3A',t:'#7A4A2B'},rows:["....DDDD....","..DDDDDDDD..",".DDDdDDDDDD.","DDDDDDDdDDDD","DDdDDDDDDDDD",".DDDDDDdDDD.","..DDDDDDDD..",".....tt.....",".....tt.....","....tttt...."]},
 sword:{pal:{w:'#FFFFFF',y:'#F7C531',t:'#7A4A2B'},rows:["......w",".....ww","....ww.","y..ww..",".yww...",".ty....","t.y...."]}
};
SK.sprCanvas=function(key,scale){const S=SK.SPR[key];if(!S)return document.createElement('span');const w=Math.max(...S.rows.map(r=>r.length));const g=grid(w,S.rows.length);stamp(g,S.rows,0,0);return toCanvas(g,S.pal,scale||3)};
/* <span data-spr="m" data-sc="3"> 또는 <span data-hero data-a="rabbit" data-c="#EE7FAE" data-j="마법사" data-sc="4"> 를 그림으로 바꿈 */
SK.hydrate=function(root){(root||document).querySelectorAll('[data-spr],[data-hero]').forEach(el=>{if(el.firstChild)return;const sc=+el.dataset.sc||3;
  el.appendChild(el.hasAttribute('data-hero')?SK.heroCanvas(el.dataset.a,el.dataset.c,el.dataset.j,sc):SK.sprCanvas(el.dataset.spr,sc))})};
SK.heroTag=function(c,sc,extra){c=c||{};const e=s=>String(s??'').replace(/[&<>"]/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[x]));
  return `<span data-hero data-a="${e(c.animal||'rabbit')}" data-c="${e(c.color||'#EE7FAE')}" data-j="${e(c.job||'')}" data-sc="${sc||3}" ${extra||''}></span>`};

/* ---------- 날짜 (그날 0시~24시가 하루, 체크는 밤 10시 마감) ---------- */
SK.key=function(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
SK.dayKey=function(d){return SK.key(d||new Date())};
SK.parseDay=function(k){const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)};
SK.addDays=function(k,n){const d=SK.parseDay(k);d.setDate(d.getDate()+n);return SK.key(d)};
SK.weekKey=function(k){const d=SK.parseDay(k);return SK.addDays(k,-((d.getDay()+6)%7))};
SK.fmt=function(k){const d=SK.parseDay(k);return (d.getMonth()+1)+'/'+d.getDate()+'('+'일월화수목금토'[d.getDay()]+')'};
SK.closed=function(){return new Date().getHours()>=SK.DEADLINE_HOUR};

window.SK=SK;
})();
