import { CheckCircle2 } from "lucide-react";

const SeoContent = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-secondary">
          Эффективное управление арендой недвижимости с Arendo
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Почему без автоматизации сложно?
            </h3>
            <p className="text-muted-foreground">
              Управление арендой может превратиться в головную боль: нужно
              следить за платежами, напоминать жильцам, контролировать
              коммуналку, копаться в бумагах...
            </p>
            <p className="text-muted-foreground">
              <strong>Arendo снимает эти задачи с ваших плеч.</strong>
            </p>
            <p className="text-muted-foreground">
              Сервис автоматизирует всё — от платежей до хранения документов — и
              даёт вам больше свободы.
            </p>
            <p className="text-muted-foreground">
              Arendo разработан специально для решения этих проблем. Наша
              автоматизированная CRM-система для арендодателей берет на себя все
              рутинные задачи, позволяя вам сосредоточиться на действительно
              важных вещах.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">
                Что даёт автоматизация с Arendo?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Экономия до 10 часов в месяц
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Меньше просрочек — благодаря напоминаниям
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Все документы — в одном месте, всегда под рукой
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Больше доверия и порядка в отношениях с жильцами
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Arendo — современный сервис для частных арендодателей
            </h3>
            <p className="text-muted-foreground">
              Arendo — сервис для частных владельцев, управляющих несколькими
              объектами недвижимости. Подходит для аренды жилья, коммерческих и
              нежилых помещений. Упростите рутину, контролируйте платежи,
              экономьте время.
            </p>
            <p className="text-muted-foreground">
              Автоматическая система напоминаний через SMS и Telegram
              обеспечивает своевременную оплату аренды, а встроенный календарь
              платежей помогает держать под контролем финансовые потоки. Система
              безопасного хранения документов избавляет от необходимости искать
              нужный договор или акт в бумажных архивах.
            </p>
            <p className="text-muted-foreground">
              В современных условиях автоматизация управления арендой – это не
              роскошь, а необходимость для тех, кто ценит свое время и стремится
              к максимальной эффективности своих инвестиций в недвижимость.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Кому подойдёт Arendo?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Владельцам объектов недвижимости, сдающих их в аренду
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Новичкам в аренде
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Тем, кто совмещает это с работой
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Тем, кто хочет управлять по-взрослому, а не “на коленке”
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
