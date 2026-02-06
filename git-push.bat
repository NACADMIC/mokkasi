@echo off
chcp 65001 > nul
echo ========================================
echo   목까시한우 - GitHub 푸시 스크립트
echo ========================================
echo.

cd /d "c:\Users\j\목까시부쳐"

echo [1/4] Git 초기화 중...
git init

echo.
echo [2/4] 파일 추가 중...
git add .

echo.
echo [3/4] 커밋 생성 중...
git commit -m "feat: 목까시한우 정육점 웹사이트 초기 구축"

echo.
echo [4/4] GitHub 저장소 생성 및 푸시...
echo.
echo ----------------------------------------
echo GitHub 저장소 URL을 입력하세요
echo 예: https://github.com/username/mokkasi-hanwoo.git
echo ----------------------------------------
set /p REPO_URL="GitHub URL: "

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   완료! GitHub에 푸시되었습니다.
echo ========================================
pause
