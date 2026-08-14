import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "株式会社日本エコシティ | 廃タイヤ回収・TDF燃料供給",
  description:
    "廃タイヤの回収・中間処理、ゴム粉・チップ加工、ボイラー代替燃料（TDF）供給、リユースタイヤ貿易を行う株式会社日本エコシティの公式サイトです。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} antialiased`}>{children}</body>
    </html>
  );
}
