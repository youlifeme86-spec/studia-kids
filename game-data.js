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
  hc:{n:'씩씩 연방',zone:'서부',zn:'서부 도전 권역',c:'#D64545',p:'도전 크리티컬',d:'히든미션 숙제검사·선생님 추가 포인트에 치명타 ×2'},
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
  m1:{n:'히든미션: 마스터의 가호 · 숙제검사',pt:3,s:'w',wk:2,min:30,teacher:true},
  m2:{n:'미션2 채점하고 고치기',pt:1,s:'w',min:15},
  school:{n:'학교숙제',pt:1,s:'w',wk:1,min:20},
  book:{n:'책읽기',pt:1,s:'r',min:20},
  clean:{n:'청소 (저녁에 방과 책상)',pt:1,s:null,life:true,min:0},
  bag:{n:'가방 정리 (내일 준비물 챙기기)',pt:1,s:null,life:true,min:0}
};
/* EBS 권한: 'on' 매일 · 'wd' 평일만(토·일 닫힘) · 'off' 안 보임. 선생님 화면 [학생 계정]의 EBS 칸에서 바꾸고, 서버에 값이 없을 때만 아래 기본값을 써요 */
/* 출석: 앱을 처음 열면 도장 준비, 그날 메인 과목(main)을 1개 이상 체크해야 도장이 찍히고 출석 상자(궁극기 게이지 +gauge%)가 열려요.
 * 한 주(월~일)에 도장 week개를 모으면 주간 선물: 알 부화 +egg점 */
/* 마음 체크를 한 날마다 알 부화 +점 (알을 고른 날부터) */
SK.EMO_EGG=1;
SK.ATT={gauge:20,week:5,egg:5,main:['math','eng','kor','ebs'],from:'2026-11-28'};
/* 새 기능 시작 시각 (서울 기준): 출석 도장과 가방 정리는 이때부터 보여요 */
SK.NEW_AT=Date.parse('2026-11-28T01:00:00+09:00');SK.newOn=function(){return Date.now()>=SK.NEW_AT};
SK.EBS_DEFAULT={ryu01:'wd',lee1102:'wd',kim1223:'wd',asd10041004:'on'};
SK.ORDER=['math','eng','kor','ebs','m1','m2','school','book','clean','bag'];
/* 오늘 탭 칸 나누기: 공부 체크(올클리어는 이것만 다 하면 발동) · 공부 지원 체크 */
SK.STUDY=['math','eng','kor','ebs'];SK.SUPPORT=['m1','m2','school','book','clean','bag'];
/* 미션1 점수: 이 날짜 전에 받은 숙제검사는 예전 점수(5점) 그대로 */
SK.M1_FROM='2026-11-28';SK.M1_OLD=5;
/* 히든미션 학생별 설정 [주 횟수, 1회 점수]. 첫 번째가 기본값 (선생님 화면 [학생 계정]에서 고름) */
SK.M1_PLANS=[[2,3],[1,6],[1,3],[2,5],[1,10],[2,10]];

/* ---------- 시즌·점수 규칙 ---------- */
SK.BASE=300;            /* 한 달 기준치 300점 = 3,000 데미지 */
SK.DAILY_CAP=30;        /* 하루 랭킹 상한 (체크 + 올클리어) */
SK.DEADLINE_HOUR=24;    /* 그날 밤 12시(자정) 마감. 22로 바꾸면 밤 10시 마감 */
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
/* ---------- 일찍 끝낸 용사 ----------
 * 서울 시각으로 hour시 전에 체크하면 그 공격 데미지 +pct%. (랭킹 점수는 그대로) pct를 0으로 하면 꺼져요. */
SK.EARLY={hour:22,pct:0};   /* 골든타임으로 바뀌어서 꺼 둠 */
/* ---------- 손맛 엔진 (데미지만, 랭킹 점수는 그대로) ----------
 * 크리티컬: pct% 확률로 ×mult, 슈퍼 크리(MEGA HIT): megaPct% 확률로 ×megaMult. 궁극기가 찬 공격은 무조건 MEGA ×3 (주사위 안 굴림)
 * 데일리 콤보: 오늘 몇 번째 체크인지에 따라 +% (2번째 +10, 3번째 +20, 4번째부터 +30)
 * 골든타임: 서울 시각 from시~to시 전 체크 +pct% */
/* 스트릭 방패: every일 연속 출석마다 1개 (최대 max개). 체크 없는 날 자동으로 1개 써서 연속 기록을 지키고 보스 반격도 막아요 */
SK.SHIELD={every:5,max:2};
/* 최소 시동 퀘스트: 오늘 체크가 하나도 없을 때 '문제 1개만' → dmg 데미지 + 출석 인정 (랭킹 점수 0) */
/* 문제 1개만(최소 시동): 학생이 [알리기] → 선생님이 허가해야 출석 인정 + 데미지 */
SK.MINI={dmg:5};
/* 파트너 같이 공격: 12/1부터 장착 파트너가 체크마다 추가 데미지 (1·2·3단계) */
SK.PET_HIT={from:'2026-12-01',dmg:[3,4,5]};
/* ---------- 알 부화 (파트너) ----------
 * 알을 고른 날부터 랭킹 점수(raw)가 쌓여 자라요: 1차 부화 30점 → 2차 성장 150점(버프 강해짐) → 최종 각성 300점.
 * 부화한 파트너는 도감에 들어가고, 한 번에 1마리만 내 캐릭터 옆에 데리고 다녀요(도감에서 바꿔 끼기). 알은 한 번에 1개만 품어요.
 * buf: 단계별(1차·2차·최종) 수치 */
SK.EGG_STAGES=[30,150,300];
SK.EGGS={
  fire:{egg:'불꽃알',n:['아기 드레이크','불꽃 드레이크','이그니스 드래곤'],buf:[5,8,10],d:v=>`크리티컬 확률 +${v}%`,who:'한 방의 짜릿함을 좋아하는 용사'},
  leaf:{egg:'비취알',n:['숲 부엉이','숲지기 부엉이','가디언 아울'],buf:[4,4,4],d:v=>`스트릭 방패를 ${v}일 연속마다 받아요 (원래 5일)`,d2:'콤보 +5% 추가',who:'끊기지 않고 꾸준히 하고 싶은 용사'},
  sea:{egg:'심해알',n:['수정 여우','파도 여우','아쿠아 울프'],buf:[20,30,40],d:v=>`약점 과목 데미지 +${v}%`,who:'미루는 과목이 있는 용사'},
  star:{egg:'성운알',n:['별 고양이','은하 고양이','코스모 링스'],buf:[15,25,30],d:v=>`골든타임(저녁 7~9시) 데미지 +${v}% 추가`,who:'저녁에 집중이 잘 되는 용사'}
};
SK.EGG_KEYS=['fire','leaf','sea','star'];
SK.CRIT={pct:15,mult:1.5,megaPct:3,megaMult:2};
SK.COMBO=[0,0,10,20,30];
SK.GOLDEN={from:19,to:21,pct:20};
/* 크리·콤보·골든타임으로 데미지가 평균 30% 정도 늘어서, 보스 체력도 같이 올렸어요 (×HPX, 10 단위 반올림) */
SK.HPX=1.3;
/* ---------- 겨울 이벤트 (2026 런칭 기념, 한 번만) ----------
 * 1) 11월 과목 보스 = 연습 보스: 체력을 작게(novHp) 하고 novEnd까지 싸울 수 있어요. 12월 첫 주 체크는 11월 연습 보스와 12월 보스에 같이 들어가요.
 * 2) 눈사람 왕 레이드(12월): 문이 열린 뒤 남은 체력을 최대 raidMax로.
 * 3) 히든보스 겨울판: hidFrom부터 모은 데미지가 hidGate를 넘으면 문이 열리고, hidHp를 hidTo(크리스마스)까지 깎으면 처치.
 * 1월부터는 원래 규칙. 이벤트를 끄려면 SK.WINTER=null */
SK.WINTER={nov:'2026-11',novEnd:'2026-12-07',novHp:{m:150,e:150,k:90,b:90,r:30,w:70},
  raidOpen:'2026-12-01',raidMax:3000,
  hidFrom:'2026-12-01',hidTo:'2026-12-25',hidGate:1000,hidHp:1500,hidTitle:'크리스마스 꿈의 용사'};
(function(){const r=v=>Math.round(v*SK.HPX/10)*10;SK.SUBJ_KEYS.forEach(k=>SK.SUBJ[k].hp=r(SK.SUBJ[k].hp));SK.HIDDEN.hp=r(SK.HIDDEN.hp);
  const W=SK.WINTER;if(W){Object.keys(W.novHp).forEach(k=>W.novHp[k]=r(W.novHp[k]));W.raidMax=r(W.raidMax);W.hidGate=r(W.hidGate);W.hidHp=r(W.hidHp)}})();
SK.seoulMin=function(t){try{const p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',minute:'numeric',second:'numeric'}).formatToParts(t?new Date(t):new Date());const g=k=>+(p.find(x=>x.type===k)||{}).value;const m=g('minute'),sec=g('second');if(isNaN(m))throw 0;return {m,s:isNaN(sec)?0:sec}}catch(e){const d=t?new Date(t):new Date();return {m:d.getMinutes(),s:d.getSeconds()}}};
SK.seoulHour=function(t){try{const h=+new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',hour:'numeric',hourCycle:'h23'}).format(t?new Date(t):new Date());return isNaN(h)?(t?new Date(t):new Date()).getHours():h%24}catch(e){return (t?new Date(t):new Date()).getHours()}};


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
 egg_fire:{"pal": {"o": "#2B1D16", "x": "#F26B1D", "s": "#FFD84A"}, "rows": ["...oooo...", "..oxxxxo..", ".oxxxxxxo.", ".oxxsxxxo.", "oxxxxxxxxo", "oxsxxxxsxo", "oxxxxxxxxo", "oxxxsxxxxo", ".oxxxxxxo.", ".oxxxxxxo.", "..oooooo.."]},
 egg_leaf:{"pal": {"o": "#2B1D16", "x": "#5FBF7A", "s": "#D8F5C0"}, "rows": ["...oooo...", "..oxxxxo..", ".oxxxxxxo.", ".oxxsxxxo.", "oxxxxxxxxo", "oxsxxxxsxo", "oxxxxxxxxo", "oxxxsxxxxo", ".oxxxxxxo.", ".oxxxxxxo.", "..oooooo.."]},
 egg_sea:{"pal": {"o": "#2B1D16", "x": "#3A8FD8", "s": "#B9ECF8"}, "rows": ["...oooo...", "..oxxxxo..", ".oxxxxxxo.", ".oxxsxxxo.", "oxxxxxxxxo", "oxsxxxxsxo", "oxxxxxxxxo", "oxxxsxxxxo", ".oxxxxxxo.", ".oxxxxxxo.", "..oooooo.."]},
 egg_star:{"pal": {"o": "#2B1D16", "x": "#6B4FC8", "s": "#FFE066"}, "rows": ["...oooo...", "..oxxxxo..", ".oxxxxxxo.", ".oxxsxxxo.", "oxxxxxxxxo", "oxsxxxxsxo", "oxxxxxxxxo", "oxxxsxxxxo", ".oxxxxxxo.", ".oxxxxxxo.", "..oooooo.."]},
 pet_fire:{"pal": {"r": "#E2453C", "y": "#FFD84A", "w": "#FFFFFF", "k": "#2B1D16", "o": "#F7A531"}, "rows": ["..y......y..", "..yr....ry..", "..rrrrrrrr..", ".rrwkrrwkrr.", ".rrrrrrrrrr.", ".rrrryyrrrr.", "oorrrrrrrroo", "o.ryyyyyyr.o", "..ryyyyyyr..", "..rr....rr.."]},
 pet_leaf:{"pal": {"g": "#3E9B5B", "l": "#BDE8B0", "w": "#FFFFFF", "k": "#2B1D16", "y": "#FFB020"}, "rows": [".g........g.", ".gg......gg.", ".gggggggggg.", "gglllgglllgg", "glwklgglwklg", "gglllyylllgg", ".ggggyygggg.", ".gllllllllg.", ".gllllllllg.", "..gggggggg..", "...y....y..."]},
 pet_sea:{"pal": {"b": "#3A8FD8", "B": "#CFF1FF", "w": "#FFFFFF", "k": "#2B1D16"}, "rows": ["b..........b", "bb........bb", "bBb......bBb", "bbbbbbbbbbbb", "bbwkbbbbwkbb", "bbbbbBBbbbbb", ".bbbBkkBbbb.", "..bbBBBBbb..", "..bBBBBBBb..", "..bb.bb.bb.B", "..........BB"]},
 pet_star:{"pal": {"p": "#7A4FD0", "P": "#D9C9FF", "w": "#FFFFFF", "k": "#2B1D16", "y": "#FFE066"}, "rows": ["p..........p", "pp...y....pp", "pppppppppppp", "ppwkppppwkpp", "pPpppkkpppPp", ".pppppppppp.", "..pPPPPPPp..", "..pPPyPPPp..", "..pPPPPPPp.y", "..pp.pp.ppyy"]},
 crown:{"pal": {"y": "#FFD84A", "k": "#2B1D16", "r": "#E2453C"}, "rows": ["y.y.y", "yyyyy", "yrkry"]},
 star:{pal:{y:'#F7C531'},rows:["..y..",".yyy.","yyyyy",".yyy.",".y.y."]},
 coin:{pal:{y:'#C9901A',Y:'#FFD84A'},rows:[".yyy.","yYyYy","yYYYy","yYyYy",".yyy."]},
 logo:{pal:{k:'#2B1D16',s:'#D9D2E6',S:'#A79FC0',p:'#7B3FE0',P:'#C9A2FF',w:'#FFFFFF',y:'#FFD23F',Y:'#FFF0A8',g:'#6CCB5F',G:'#2E9E6B',d:'#B9783F',D:'#7A4B2A',t:'#7A4B2A',m:'#E8484A',c:'#F4E7D0'},rows:["................yy................","..............YyyyyY..............","......Y.........yy................",".............kkkkkkkk.........Y...","...........kksssyyssskk...........","..Y.......kSsssppppsssSk..........","..........kSssppppppssSk..........","..........kSSpppPPpppSSk..........","..........kSsppPppPppsSk........Y.",".....GG...kSsppPwwPppsSk..........","....GgGG..kSSpppPPpppSSk..........","...GgGgGG.kSsppppPpppsSk..........","...GGgGGG.kSspppPppppsSk...mwmm...","....GGGG..kSSppPppPppSSk..mwmmwm..",".....tt...kSsppppppppsSk....cc....",".....tt...kSsppppppppsSk....cc....","..GggGggGggGggGggGggGggGggGggGgg..",".GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.","..DddddddddddddddddddddddddddddD..","...DdDdddDdddDdddDdddDdddDddddD...",".....DddddddddddddddddddddddD.....",".......DdDdddDdddDdddDddddD.......",".........DddddddddddddddD.........","...........DdDdddDddddD...........",".............DddddddD.............","...............DddD...............","................DD................"]},
 chest:{pal:{t:'#7A4A2B',y:'#F7C531',Y:'#FFD84A',k:'#2B1D16'},rows:[".tttttt.","tyyyyyyt","tttyyttt","tYYkkYYt","tYYYYYYt","tttttttt"]},
 block:{pal:{b:'#7A4B2A',Y:'#FFE999',y:'#FFC83D',w:'#FFFFFF'},rows:["bbbbbbbbbbbb","bYYYYYYYYYyb","bYyyyyyyyyyb","bYyyyywyyyyb","bYyyywwwyyyb","bYwwwwwwwwyb","bYywwwwwwyyb","bYyywwwwyyyb","bYywwyywwyyb","bYyyyyyyyyyb","byyyyyyyyyyb","bbbbbbbbbbbb"]},
 owl:{pal:{b:'#8A6A4A',B:'#D9C2A0',w:'#FFFFFF',k:'#2B1D16',y:'#FFB020'},rows:[".b....b.","bbbbbbbb","bwwbbwwb","bwkbbkwb","bbbyybbb",".bBBBBb.",".bBBBBb.","..y..y.."]},
 fish:{pal:{t:'#B5762E',T:'#F2B35E',k:'#2B1D16'},rows:["..tttttt..",".tTTTTTTt.","tTkTTTTTTt","tTTTTTTTTt",".tTTTTTTt.","..tttttt.t",".........t"]},
 cloud:{pal:{w:'#FFFFFF',b:'#BDEBFF'},rows:[".....wwww.......","...wwwwwwww.....",".wwwwwwwwwwwww..","wwwwwwwwwwwwwwww","bwwwwwwwwwwwwwwb",".bbbbbbbbbbbbbb."]},
 mush:{pal:{R:'#D7263D',w:'#FFFFFF',x:'#F3E3C3'},rows:[".RRRR.","RwRRwR","RRRRRR","..xx..","..xx.."]},
 castle:{pal:{o:'#2B1D16',s:'#E8DCC8',S:'#B9A893',r:'#9B4DFF',f:'#F7C531',d:'#7A4A2B',w:'#FFE066'},rows:["..........ff........", "..........of........", ".........oo.........", "........orro........", "o.o.o..orrrro..o.o.o", "ooooooorrrrrrooooooo", "ossssorrrrrrrrosssso", "ossssoossssssoosssso", "oswssoossssssooswsso", "ossssoosswwssoosssso", "oSsssooSsssssooSssso", "oSsssooSsssssooSssso", "oSsssooSddddsooSssso", "oSsssooSddddsooSssso", "oSsssooSddddsooSssso", "oSsssooSddddsooSssso", "oooooooooooooooooooo"]},
 tree:{pal:{D:'#6CC24A',d:'#3E8E3A',t:'#7A4A2B'},rows:["....DDDD....","..DDDDDDDD..",".DDDdDDDDDD.","DDDDDDDdDDDD","DDdDDDDDDDDD",".DDDDDDdDDD.","..DDDDDDDD..",".....tt.....",".....tt.....","....tttt...."]},
 sword:{pal:{w:'#FFFFFF',y:'#F7C531',t:'#7A4A2B'},rows:["......w",".....ww","....ww.","y..ww..",".yww...",".ty....","t.y...."]}
};
SK.sprCanvas=function(key,scale){const S=SK.SPR[key];if(!S)return document.createElement('span');const w=Math.max(...S.rows.map(r=>r.length));const g=grid(w,S.rows.length);stamp(g,S.rows,0,0);return toCanvas(g,S.pal,scale||3)};
/* <span data-spr="m" data-sc="3"> 또는 <span data-hero data-a="rabbit" data-c="#EE7FAE" data-j="마법사" data-sc="4"> 를 그림으로 바꿈 */
SK.hydrate=function(root){(root||document).querySelectorAll('[data-spr],[data-hero]').forEach(el=>{if(el.firstChild)return;const sc=+el.dataset.sc||3;
  el.appendChild(el.hasAttribute('data-hero')?SK.heroCanvas(el.dataset.a,el.dataset.c,el.dataset.j,sc):SK.sprCanvas(el.dataset.spr,sc))})};
SK.heroTag=function(c,sc,extra){c=c||{};const e=s=>String(s??'').replace(/[&<>"]/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[x]));
  return `<span data-hero data-a="${e(c.animal||'rabbit')}" data-c="${e(c.color||'#EE7FAE')}" data-j="${e(c.job||'')}" data-sc="${sc||3}" ${extra||''}></span>`};

/* ---------- 레이스: 길을 따라 스터디아 성으로 ----------
 * list: [{c:캐릭터, n:이름, v:점수, me:true?}] (점수 높은 순). opt: {h:높이px, medal:['🥇',...]}
 * 길은 viewBox 1000×300 좌표의 꺾은선. 1등이 성 바로 앞, 나머지는 점수 비율만큼 길 위에. */
SK.ROAD=[[30,262],[170,262],[250,226],[200,188],[300,160],[450,182],[560,140],[500,100],[620,78],[760,96],[880,84]];
SK.roadAt=function(t){const P=SK.ROAD;const seg=[];let L=0;for(let i=1;i<P.length;i++){const d=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);seg.push(d);L+=d}
  let r=Math.max(0,Math.min(1,t))*L;for(let i=0;i<seg.length;i++){if(r<=seg[i]||i===seg.length-1){const f=seg[i]?Math.min(1,r/seg[i]):0;return [P[i][0]+(P[i+1][0]-P[i][0])*f,P[i][1]+(P[i+1][1]-P[i][1])*f]}r-=seg[i]}return P[P.length-1]};
SK.raceRoad=function(list,opt){opt=opt||{};const e=s=>String(s??'').replace(/[&<>"]/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[x]));
  const max=Math.max(1,...list.map(x=>x.v)),M=opt.medal||[];const pts=SK.ROAD.map(p=>p.join(',')).join(' ');
  const deco=[['tree',8,40,3],['tree',90,62,2],['mush',36,74,3],['tree',33,30,2],['mush',67,58,2],['tree',70,22,2],['cloud',14,6,3],['cloud',55,3,2],['tree',96,92,2],['mush',5,60,2]];
  const used={};
  const run=list.map((x,i)=>{const t=x.v>0?0.03+0.86*(x.v/max):0;const [px,py]=SK.roadAt(t);const k=Math.round(t*40);const lane=used[k]=(used[k]||0)+1;const dy=((lane-1)%3)*14-((lane-1)%3===2?28:0);
    return `<div class="rr${x.me?' me':''}" style="left:${(px/10).toFixed(2)}%;top:${(py/3).toFixed(2)}%;z-index:${10+Math.round(py)};margin-top:${dy}px" title="${e(x.n)} · ${x.v}점">${SK.heroTag(x.c,2)}<span class="rt">${i<3&&x.v>0&&M[i]?M[i]+' ':''}${e(x.n)}</span></div>`}).join('');
  return `<div class="road" style="height:${opt.h||300}px">
  <svg class="rsvg" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="#9C7A45" stroke-width="34" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/><polyline points="${pts}" fill="none" stroke="#F1DBA6" stroke-width="26" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/><polyline points="${pts}" fill="none" stroke="#FFF4D6" stroke-width="3" stroke-dasharray="10 12" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>
  ${deco.map(([k,x,y,sc])=>`<span class="rdeco" style="left:${x}%;top:${y}%" data-spr="${k}" data-sc="${sc}"></span>`).join('')}
  <div class="rstart" style="left:3%;top:${(262/3).toFixed(1)}%">출발</div>
  <div class="rcastle" style="left:${SK.ROAD[SK.ROAD.length-1][0]/10}%;top:${SK.ROAD[SK.ROAD.length-1][1]/3}%"><span data-spr="castle" data-sc="${opt.h&&opt.h<260?3:4}"></span><b>스터디아 성</b></div>
  ${run}</div>`};
SK.ROAD_CSS=`.road{position:relative;overflow:hidden;background:linear-gradient(#BDEBFF 0,#DDF4FF 16%,#8BD15A 17%,#7CC242 60%,#6CB43C 100%);box-shadow:0 0 0 3px #2B1D16;margin:3px}
.road .rsvg{position:absolute;inset:0;width:100%;height:100%}
.road .rdeco{position:absolute;transform:translate(-50%,-100%);pointer-events:none;z-index:1}
.road .rstart{position:absolute;transform:translate(-10%,-150%);font-size:11px;font-weight:700;background:#2B1D16;color:#FFF4D6;padding:1px 6px;z-index:5}
.road .rcastle{position:absolute;transform:translate(-50%,-90%);display:flex;flex-direction:column;align-items:center;z-index:4}
.road .rcastle b{font-size:11px;background:#FFF4D6;box-shadow:0 0 0 2px #2B1D16;padding:0 5px;margin-top:2px;white-space:nowrap}
.road .rr{position:absolute;transform:translate(-50%,-92%);display:flex;flex-direction:column;align-items:center;gap:1px}
.road .rr .rt{font-size:11px;line-height:1.3;background:#FFFBF2;box-shadow:0 0 0 2px #2B1D16;padding:0 4px;white-space:nowrap;max-width:96px;overflow:hidden;text-overflow:ellipsis}
.road .rr.me .rt{background:#F7C531;font-weight:700}`;

/* ---------- 날짜 (그날 0시~24시가 하루, 체크는 밤 12시 마감) ---------- */
SK.key=function(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
SK.dayKey=function(d){return SK.key(d||new Date())};
SK.parseDay=function(k){const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)};
SK.addDays=function(k,n){const d=SK.parseDay(k);d.setDate(d.getDate()+n);return SK.key(d)};
SK.weekKey=function(k){const d=SK.parseDay(k);return SK.addDays(k,-((d.getDay()+6)%7))};
SK.fmt=function(k){const d=SK.parseDay(k);return (d.getMonth()+1)+'/'+d.getDate()+'('+'일월화수목금토'[d.getDay()]+')'};
SK.closed=function(){return new Date().getHours()>=SK.DEADLINE_HOUR};

window.SK=SK;
})();

/* ---------- 반 협동 주간 레이드 ----------
 * 매주 월요일 새 보스. 반 친구들 데미지를 모두 더해 일요일까지 쓰러뜨려요.
 * 체력 = 캐릭터 있는 학생 수(최소 minKids) × perKid. 처치하면 그 주에 참여한 친구 알 부화 가속 +egg점.
 * 상: 최다 딜러(그 주 데미지 1등), 매일 출석상(그 주 지난 날 매일 체크), 결정적 막타(처치한 날 가장 많이 때린 친구) */
SK.COOP={start:'2026-12-01',perKid:800,minKids:3,egg:10,
  /* 깜짝 협동 이벤트: day 날 from시에 문이 열리고, since~day 반 전체 데미지(열리기 전에 한 체크 포함)로 to시(=마감)까지 처치 */
  /* lobby: from시 정각부터 lobby분 동안 대기실(들어온 친구가 보여요). 그 뒤 다 같이 입장해서 데미지가 한꺼번에 들어가요. 0이면 대기실 없음 */
  /* levels: 앞 단계를 쓰러뜨리면 다음 단계가 나와요. 넘친 데미지는 다음 단계로 이어져요. perKid = 학생 1명당 체력, egg = 그 단계 처치 보상(알 가속 점수) */
  events:[{day:'2026-11-28',since:'2026-11-26',from:22,lobby:5,to:24,showUntil:'2026-11-30',levels:[
    {n:'그림자 졸개 대장',spr:'autumn',perKid:150,egg:10},
    {n:'그림자 얼음 기사',spr:'icedragon',perKid:200,egg:15},
    {n:'개국 전야 그림자 대왕',spr:'hidden',perKid:260,egg:25}]}],
  bosses:[{n:'숙제 먹는 구름 거인',spr:'sleepy'},{n:'딴짓 유령 군단',spr:'autumn'},{n:'게으름 눈보라 골렘',spr:'winter'},{n:'핑계 대장 꽃마녀',spr:'spring'},{n:'스마트폰 블랙홀 드래곤',spr:'icedragon'},{n:'졸음 아이스크림 왕',spr:'summer'}]};
/* students: [{id, name, daily:{'YYYY-MM-DD':{dm,r}}}] */
SK.coop=function(students,today){const C=SK.COOP;if(!C||today<C.start)return null;const ws=SK.weekKey(today),from=ws<C.start?C.start:ws,to=SK.addDays(ws,6);
  const wi=Math.round((SK.parseDay(ws)-SK.parseDay(SK.weekKey(C.start)))/864e5/7),boss=C.bosses[((wi%C.bosses.length)+C.bosses.length)%C.bosses.length];
  const kids=students.filter(s=>s.daily);const hp=Math.max(C.minKids,kids.length)*C.perKid;
  const days=[];for(let k=from;k<=to&&k<=today;k=SK.addDays(k,1))days.push(k);
  const dmOf=(s,k)=>Math.max(0,(s.daily[k]&&s.daily[k].dm)||0);
  let cum=0,killDay=null;days.forEach(k=>{const t=kids.reduce((a,s)=>a+dmOf(s,k),0);if(!killDay&&cum+t>=hp)killDay=k;cum+=t});
  const per=kids.map(s=>({id:s.id,name:s.name,dm:days.reduce((a,k)=>a+dmOf(s,k),0),all:days.length>0&&days.filter(k=>k<today||dmOf(s,k)>0).every(k=>dmOf(s,k)>0)})).sort((a,b)=>b.dm-a.dm);
  const top=per[0]&&per[0].dm>0?per[0]:null;const lastHit=killDay?kids.map(s=>({id:s.id,name:s.name,dm:dmOf(s,killDay)})).sort((a,b)=>b.dm-a.dm)[0]:null;
  return {ws,from,to,boss,hp,dmg:cum,left:Math.max(0,hp-cum),dead:cum>=hp,killDay,per,top,lastHit,daily:per.filter(p=>p.all&&p.dm>0),kids:kids.length}};
/* 깜짝 협동 이벤트 상태. 열리기 전이면 {soon:true}, 대기실이면 {lobby:true, sec:입장까지 남은 초, inLobby:[들어온 친구]} */
/* min: 그 시각의 분(0~59). 대기실 판단에 써요 */
SK.coopEvent=function(students,today,hour,min){const C=SK.COOP;if(!C||!C.events)return null;const E=C.events.find(e=>today>=SK.addDays(e.day,-1)&&today<=(e.showUntil||e.day));if(!E)return null;
  if(today<E.day||(today===E.day&&hour<E.from))return {ev:E,soon:true};
  min=min||0;if(E.lobby&&today===E.day&&hour===E.from&&min<E.lobby){const kids=students.filter(s=>s.daily);
    return {ev:E,lobby:true,sec:(E.lobby-min)*60,inLobby:kids.filter(s=>s.lobby===E.day),kids:kids.length}}
  const kids=students.filter(s=>s.daily);const n=Math.max(C.minKids,kids.length);const dmOf=s=>Object.keys(s.daily).reduce((a,k)=>a+(k>=(E.since||E.day)&&k<=E.day?Math.max(0,s.daily[k].dm||0):0),0);
  const per=kids.map(s=>({id:s.id,name:s.name,dm:dmOf(s)})).sort((a,b)=>b.dm-a.dm);const dmg=per.reduce((a,p)=>a+p.dm,0);
  let cum=0,lv=0,base=0;const L=E.levels.map((l,i)=>{const hp=n*l.perKid;const r={...l,lv:i+1,hp,start:cum};cum+=hp;return r});
  const cleared=L.filter(l=>dmg>=l.start+l.hp).length;const cur=L[Math.min(cleared,L.length-1)];const all=cleared>=L.length;
  const left=all?0:Math.max(0,cur.start+cur.hp-dmg);
  return {ev:E,levels:L,cleared,cur,all,boss:{n:cur.n,spr:cur.spr},ws:E.day,from:E.day,to:E.day,hp:cur.hp,dmg,left,dead:all,per,top:per[0]&&per[0].dm>0?per[0]:null,lastHit:null,daily:[],kids:kids.length,over:today>E.day,live:today===E.day}};
