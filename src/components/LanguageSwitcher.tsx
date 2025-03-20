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
    ? "px-3 py-1 rounded text-sm" 
    : "px-4 py-2 rounded-md transition-colors";

  const activeClasses = variant === "small"
    ? "bg-blue-600 text-white"
    : "bg-gray-200 font-semibold";
    
  const inactiveClasses = variant === "small"
    ? "bg-gray-200 hover:bg-gray-300"
    : "hover:bg-gray-100";

  return (
    <div className={`flex ${variant === "small" ? "justify-end" : "justify-center"} space-x-4`}>
      <Link
        href={enPath}
        className={`${buttonClasses} ${
          currentLang === "en" ? activeClasses : inactiveClasses
        }`}
      >
        English
      </Link>
      <Link
        href={koPath}
        className={`${buttonClasses} ${
          currentLang === "ko" ? activeClasses : inactiveClasses
        }`}
      >
        한국어
      </Link>
    </div>
  );
}
