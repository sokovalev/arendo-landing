/* eslint-disable @next/next/no-html-link-for-pages */
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Building2 } from "lucide-react";
import YM from "@/components/YM";
import "./globals.css";

const Footer = dynamic(() => import("@/components/Footer"));

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
        <div className="min-h-screen font-sans">
          {/* Header */}
          <header className="border-b border-gray-100 py-4 px-6 md:px-8 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <a href="/" className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Arendo</span>
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                <a
                  href="#features"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Возможности
                </a>
                <a
                  href="#benefits"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Почему Arendo?
                </a>
                <a
                  href="#demo"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Демо
                </a>
                <a
                  href="#faq"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>
          </header>

          {children}

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
