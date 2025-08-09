import {
  CalendarClock,
  BellRing,
  Wallet,
  FolderArchive,
  ArrowRight,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 md:pb-24 md:pt-24 px-6 md:px-8 bg-muted"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Все заботы об аренде - в одном месте
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arendo напомнит, соберёт платеж, сохранит договор и покажет всё в
            календаре.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<CalendarClock className="h-10 w-10 text-primary" />}
            title="Календарь платежей"
            description={
              <>
                Наглядно видите, кто, сколько и когда платит.
                <span className="block mt-1 text-sm text-green-600">
                  Меньше просрочек на 30–40%
                </span>
              </>
            }
            number="01"
          />

          <FeatureCard
            icon={<BellRing className="h-10 w-10 text-primary" />}
            title="Автонапоминания"
            description={
              <>
                Telegram и SMS напомнят жильцам вовремя.
                <span className="block mt-1 text-sm text-green-600">
                  Минус 10–15 ручных сообщений в месяц
                </span>
              </>
            }
            number="02"
          />

          <FeatureCard
            icon={<Wallet className="h-10 w-10 text-primary" />}
            title="Учёт арендаторов"
            description={
              <>
                История оплат и коммуналки без таблиц и хаоса.
                <span className="block mt-1 text-sm text-green-600">
                  Быстрый доступ к данным за секунды
                </span>
              </>
            }
            number="03"
          />

          <FeatureCard
            icon={<FolderArchive className="h-10 w-10 text-primary" />}
            title="Документы под рукой"
            description={
              <>
                Договоры всегда в порядке и доступны в пару кликов.
                <span className="block mt-1 text-sm text-green-600">
                  Нет потерь и путаницы в бумагах
                </span>
              </>
            }
            number="04"
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => {
              document
                .getElementById("hero-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-white rounded-lg px-6 py-3 shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            aria-label="Попробовать бесплатно"
          >
            Попробовать бесплатно
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
