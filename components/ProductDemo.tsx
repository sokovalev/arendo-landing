import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CalendarClock, BellRing, Wallet } from "lucide-react";

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
        <div className="px-4 py-2 bg-muted border-b border-gray-200">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <CalendarClock className="h-5 w-5" />
                <span className="text-xs font-medium">Календарь</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <BellRing className="h-5 w-5" />
                <span className="text-xs font-medium">Напоминания</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <Wallet className="h-5 w-5" />
                <span className="text-xs font-medium">Платежи</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="properties"
              className="data-[state=active]:bg-white"
            >
              <div className="flex flex-col items-center space-y-1 py-1">
                <Building2 className="h-5 w-5" />
                <span className="text-xs font-medium">Объекты</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="calendar" className="p-0 m-0">
          <div className="aspect-video bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
              <h3 className="text-xl font-bold mb-4">
                Единый календарь платежей
              </h3>

              <div className="grid gap-3 max-w-xl">
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
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="p-0 m-0">
          <div className="aspect-video bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white p-4 md:p-8">
              <h3 className="text-xl font-bold mb-4">
                Автоматические напоминания
              </h3>

              <div className="grid gap-3 max-w-xl">
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
                      <div className="font-medium">
                        Напоминание запланировано
                      </div>
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
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="p-0 m-0">
          <div className="aspect-video bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white p-4 md:p-8">
              <h3 className="text-xl font-bold mb-4">
                Учет доходов и расходов
              </h3>

              <div className="grid gap-3 max-w-xl">
                <div
                  className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center gap-3">
                    <Wallet className="h-8 w-8 text-green-500" />
                    <div>
                      <div className="font-medium">Получена оплата</div>
                      <div className="text-sm text-muted-foreground">
                        Аренда, ул. Ленина, 42
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
                        ЖКУ, ул. Ленина, 42
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
                      <div className="font-medium">Плановый ремонт</div>
                      <div className="text-sm text-muted-foreground">
                        Замена смесителя, пр. Мира, 15
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-600">-4 500 ₽</div>
                    <div className="text-sm text-gray-500">05.04.2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="properties" className="p-0 m-0">
          <div className="aspect-video bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white p-4 md:p-8">
              <h3 className="text-xl font-bold mb-4">
                Управление объектами недвижимости
              </h3>

              <div className="grid gap-3 max-w-xl">
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
                  <div className="text-sm font-medium text-green-600">
                    Сдана
                  </div>
                </div>

                <div
                  className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <div className="font-medium">Квартира, 1 комната</div>
                      <div className="text-sm text-muted-foreground">
                        пр. Мира, 15
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Сдана
                  </div>
                </div>

                <div
                  className="bg-white rounded-md p-3 border border-gray-200 flex items-center justify-between shadow-sm animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <div className="font-medium">Квартира, 3 комнаты</div>
                      <div className="text-sm text-muted-foreground">
                        ул. Гагарина, 8
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-amber-600">
                    Поиск арендатора
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDemo;
