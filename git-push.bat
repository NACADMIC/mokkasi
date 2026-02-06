@echo off
chcp 65001 >nul
title 목까시한우 - GitHub 푸시

cd /d "c:\Users\j\목까시부쳐"

echo.
echo ========================================
echo   목까시한우 - GitHub 푸시
echo ========================================
echo.

echo [1/5] Git 초기화...
if not exist .git git init

echo.
echo [2/5] 파일 추가...
git add -A

echo.
echo [3/5] 커밋 생성...
git diff --cached --quiet 2>nul
if errorlevel 1 (
    git commit -m "feat: 목까시한우 MVP - 상세페이지, 장바구니, 모바일 최적화"
) else (
    echo   변경사항 없음 - 기존 커밋으로 푸시
)

echo.
echo [4/5] GitHub 저장소 URL 입력
echo.
echo   예: https://github.com/username/mokkasi-hanwoo.git
echo.
set /p REPO_URL="  URL: "

if "%REPO_URL%"=="" (
    echo.
    echo [오류] URL을 입력해주세요.
    pause
    exit /b 1
)

echo.
echo [5/5] 푸시 중...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
if errorlevel 1 (
    echo [오류] 푸시 실패. GitHub 저장소를 먼저 생성했는지 확인하세요.
) else (
    echo ========================================
    echo   푸시 완료!
    echo ========================================
)
echo.
pause
