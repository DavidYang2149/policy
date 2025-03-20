# 개인정보 처리방침 웹페이지

이 프로젝트는 개인정보 처리방침을 한국어와 영어 두 언어로 제공하는 웹사이트입니다. Next.js 15를 기반으로 개발되었으며, 정적 웹사이트(Static Site Generation)로 배포됩니다.

## 기술 스택

- **프레임워크**: [Next.js 15](https://nextjs.org)
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **배포**: GitHub Pages
- **국제화(i18n)**: 자체 구현한 다국어 지원 시스템

## 프로젝트 구조

```bash
src/
├── app/                   # Next.js App Router
│   ├── [lang]/            # 언어별 라우팅을 위한 다이나믹 경로
│   │   ├── layout.tsx     # 언어별 레이아웃
│   │   ├── page.tsx       # 메인 페이지
│   │   └── privacy-policy/# 개인정보 처리방침 페이지
│   └── layout.tsx         # 전체 앱 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── Button.tsx         # 버튼 컴포넌트
│   ├── Container.tsx      # 컨테이너 컴포넌트
│   ├── LanguageSwitcher.tsx # 언어 전환 컴포넌트
│   ├── PolicySection.tsx  # 정책 섹션 컴포넌트
│   └── index.ts           # 컴포넌트 내보내기
├── dictionaries/          # 다국어 번역 파일
│   ├── en.json            # 영어 번역
│   ├── ko.json            # 한국어 번역
│   └── index.ts           # 번역 시스템 로직
├── i18n.ts                # 국제화 설정
└── types.ts               # 전역 타입 정의
```

## 주요 기능

1. **다국어 지원**: 한국어와 영어 전환 기능
2. **반응형 디자인**: 모바일과 데스크톱에 최적화된 UI
3. **정책 섹션 관리**: 구조화된 정책 내용 표시
4. **다크 모드 지원 준비**: 향후 다크 모드 지원 계획

## 시작하기

개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

`app/page.tsx` 파일을 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 새로운 폰트 패밀리인 [Geist](https://fonts.vercel.com/geist)를 자동으로 최적화하고 로드합니다.

## 배포 방법

### GitHub Pages 배포

이 프로젝트는 GitHub Actions를 사용하여 GitHub Pages에 자동으로 배포되도록 구성되어 있습니다:

1. 코드를 GitHub 저장소의 `main` 브랜치에 푸시
2. GitHub Actions가 자동으로 사이트를 빌드하고 GitHub Pages에 배포

### GitHub Pages 설정 방법

1. GitHub 저장소 설정의 Pages 섹션으로 이동
2. 소스를 "GitHub Actions"로 설정
3. 배포가 완료되면 `https://[username].github.io/[repository-name]/`에서 사이트 접근 가능

사용자 정의 도메인 사용 시:

1. `public` 폴더에 `CNAME` 파일 생성
2. GitHub Pages 설정에서 사용자 정의 도메인 추가

## 개발 가이드

### 새 언어 추가

1. `src/i18n.ts`에 새 언어 코드 추가
2. `src/dictionaries/` 폴더에 해당 언어 파일 생성
3. 필요한 번역 추가

### 개인정보 처리방침 내용 수정

개인정보 처리방침의 내용은 `src/dictionaries/` 폴더 내 각 언어 파일에서 관리됩니다.

## Vercel에 배포하기

Next.js 애플리케이션을 배포하는 가장 쉬운 방법은 Next.js의 개발자가 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
