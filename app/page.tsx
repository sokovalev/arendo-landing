"use client";

import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight } from "lucide-react";
import FeaturesSection from "@/components/FeaturesSection";

// Dynamically import non-critical components
const HeroImage = dynamic(() => import("@/components/HeroImage"), {
  loading: () => (
    <div className="w-full h-[400px] bg-accent/20 animate-pulse rounded-lg" />
  ),
  ssr: false,
});
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const ProductDemo = dynamic(() => import("@/components/ProductDemo"));
const SeoContent = dynamic(() => import("@/components/SeoContent"));
const LeadForm = dynamic(() => import("@/components/LeadForm"));

const Index = () => {
  return (
    <>
      <Toaster position="top-center" />

      {/* Hero Section */}
      <section
        className="py-16 md:pt-24 md:pb-12 px-6 md:px-8 bg-white"
        id="hero-section"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary animate-fade-in">
              <span className="text-primary">Аренда на автопилоте:</span>
              <br />
              напоминания, платежи, коммуналка
            </h1>
            <p className="text-lg text-muted-foreground">
              Arendo сам напомнит жильцам о платеже, проконтролирует
              поступления, рассчитает коммуналку и сохранит все документы.
              <br />
              Экономьте <b>до 5 часов в неделю</b> и избавьтесь от стресса.
            </p>

            <LeadForm />

            <p className="text-sm text-muted-foreground">
              134 арендодателя в списке ожидания.
              <br />
              Запуск - осень 2025.
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
      <FeaturesSection />

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ProductDemo />
        </div>
      </section>

      {/* Mid-page CTA Section */}
      <section className="py-16 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto rounded-xl bg-muted p-8 md:p-12 shadow-lg text-white">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              50% скидка на 6&nbsp;месяцев — только для первых&nbsp;200
            </h2>
            <p className="text-lg mb-2 text-muted-foreground">
              Успейте оставить email до <strong>30&nbsp;сентября</strong> и
              получите доступ к&nbsp;Arendo с половинной ценой.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-primary text-white rounded-lg px-6 py-3 shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Оставить email <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* SEO Content Section */}
      <SeoContent />
    </>
  );
};

export default Index;
