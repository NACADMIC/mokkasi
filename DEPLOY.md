# 목까시한우 - 서버 배포 가이드

## 방법 1: GitHub Pages (무료)

### 1단계: GitHub 저장소 생성
1. https://github.com/new 에서 새 저장소 생성
2. 저장소 이름: `mokkasi-hanwoo` (또는 원하는 이름)

### 2단계: 코드 푸시
```bash
cd "c:\Users\j\목까시부쳐"
git init
git add .
git commit -m "목까시한우 웹사이트"
git branch -M main
git remote add origin https://github.com/본인아이디/mokkasi-hanwoo.git
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. GitHub 저장소 → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)** 선택
4. Save → 몇 분 후 `https://본인아이디.github.io/mokkasi-hanwoo/` 에서 확인

---

## 방법 2: Netlify (무료, 추천)

### 드래그 앤 드롭
1. https://app.netlify.com 접속 (회원가입)
2. **Sites** → **Add new site** → **Deploy manually**
3. `목까시부쳐` 폴더 전체를 드래그해서 업로드
4. 자동으로 URL 생성 (예: random-name-123.netlify.app)

### 커스텀 도메인 (선택)
- Netlify 대시보드 → **Domain settings** → **Add custom domain**

---

## 방법 3: Vercel (무료)

1. https://vercel.com 접속 (회원가입)
2. **Add New** → **Project**
3. GitHub 연결 후 저장소 선택, 또는 **Import** → 폴더 업로드
4. Deploy 클릭

---

## 배포 후 확인사항
- [ ] index.html이 메인 페이지로 열리는지
- [ ] 상품/선물/매거진 상세페이지 링크 동작
- [ ] 장바구니 기능 (localStorage)
- [ ] 모바일 반응형
