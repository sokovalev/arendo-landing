export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl p-6 md:p-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>
        </header>

        <main className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Общие положения</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Настоящая Политика конфиденциальности определяет порядок
                обработки и защиты персональных данных пользователей сайта{" "}
                <a
                  href="https://arendo.pro"
                  className="text-primary hover:underline"
                >
                  https://arendo.pro
                </a>{" "}
                (далее - «Сайт»).
              </p>
              <p>Оператор персональных данных:</p>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>
                  Индивидуальный предприниматель <strong>[ФИО]</strong>
                </li>
                <li>
                  ИНН <strong>[ваш ИНН]</strong>, ОГРНИП{" "}
                  <strong>[номер]</strong>
                </li>
                <li>
                  Адрес регистрации: <strong>[город, адрес]</strong>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Собираемые данные
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Мы собираем только адреса электронной почты, которые вы
                добровольно указываете при заполнении формы на Сайте.
              </p>
              <p>Отправляя email, вы:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>
                  соглашаетесь на обработку персональных данных в соответствии с
                  настоящей Политикой;
                </li>
                <li>
                  даёте согласие на получение сообщений о запуске и развитии
                  сервиса Arendo (включая новости и предложения).
                </li>
              </ul>
              <p>
                Вы можете отказаться от рассылки в любой момент - перейдя по
                ссылке в письме или написав нам на{" "}
                <a
                  href="mailto:privacy@arendo.pro"
                  className="text-primary hover:underline"
                >
                  privacy@arendo.pro
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">3. Цели обработки</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Собранные данные используются исключительно для:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>связи по вопросам раннего доступа к Arendo;</li>
                <li>
                  отправки сообщений о запуске и развитии сервиса, включая
                  новости и предложения.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Правовые основания
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Обработка данных осуществляется на основании статьи 6
                Федерального закона №152-ФЗ «О персональных данных» - с согласия
                субъекта персональных данных.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">5. Сроки хранения</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Персональные данные хранятся до момента отзыва согласия
                пользователем либо до достижения целей обработки.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Обработка и защита данных
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Данные хранятся в защищённой базе. Мы используем технические и
                организационные меры защиты, включая:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>передачу данных по защищённому протоколу HTTPS;</li>
                <li>ограниченный доступ;</li>
                <li>регулярные обновления и резервное копирование.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Права пользователя
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Пользователь имеет право:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>запросить информацию о своих персональных данных;</li>
                <li>потребовать их изменение или удаление;</li>
                <li>
                  отозвать согласие на обработку, направив запрос на{" "}
                  <a
                    href="mailto:privacy@arendo.pro"
                    className="text-primary hover:underline"
                  >
                    privacy@arendo.pro
                  </a>
                  .
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Передача третьим лицам
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Мы не передаём персональные данные третьим лицам, за исключением
                случаев, предусмотренных законодательством РФ.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Изменения в политике
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Мы можем вносить изменения в настоящую Политику. Новая редакция
                вступает в силу с момента её публикации на Сайте.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">10. Контакты</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>По вопросам, связанным с обработкой персональных данных:</p>
              <ul className="space-y-2">
                <li>
                  📧{" "}
                  <a
                    href="mailto:privacy@arendo.pro"
                    className="text-primary hover:underline"
                  >
                    privacy@arendo.pro
                  </a>
                </li>
              </ul>
              <p className="pt-4 text-sm">
                Дата последнего обновления: 14 июля 2025 года
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
