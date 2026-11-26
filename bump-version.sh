#!/bin/sh
# 화면을 바꾼 뒤 실행: ./bump-version.sh "바꾼 내용"
# version.json, 학생 앱 RR_VERSION, 모든 페이지의 css/js 주소 뒤 ?v= 값을 한 번에 새 버전으로 바꿔요.
# (?v= 값이 바뀌어야 브라우저가 옛 파일을 버리고 새 파일을 받아요.)
set -e
cd "$(dirname "$0")"
V="$(date +%Y.%m.%d-%H%M)"
NOTE="${1:-업데이트}"
printf '{"version":"%s","note":"%s"}\n' "$V" "$NOTE" > version.json
sed -i "s/RR_VERSION='[^']*'/RR_VERSION='$V'/" index.html
for f in *.html support/*.html; do
  sed -i -E "s#((src|href)=\"(\.\./)?[A-Za-z0-9_./-]+\.(js|css))(\?v=[^\"]*)?\"#\1?v=$V\"#g" "$f"
done
echo "새 버전: $V"
