import { Button, Container, LanguageSwitcher } from "@/components";
import { Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: PageProps) {
  // 비동기 params 처리
  const { lang } = await params;
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <Container maxWidth="xl" className="text-center">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            href={`/${lang}/privacy-policy`} 
            variant="primary"
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
