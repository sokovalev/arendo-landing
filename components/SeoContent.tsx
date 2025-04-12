import { CheckCircle2 } from "lucide-react";

const SeoContent = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-secondary">
          Эффективное управление арендой недвижимости с ZenRent
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Почему управление арендой недвижимости требует автоматизации?
            </h3>
            <p className="text-muted-foreground">
              Управление арендной недвижимостью для частных владельцев часто
              становится настоящим испытанием. Необходимость отслеживать
              платежи, напоминать арендаторам о сроках оплаты, контролировать
              коммунальные платежи и хранить множество документов отнимает
              значительное количество времени и энергии, создавая дополнительный
              стресс.
            </p>
            <p className="text-muted-foreground">
              ZenRent разработан специально для решения этих проблем. Наша
              автоматизированная CRM-система для арендодателей берет на себя все
              рутинные задачи, позволяя вам сосредоточиться на действительно
              важных вещах.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">
                Преимущества автоматизации процессов аренды:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Существенная экономия времени на административных задачах
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Снижение риска просрочек платежей благодаря автоматическим
                    напоминаниям
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Централизованное хранение всех документов с удобным доступом
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Улучшение взаимоотношений с арендаторами благодаря
                    профессиональному подходу
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              ZenRent – инновационная CRM для частных арендодателей
            </h3>
            <p className="text-muted-foreground">
              ZenRent предлагает комплексное решение для управления арендой
              недвижимости, адаптированное специально для российского рынка. В
              отличие от сложных корпоративных систем, наш сервис интуитивно
              понятен и ориентирован на потребности частных владельцев, сдающих
              небольшое количество объектов недвижимости.
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
              <h4 className="font-semibold mb-2">
                ZenRent идеально подходит для:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Частных собственников недвижимости, сдающих объекты в аренду
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Начинающих инвесторов в недвижимость
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Людей, которые совмещают основную работу с управлением
                    арендной собственностью
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Владельцев небольшого количества объектов, стремящихся к
                    профессиональному управлению
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
