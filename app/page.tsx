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

      {/* Hero Section */}
      <section
        className="py-16 md:pt-24 md:pb-12 px-6 md:px-8 bg-white"
        id="hero-section"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary animate-fade-in">
              Сдаёте квартиру?
              <span className="text-primary">
                Современное управление арендой без стресса
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Сервис сам напомнит жильцам о платеже, упростит учет арендных
              платежей, поможет с коммуналкой и хранением документов. Экономьте
              время, не теряйте деньги и будьте уверены, что всё под контролем.
            </p>

            <LeadForm />

            <p className="text-sm text-muted-foreground">
              Запускаемся осенью 2025. Первые пользователи получат эксклюзивные
              условия при запуске. Никакого спама, обещаем.
            </p>
          </div>

          <div className="flex justify-center animate-float">
            <div className="w-full max-w-md hover-scale">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 md:pb-24 md:pt-12 px-6 md:px-8 bg-muted"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Автоматизация аренды без стресса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arendo — это простой инструмент для автоматизации аренды: платежи,
              коммуналка и документы — всё под контролем, без нервов и таблиц.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CalendarClock className="h-10 w-10 text-primary" />}
              title="Календарь платежей"
              description="Все платежи в одном понятном календаре. Точно знаете, кто, сколько и когда платит."
              number="01"
            />

            <FeatureCard
              icon={<BellRing className="h-10 w-10 text-primary" />}
              title="Напоминания жильцам"
              description="Автоматически напоминаем жильцам о платеже через Telegram или SMS. Меньше стресса — больше порядка."
              number="02"
            />

            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-primary" />}
              title="Учёт арендаторов и платежей"
              description="Вся информация о жильцах, сроках аренды, истории оплат и учёте коммунальных услуг — в одном месте. Никаких таблиц и путаницы."
              number="03"
            />

            <FeatureCard
              icon={<FolderArchive className="h-10 w-10 text-primary" />}
              title="Хранение документов по аренде"
              description="Документы всегда в порядке и под рукой. Больше не надо искать договоры в WhatsApp или на антресолях."
              number="04"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Посмотрите, как просто управлять арендой
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избавьтесь от рутины и сделайте отношения с арендаторами
              комфортнее
            </p>
          </div>

          <ProductDemo />
        </div>
      </section>

      {/* Mid-page CTA Section */}
      <section className="py-16 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto rounded-xl bg-muted p-8 md:p-12 shadow-lg text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Станьте одним из первых - начните с выгодой
            </h2>
            <p className="text-lg mb-0 text-muted-foreground">
              Оставьте почту и получите 50% скидку на 6 месяцев после запуска
            </p>
          </div>

          <LeadForm variant="primary" buttonText="Получить скидку" />

          <p className="text-xs text-center mt-4 text-white/70">
            Без спама — только важные новости и бонусы для первых.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Зачем вам Arendo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный сервис для тех, кто сам сдаёт жильё. Arendo
              автоматизирует учёт арендаторов, платежей и документов — без
              таблиц, переписок и беготни.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                До 10 часов свободного времени в месяц
              </h3>
              <p className="text-muted-foreground">
                Автоматизация избавляет от переписок, контроля платежей и
                бумажек.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Автоматический учет арендных платежей
                  </span>
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
                Больше дохода, меньше потерь
              </h3>
              <p className="text-muted-foreground">
                Меньше просрочек, точный учёт расходов — снижает потери до 20%
                каждый месяц.
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
                Жильцы видят: вы серьёзный и надёжный. Это укрепляет отношения и
                снижает текучку.
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
      <section className="py-16 md:py-20 px-6 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Работает с тем, что вы уже используете
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arendo легко интегрируется с популярными сервисами для более
              эффективного управления
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <p className="text-muted-foreground">
                Напоминания жильцам прямо в Telegram — быстро, привычно,
                автоматически.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">SMS-уведомления</h3>
              <p className="text-muted-foreground">
                Не все в Telegram? Напоминания приходят и по SMS — ничего не
                забудется.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <ChartColumn className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Отчёты и аналитика</h3>
              <p className="text-muted-foreground">
                Графики и цифры покажут, что идёт по плану, а где нужно
                вмешаться.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Присоединяйтесь раньше - и платите в 2 раза меньше
          </h2>
          <p className="text-xl mb-8">
            Оставьте email — мы первыми пригласим вас в Arendo. А заодно дадим
            скидку 50% на полгода.
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
