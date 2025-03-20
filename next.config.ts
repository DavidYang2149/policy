/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export', // 정적 내보내기 활성화
  images: {
    unoptimized: true, // GitHub Pages에서 최적화된 이미지 처리가 어려울 수 있으므로
  },
  // GitHub Pages에서 저장소 이름으로 배포될 경우 설정
  basePath: '/policy',
  
  // 빌드 시 트레일링 슬래시 추가 (GitHub Pages에서 더 잘 작동할 수 있음)
  trailingSlash: true,
  
  // 정적 HTML 내보내기를 위한 설정
  // 이 설정은 i18n 리디렉션 문제를 해결하는 데 도움이 될 수 있습니다
  assetPrefix: '/policy',
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
