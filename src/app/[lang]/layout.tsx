import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { i18n, Locale } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
  // params를 비동기적으로 처리
  const { lang } = await params;
  
  return {
    title: "Privacy Policy",
    description: "Privacy Policy for our application",
    htmlAttributes: {
      lang,
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  await params; // 비동기 처리
  
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
    >
      {children}
    </body>
  );
}
