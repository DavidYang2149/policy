import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

/**
 * 재사용 가능한 버튼 컴포넌트
 */
export function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  // 버튼 스타일 변형에 따른 클래스 설정
  const baseClasses = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-500",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // 링크인 경우 Link 컴포넌트 사용
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // 버튼인 경우 button 요소 사용
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
