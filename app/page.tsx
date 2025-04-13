"use client";

import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/sonner";

import {
  Building2,
  CalendarClock,
  BellRing,
  Wallet,
  FolderArchive,
  Clock,
  DollarSign,
  ShieldCheck,
  ChartColumn,
  CheckCircle2,
  MessageSquare,
  Smartphone,
} from "lucide-react";

// Dynamically import non-critical components
const HeroImage = dynamic(() => import("@/components/HeroImage"), {
  loading: () => (
    <div className="w-full h-[400px] bg-accent/20 animate-pulse rounded-lg" />
  ),
  ssr: false,
});
const FeatureCard = dynamic(() => import("@/components/FeatureCard"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const ProductDemo = dynamic(() => import("@/components/ProductDemo"));
const SeoContent = dynamic(() => import("@/components/SeoContent"));
const LeadForm = dynamic(() => import("@/components/LeadForm"));

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-8 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#hero-section" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ZenRent</span>
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
              Преимущества
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

      {/* Hero Section */}
      <section
        className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-accent/50 to-white"
        id="hero-section"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary animate-fade-in">
              Автоматизация{" "}
              <span className="text-primary">управления арендой</span> для
              частных владельцев
            </h1>
            <p className="text-lg text-muted-foregroun1-5d">
              Идеальное CRM-решение для частных владельцев объектов
              недвижимости. Автоматизируйте платежи, отправляйте напоминания и
              храните документы в одном месте, экономя до 10 часов в месяц.
            </p>

            <LeadForm />

            <p className="text-sm text-muted-foreground">
              Запуск в мае 2025 года. Присоединяйтесь к списку ожидания и
              получите эксклюзивные условия. Никакого спама.
            </p>
          </div>

          <div className="order-first md:order-last flex justify-center animate-float">
            <div className="w-full max-w-md hover-scale">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Умная CRM-система для арендодателей
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ZenRent упрощает управление недвижимостью для частных владельцев,
              экономя время и снижая риски.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CalendarClock className="h-10 w-10 text-primary" />}
              title="Календарь платежей"
              description="Отслеживайте все арендные платежи и коммунальные услуги в едином интерактивном календаре с уведомлениями."
              number="01"
            />

            <FeatureCard
              icon={<BellRing className="h-10 w-10 text-primary" />}
              title="Автоматические напоминания"
              description="Система отправляет напоминания жильцам о предстоящих платежах через SMS или Telegram без вашего участия."
              number="02"
            />

            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-primary" />}
              title="Учет расходов и доходов"
              description="Отслеживайте все платежи и расходы на обслуживание с наглядной аналитикой рентабельности."
              number="03"
            />

            <FeatureCard
              icon={<FolderArchive className="h-10 w-10 text-primary" />}
              title="Хранение документов"
              description="Безопасно храните договоры аренды, акты и другие документы с быстрым доступом в любой момент."
              number="04"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-24 px-6 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Как работает ZenRent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как ZenRent поможет вам автоматизировать рутинные
              задачи и улучшить взаимодействие с арендаторами
            </p>
          </div>

          <ProductDemo />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему ZenRent?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный инструмент для частных арендодателей: автоматизируйте
              аренду, управляйте доходами и не теряйте время на рутину.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Экономит до 10 часов в месяц
              </h3>
              <p className="text-muted-foreground">
                Автоматизация рутинных задач освобождает вас от постоянных
                напоминаний, проверок оплат и ведения бумажного учета.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Автоматический учет платежей</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Напоминания без вашего участия
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Снижает потери на 15-20%
              </h3>
              <p className="text-muted-foreground">
                Уменьшение риска просрочек платежей и более эффективное
                управление расходами повышают вашу прибыль.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Своевременное получение платежей
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Контроль коммунальных расходов
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Профессиональный подход
              </h3>
              <p className="text-muted-foreground">
                Создает имидж ответственного арендодателя и улучшает отношения с
                арендаторами, увеличивая срок аренды.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Прозрачная система учета</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Юридически грамотное оформление
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Удобные интеграции
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ZenRent легко интегрируется с популярными сервисами для более
              эффективного управления
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <p className="text-muted-foreground">
                Получайте уведомления и отправляйте напоминания арендаторам
                через популярный мессенджер
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">SMS-уведомления</h3>
              <p className="text-muted-foreground">
                Автоматическая отправка SMS напоминаний арендаторам о
                предстоящих платежах
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <ChartColumn className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Отчёты и аналитика</h3>
              <p className="text-muted-foreground">
                Получайте подробную аналитику по доходам, просрочкам и динамике
                оплаты в удобных графиках и отчётах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Получите ранний доступ к ZenRent с 50% скидкой
          </h2>
          <p className="text-xl mb-8">
            Оставьте свой email, и мы сообщим вам о запуске. Первые 100
            пользователей получат полгода использования сервиса со скидкой 50%.
          </p>

          <LeadForm variant="secondary" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FaqSection />
      </section>

      {/* SEO Content Section */}
      <SeoContent />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
