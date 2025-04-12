import { Building2, CalendarClock, BellRing, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-700">
      <div className="absolute -top-3 -right-3 bg-primary text-white px-3 py-1 rounded-md text-sm font-medium">
        Beta
      </div>

      <div className="border-b border-gray-100 pb-4 mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <span>Управление недвижимостью</span>
        </h3>
      </div>

      <div className="space-y-6">
        <div
          className={`flex items-start gap-4 p-3 bg-muted rounded-md transform transition-all duration-500 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <CalendarClock className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h4 className="font-medium">Платеж аренды</h4>
            <p className="text-sm text-muted-foreground">52 000 ₽ - завтра</p>
          </div>
        </div>

        <div
          className={`flex items-start gap-4 p-3 bg-muted rounded-md transform transition-all duration-500 delay-100 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <BellRing className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h4 className="font-medium">Напоминание отправлено</h4>
            <p className="text-sm text-muted-foreground">
              Анна К. - ул. Ленина, 42
            </p>
          </div>
        </div>

        <div
          className={`flex items-start gap-4 p-3 bg-muted rounded-md transform transition-all duration-500 delay-200 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <Wallet className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h4 className="font-medium">Коммунальные услуги</h4>
            <p className="text-sm text-muted-foreground">8 760 ₽ - оплачено</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between">
        <div className="text-sm text-muted-foreground">Всего объектов: 3</div>
        <div className="text-sm font-medium text-primary">Подробнее</div>
      </div>
    </div>
  );
};

export default HeroImage;
