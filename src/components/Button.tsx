import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode; // 아이콘 추가 가능
  iconPosition?: "left" | "right"; // 아이콘 위치 설정
}

/**
 * 재사용 가능한 버튼 컴포넌트
 */
export function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  onClick,
  icon,
  iconPosition = "left"
}: ButtonProps) {
  // 버튼 스타일 변형에 따른 클래스 설정
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all shadow-sm";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-blue-600",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 border-gray-200",
    outline: "border-gray-300 text-gray-800 bg-white hover:bg-gray-50 focus:ring-gray-400"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // 아이콘과 텍스트 컨텐츠 렌더링
  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  // 링크인 경우 Link 컴포넌트 사용
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {renderContent()}
      </Link>
    );
  }

  // 버튼인 경우 button 요소 사용
  return (
    <button className={buttonClasses} onClick={onClick}>
      {renderContent()}
    </button>
  );
}
