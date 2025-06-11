import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о сервисе Arendo для управления арендой
            недвижимости
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Для кого предназначен Arendo?</AccordionTrigger>
            <AccordionContent>
              Arendo создан специально для частных арендодателей, которые сдают
              от одного до нескольких объектов — жилых, коммерческих или
              нежилых. Если вы хотите автоматизировать рутину, контролировать
              платежи и экономить время на управлении арендой — этот сервис для
              вас.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Как работают автоматические напоминания?
            </AccordionTrigger>
            <AccordionContent>
              Система автоматически отправляет напоминания вашим арендаторам о
              предстоящих платежах через SMS или Telegram. Вы сами настраиваете
              сроки и формат напоминаний, чтобы они соответствовали вашим
              договоренностям с жильцами.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Насколько безопасно хранение документов?
            </AccordionTrigger>
            <AccordionContent>
              Мы используем современные методы шифрования для защиты всех
              загруженных документов. Доступ к ним имеете только вы через свою
              учетную запись. Мы не передаем данные третьим лицам и соблюдаем
              требования законодательства о персональных данных.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Сколько будет стоить пользование сервисом?
            </AccordionTrigger>
            <AccordionContent>
              Мы планируем предложить несколько тарифных планов в зависимости от
              количества объектов недвижимости, начиная от 590 рублей в месяц за
              базовый план. Первые пользователи, оставившие email, получат
              специальные условия и скидки 50% на полгода использования при
              запуске.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Когда планируется запуск сервиса?
            </AccordionTrigger>
            <AccordionContent>
              Мы активно работаем над разработкой и планируем запустить
              бета-версию в ближайшие месяцы. Если вы оставите свой email, мы
              сообщим вам о запуске одними из первых.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Можно ли автоматически формировать договор аренды?
            </AccordionTrigger>
            <AccordionContent>
              Да, в Arendo есть возможность создавать договоры аренды по заранее
              настроенным шаблонам. Система автоматически подставит данные
              арендаторов, сроки и суммы платежей. Все шаблоны соответствуют
              актуальному законодательству и регулярно обновляются.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Возможно ли подключить эквайринг для приема оплат?
            </AccordionTrigger>
            <AccordionContent>
              В ближайших обновлениях мы планируем добавить интеграцию с
              эквайрингом для приема платежей от арендаторов напрямую через
              систему. Это позволит арендаторам оплачивать аренду и коммунальные
              услуги картой, а вам - отслеживать поступления в режиме реального
              времени.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Как добавить новый объект недвижимости в систему?
            </AccordionTrigger>
            <AccordionContent>
              Добавление нового объекта происходит очень просто: вы заполняете
              основную информацию об объекте недвижимости (адрес, количество
              комнат, площадь), загружаете фотографии и документы. После этого
              можно добавить данные об арендаторе, условиях аренды и настроить
              автоматические напоминания.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              Есть ли мобильное приложение Arendo?
            </AccordionTrigger>
            <AccordionContent>
              На первом этапе Arendo будет доступен как веб-приложение, которое
              адаптировано для использования на мобильных устройствах.
              Разработка полноценных приложений для iOS и Android запланирована
              на следующий этап развития сервиса.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
