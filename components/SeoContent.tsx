import { CheckCircle2 } from "lucide-react";
import LeadForm from "./LeadForm";

const SeoContent = () => {
  return (
    <section className="py-14 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Кому это подойдёт
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.2 1.2 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1v7Z" />
              </svg>
              Частным арендодателям с 1–10 объектами
            </li>
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Тем, кто устал от таблиц и переписок
            </li>
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Кому важны сроки оплат и порядок в документах
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Что получите</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Календарь платежей и статусы по каждому объекту
            </li>
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Автонапоминания в Telegram/SMS без вашего участия
            </li>
            <li className="flex gap-2">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Документы и коммуналка - в одном месте
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="max-w-2xl w-full bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-primary/10">
          <LeadForm variant="primary" buttonText="Присоединиться" />
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
