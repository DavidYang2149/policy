import { Button, Container, LanguageSwitcher } from "@/components";
import { Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: PageProps) {
  // 비동기 params 처리
  const { lang } = await params;
  
  // 문서 아이콘 SVG
  const DocumentIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" 
        clipRule="evenodd" 
      />
    </svg>
  );
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <Container maxWidth="xl" className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        <div className="flex justify-center mb-10">
          <Button 
            href={`/${lang}/privacy-policy`} 
            variant="primary"
            icon={<DocumentIcon />}
            className="text-base px-5 py-2.5"
          >
            {lang === 'en' ? 'View Privacy Policy' : '개인정보 처리방침 보기'}
          </Button>
        </div>
        <div className="mt-8">
          <LanguageSwitcher currentLang={lang} />
        </div>
      </Container>
    </div>
  );
}
