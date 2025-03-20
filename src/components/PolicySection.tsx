interface SectionContentProps {
  title: string;
  contents: string | string[];
}

/**
 * 개인정보 처리방침의 각 섹션을 표시하는 컴포넌트
 */
export function PolicySection({ title, contents }: SectionContentProps) {
  // 컨텐츠가 문자열 배열인 경우 각 항목을 단락으로 처리
  const contentItems = Array.isArray(contents) ? contents : [contents];

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      {contentItems.map((content, index) => (
        <p 
          key={index} 
          className={`text-gray-700 whitespace-pre-line ${
            index < contentItems.length - 1 ? "mb-4" : ""
          }`}
        >
          {content}
        </p>
      ))}
    </section>
  );
}
