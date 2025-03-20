import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";
}

/**
 * 반응형 컨테이너 컴포넌트
 */
export function Container({ 
  children, 
  className = "", 
  maxWidth = "xl" 
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl"
  };

  return (
    <div className={`container mx-auto ${maxWidthClasses[maxWidth]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
