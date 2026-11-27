# 스터디아 왕국 키즈 · 작업 규칙

운영 중인 중고등판·루틴런 초등은 건드리지 않아요. 이 저장소(키즈판)만 바꿔요.

## 업데이트 루틴 (매번 필수)

앱(`index.html`, `game-data.js`)이나 서버(`apps-script/Code.gs`)를 바꿀 때마다, 같은 커밋 안에서 아래를 모두 확인하고 바뀐 내용을 반영해요.

1. `support/student.html`: 학생 가이드 (해당 섹션 + 표)
2. `support/rules.html`: 규칙 도감 (숫자·확률·체력·날짜)
3. `support/parent.html`: 보호자 안내 (보호자에게 보이는 변화가 있으면)
4. `support/admin.html`: 선생님 가이드 (운영·이벤트·계정 흐름)
5. `support/faq.html`: 헷갈릴 만한 변화면 Q&A 추가
6. `support/news.html`: `NEWS` 배열에 공지(type:'notice') 또는 이벤트(type:'event', start/end) 한 줄 추가
7. `admin.html`: 선생님 화면 카드·안내 문구(규칙 한눈에, 이벤트 카드)
8. `rank.html`: 랭킹 화면에 보이는 숫자·이벤트가 바뀌면 반영
9. `Code.gs`를 바꿨으면 붙여 넣을 사본을 프로젝트 파일 `studia-elementary/Code.gs`에도 올리고, 재배포가 필요하다고 알려요.

그다음:

```
./bump-version.sh "바꾼 내용"
git add -A && git commit && git push origin main
```

`bump-version.sh`가 모든 페이지의 `?v=`와 `PAGE_VERSION`을 올려서 캐시된 옛 화면이 남지 않아요. 답장은 한국어로, 어느 사이트에 무엇을 반영했는지 한 줄씩 알려요.
