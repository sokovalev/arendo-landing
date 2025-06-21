import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import YM from "@/components/YM";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Arendo - Автоматизация управления арендой недвижимости | CRM для арендодателей",
  description:
    "Arendo - умная система для частных арендодателей. Автоматизация платежей, SMS-напоминания арендаторам, учет коммунальных платежей и хранение документов. Экономьте до 10 часов в месяц на управлении арендой.",
  keywords:
    "управление арендой, автоматизация сдачи недвижимости, crm для арендодателей, напоминания арендаторам, учет платежей аренды",
  authors: [{ name: "Arendo" }],
  openGraph: {
    type: "website",
    url: "https://arendo.pro/",
    title:
      "Arendo - Автоматизация управления арендой недвижимости | CRM для арендодателей",
    description:
      "Умная система для частных арендодателей. Автоматизация платежей, SMS-напоминания арендаторам, учет коммунальных платежей и хранение документов.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <YM />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
