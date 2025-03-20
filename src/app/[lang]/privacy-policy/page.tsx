import { getDictionary } from "@/dictionaries";
import { Button, Container, LanguageSwitcher, PolicySection } from "@/components";
import { Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function PrivacyPolicy({ params }: PageProps) {
  // 비동기 params 처리
  const { lang } = await params;
  const dict = getDictionary(lang);

  // 폴리시 각 섹션의 데이터를 배열로 정리
  const policySections = [
    {
      title: dict.privacyPolicy.section1.title,
      contents: [dict.privacyPolicy.section1.content1, dict.privacyPolicy.section1.content2]
    },
    {
      title: dict.privacyPolicy.section2.title,
      contents: [dict.privacyPolicy.section2.content1, dict.privacyPolicy.section2.content2]
    },
    {
      title: dict.privacyPolicy.section3.title,
      contents: [dict.privacyPolicy.section3.content]
    },
    {
      title: dict.privacyPolicy.section4.title,
      contents: [dict.privacyPolicy.section4.content1, dict.privacyPolicy.section4.content2]
    },
    {
      title: dict.privacyPolicy.section5.title,
      contents: [dict.privacyPolicy.section5.content1, dict.privacyPolicy.section5.content2]
    },
    {
      title: dict.privacyPolicy.section6.title,
      contents: [dict.privacyPolicy.section6.content]
    },
    {
      title: dict.privacyPolicy.section7.title,
      contents: [dict.privacyPolicy.section7.content1, dict.privacyPolicy.section7.content2]
    },
    {
      title: dict.privacyPolicy.section8.title,
      contents: [dict.privacyPolicy.section8.content]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-8">
      <Container maxWidth="4xl">
        {/* 언어 선택 */}
        <LanguageSwitcher 
          currentLang={lang} 
          path="privacy-policy" 
          variant="small" 
        />

        {/* 제목 */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          {dict.privacyPolicy.title}
        </h1>

        {/* 본문 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-10 space-y-8">
            {/* 모든 섹션 렌더링 */}
            {policySections.map((section, index) => (
              <PolicySection 
                key={index}
                title={section.title}
                contents={section.contents}
              />
            ))}
          </div>

          {/* 마지막 업데이트 날짜 */}
          <div className="bg-gray-50 px-6 py-4 text-right text-sm text-gray-500">
            {dict.privacyPolicy.updateDate}
          </div>
        </div>

        {/* 뒤로 가기 버튼 */}
        <div className="mt-8 text-center">
          <Button 
            href={`/${lang}`}
            variant="secondary"
          >
            {dict.common.back}
          </Button>
        </div>
      </Container>
    </div>
  );
}
