import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CalendarClock, BellRing, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("step1");

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Как это будет работать
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Мы ещё в разработке: собираем ранний список и проводим короткие
          интервью. Ниже - прототип интерфейса, чтобы показать направление.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 relative">
        {/* Бейдж «Концепт» */}
        <span className="absolute top-3 right-3 bg-primary/10 text-primary px-2.5 py-0.5 rounded-md text-xs font-medium ring-1 ring-primary/20">
          Концепт
        </span>

        <Tabs
          defaultValue="step1"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="px-2 md:px-4 py-2 bg-muted border-b border-gray-200">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger
                value="step1"
                className="data-[state=active]:bg-white"
              >
                <div className="flex flex-col items-center space-y-1 py-1">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs font-medium max-[420px]:hidden">
                    1. Объекты и жильцы
                  </span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="step2"
                className="data-[state=active]:bg-white"
              >
                <div className="flex flex-col items-center space-y-1 py-1">
                  <CalendarClock className="h-5 w-5" />
                  <span className="text-xs font-medium max-[420px]:hidden">
                    2. Платежи и напоминания
                  </span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="step3"
                className="data-[state=active]:bg-white"
              >
                <div className="flex flex-col items-center space-y-1 py-1">
                  <Wallet className="h-5 w-5" />
                  <span className="text-xs font-medium max-[420px]:hidden">
                    3. Отчёты и контроль
                  </span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Шаг 1 */}
          <ProductDemoTabContent
            name="step1"
            title="Добавите объекты и арендаторов - база сразу готова"
            className="bg-gradient-to-br from-amber-50 to-white"
          >
            <DemoRow
              icon={<Building2 className="h-8 w-8 text-primary" />}
              title="Квартира - ул. Ленина, 42"
              subtitle="2 комнаты • 52 м² • пример"
              right="Сдана"
              rightClass="text-green-600"
            />
            <DemoRow
              icon={<Building2 className="h-8 w-8 text-primary" />}
              title="Кладовая - пр. Мира, 15"
              subtitle="3 м² • подвальное • пример"
              right="Сдана"
              rightClass="text-green-600"
            />
            <DemoRow
              icon={<Building2 className="h-8 w-8 text-primary" />}
              title="Машиноместо - ул. Гагарина, 8"
              subtitle="№ 27 • паркинг • пример"
              right="Свободно"
              rightClass="text-amber-600"
            />
          </ProductDemoTabContent>

          {/* Шаг 2 */}
          <ProductDemoTabContent
            name="step2"
            title="Настроите платежи и автонапоминания - просрочек станет меньше"
            className="bg-gradient-to-br from-blue-50 to-white"
          >
            <DemoRow
              icon={<CalendarClock className="h-8 w-8 text-primary" />}
              title="Аренда - ул. Ленина, 42"
              subtitle="Оплата до 5 числа • 52 000 ₽ • пример"
              right="Шаблон: за 3 дня"
              rightClass="text-gray-500"
            />
            <DemoRow
              icon={<BellRing className="h-8 w-8 text-primary" />}
              title="Telegram-напоминание будет отправлено"
              subtitle="Анна К. • Ленина, 42 • пример"
              right="автоматически"
              rightClass="text-gray-500"
            />
            <DemoRow
              icon={<BellRing className="h-8 w-8 text-primary" />}
              title="SMS-напоминание запланируете"
              subtitle="Игорь М. • Мира, 15 • пример"
              right="по расписанию"
              rightClass="text-gray-500"
            />
          </ProductDemoTabContent>

          {/* Шаг 3 */}
          <ProductDemoTabContent
            name="step3"
            title="Будете видеть доходы и расходы - отчёты под рукой"
            className="bg-gradient-to-br from-green-50 to-white"
          >
            <DemoRow
              icon={<Wallet className="h-8 w-8" />}
              title="Получена оплата - аренда"
              subtitle="Ленина, 42 • 01.04.2025 • пример"
              right="+52 000 ₽"
              rightClass="text-green-600"
            />
            <DemoRow
              icon={<Wallet className="h-8 w-8" />}
              title="Оплачен счёт - ЖКУ"
              subtitle="Ленина, 42 • 03.04.2025 • пример"
              right="-8 760 ₽"
              rightClass="text-red-600"
            />
            <DemoRow
              icon={<Wallet className="h-8 w-8" />}
              title="Расход - замена смесителя"
              subtitle="Мира, 15 • 05.04.2025 • пример"
              right="-4 500 ₽"
              rightClass="text-red-600"
            />
          </ProductDemoTabContent>
        </Tabs>
      </div>
    </>
  );
};

export default ProductDemo;

function ProductDemoTabContent({
  name,
  title,
  children,
  className,
}: {
  name: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsContent value={name} className="p-0 m-0">
      <div className={cn("inset-0 bg-gradient-to-br p-4 md:p-8", className)}>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid gap-3 max-w-xl">{children}</div>
        <p className="mt-3 text-xs text-muted-foreground">
          Пример интерфейса. Хотите повлиять на первую версию? Оставьте email -
          пригласим на 15-мин интервью.
        </p>
      </div>
    </TabsContent>
  );
}

function DemoRow({
  icon,
  title,
  subtitle,
  right,
  rightClass,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  right?: string;
  rightClass?: string;
}) {
  return (
    <div className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-medium">{title}</div>
          {subtitle && (
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          )}
        </div>
      </div>
      {right && (
        <div className={cn("text-sm text-right", rightClass)}>{right}</div>
      )}
    </div>
  );
}
