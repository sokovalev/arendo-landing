import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq">
      <div className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Коротко и по делу - ответы на ключевые вопросы о работе Arendo
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Для кого подходит Arendo?</AccordionTrigger>
              <AccordionContent>
                Для частных арендодателей и небольших управляющих, которые хотят
                меньше тратить времени на рутину и держать аренду под контролем.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Сколько будет стоить?</AccordionTrigger>
              <AccordionContent>
                Точная стоимость появится ближе к запуску. Ранние пользователи
                получат скидку <strong>50% на первые 6 месяцев</strong>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Какие каналы напоминаний поддерживаются?
              </AccordionTrigger>
              <AccordionContent>
                Telegram, Email и SMS - на старте. Можно выбрать один или
                несколько каналов для каждого арендатора.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Как подключить жильца к напоминаниям?
              </AccordionTrigger>
              <AccordionContent>
                Достаточно указать контакт арендатора (телефон или Telegram) в
                профиле объекта - напоминания будут приходить автоматически.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Безопасно ли хранить данные в Arendo?
              </AccordionTrigger>
              <AccordionContent>
                Да. Данные передаются по защищённому соединению и хранятся в
                зашифрованном виде. Мы соблюдаем требования российского
                законодательства по защите персональных данных.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Нужно ли быть ИП?</AccordionTrigger>
              <AccordionContent>
                Нет. Arendo можно использовать и как физическое лицо, и как ИП
                или юрлицо.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
