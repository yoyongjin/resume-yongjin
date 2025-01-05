import { pretendard } from "@/assets/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 김용진",
  description: "프론트엔드 개발자 김용진 이력서입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} font-pretendard`}>
      <body>{children}</body>
    </html>
  );
}
