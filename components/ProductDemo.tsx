import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CalendarClock, BellRing, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <Tabs
        defaultValue="calendar"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="px-2 md:px-4 py-2 bg-muted border-b border-gray-200">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <CalendarClock className="h-5 w-5" />
                <span className="text-xs font-medium max-[420px]:hidden">
                  Календарь
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <BellRing className="h-5 w-5" />
                <span className="text-xs font-medium   max-[420px]:hidden">
                  Напоминания
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <Wallet className="h-5 w-5" />
                <span className="text-xs font-medium  max-[420px]:hidden">
                  Платежи
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="properties"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <Building2 className="h-5 w-5" />
                <span className="text-xs font-medium  max-[420px]:hidden">
                  Объекты
                </span>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        <ProductDemoTabContent
          name="calendar"
          title="Платежи и сроки - всегда перед глазами"
          className="bg-gradient-to-br from-blue-50 to-white"
        >
          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3">
              <CalendarClock className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Аренда: ул. Ленина, 42</div>
                <div className="text-sm text-muted-foreground">
                  Оплата до 5 числа
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">52 000 ₽</div>
              <div className="text-sm text-green-600">Оплачено</div>
            </div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <CalendarClock className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Аренда: пр. Мира, 15</div>
                <div className="text-sm text-muted-foreground">
                  Оплата до 10 числа
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">45 000 ₽</div>
              <div className="text-sm text-amber-600">Ожидается</div>
            </div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">ЖКУ: ул. Ленина, 42</div>
                <div className="text-sm text-muted-foreground">
                  За февраль 2025
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">8 760 ₽</div>
              <div className="text-sm text-green-600">Оплачено</div>
            </div>
          </div>
        </ProductDemoTabContent>

        <ProductDemoTabContent
          name="notifications"
          title="Напоминания отправляются сами - больше не нужно звонить и писать"
          className="bg-gradient-to-br from-purple-50 to-white"
        >
          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3">
              <BellRing className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Напоминание отправлено</div>
                <div className="text-sm text-muted-foreground">
                  Анна К. - ул. Ленина, 42
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">2 дня назад</div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <BellRing className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Напоминание запланировано</div>
                <div className="text-sm text-muted-foreground">
                  Игорь М. - пр. Мира, 15
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">через 2 дня</div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3">
              <BellRing className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Шаблон настроен</div>
                <div className="text-sm text-muted-foreground">
                  Напоминание за 3 дня до оплаты
                </div>
              </div>
            </div>
            <div className="text-sm text-green-600">Активно</div>
          </div>
        </ProductDemoTabContent>

        <ProductDemoTabContent
          name="payments"
          title="Видно, сколько вы заработали — и на что потратились"
          className="bg-gradient-to-br from-green-50 to-white"
        >
          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-green-500" />
              <div>
                <div className="font-medium">Получена оплата</div>
                <div className="text-sm text-muted-foreground">
                  ул. Ленина, 42 - аренда
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-600">+52 000 ₽</div>
              <div className="text-sm text-gray-500">01.04.2025</div>
            </div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-red-500" />
              <div>
                <div className="font-medium">Оплачен счет</div>
                <div className="text-sm text-muted-foreground">
                  ул. Ленина, 42 - ЖКУ
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-red-600">-8 760 ₽</div>
              <div className="text-sm text-gray-500">03.04.2025</div>
            </div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-red-500" />
              <div>
                <div className="font-medium">Расход на ремонт</div>
                <div className="text-sm text-muted-foreground">
                  пр. Мира, 15 - замена смесителя
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-red-600">-4 500 ₽</div>
              <div className="text-sm text-gray-500">05.04.2025</div>
            </div>
          </div>
        </ProductDemoTabContent>

        <ProductDemoTabContent
          name="properties"
          title="Вся ваша недвижимость - под контролем"
          className="bg-gradient-to-br from-amber-50 to-white"
        >
          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Квартира, 2 комнаты</div>
                <div className="text-sm text-muted-foreground">
                  ул. Ленина, 42
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-600">Сдана</div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Кладовая</div>
                <div className="text-sm text-muted-foreground">
                  пр. Мира, 15
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-green-600">Сдана</div>
          </div>

          <div
            className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">Машиноместо</div>
                <div className="text-sm text-muted-foreground">
                  ул. Гагарина, 8
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-amber-600">
              Поиск арендатора
            </div>
          </div>
        </ProductDemoTabContent>
      </Tabs>
    </div>
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
      </div>
    </TabsContent>
  );
}
