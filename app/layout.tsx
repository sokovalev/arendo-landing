import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "ZenRent - Автоматизация управления арендой недвижимости | CRM для арендодателей",
  description:
    "ZenRent - умная система для частных арендодателей. Автоматизация платежей, SMS-напоминания арендаторам, учет коммунальных платежей и хранение документов. Экономьте до 10 часов в месяц на управлении арендой.",
  keywords:
    "управление арендой, автоматизация сдачи недвижимости, crm для арендодателей, напоминания арендаторам, учет платежей аренды",
  authors: [{ name: "ZenRent" }],
  openGraph: {
    type: "website",
    url: "https://zenrent.ru/",
    title:
      "ZenRent - Автоматизация управления арендой недвижимости | CRM для арендодателей",
    description:
      "Умная система для частных арендодателей. Автоматизация платежей, SMS-напоминания арендаторам, учет коммунальных платежей и хранение документов.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zenrent",
    title: "ZenRent - Автоматизация управления арендой недвижимости",
    description:
      "Умная система для частных арендодателей. Автоматизация платежей, SMS-напоминания арендаторам, учет коммунальных платежей и хранение документов.",
  },
  verification: {
    yandex: "2537e05d6ecca6ce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
