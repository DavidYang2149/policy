import Link from "next/link";

interface LanguageSwitcherProps {
  currentLang: string; // 현재 선택된 언어
  path?: string; // 현재 페이지 경로 (선택 사항)
  variant?: "default" | "small"; // 스타일 변형
}

export function LanguageSwitcher({ 
  currentLang, 
  path = "", 
  variant = "default" 
}: LanguageSwitcherProps) {
  // 각 언어에 대한 경로 생성 (현재 경로 유지)
  const enPath = path ? `/en/${path}` : "/en";
  const koPath = path ? `/ko/${path}` : "/ko";

  // 스타일 변형에 따른 클래스 설정
  const buttonClasses = variant === "small" 
    ? "px-3 py-1 rounded text-sm flex items-center" 
    : "px-4 py-2 rounded-md transition-colors flex items-center";

  const activeClasses = variant === "small"
    ? "bg-blue-600 text-white font-medium"
    : "bg-blue-100 text-blue-800 font-bold border border-blue-300 shadow-sm";
    
  const inactiveClasses = variant === "small"
    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200";

  // 체크 아이콘 SVG (현재 선택된 언어에만 표시)
  const CheckIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-3.5 w-3.5 ml-1" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  return (
    <div className={`flex ${variant === "small" ? "justify-end" : "justify-center"} space-x-4`}>
      <Link
        href={enPath}
        className={`${buttonClasses} ${
          currentLang === "en" ? activeClasses : inactiveClasses
        }`}
      >
        <span>English</span>
        {currentLang === "en" && <CheckIcon />}
      </Link>
      <Link
        href={koPath}
        className={`${buttonClasses} ${
          currentLang === "ko" ? activeClasses : inactiveClasses
        }`}
      >
        <span>한국어</span>
        {currentLang === "ko" && <CheckIcon />}
      </Link>
    </div>
  );
}
