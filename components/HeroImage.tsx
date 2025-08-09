import { Building2, CalendarClock, BellRing, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-7 border border-gray-200">
      {/* Beta chip */}
      <div className="absolute top-3 right-3 bg-primary/10 text-primary px-2.5 py-0.5 rounded-md text-xs font-medium ring-1 ring-primary/20">
        Beta
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-building2 h-5 w-5 text-primary"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
          <span>Сегодня в Arendo</span>
        </h3>
      </div>

      {/* Rows */}
      <div className="space-y-3.5">
        <div className="flex items-center gap-3.5 p-3.5 bg-muted rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-clock h-7 w-7 text-primary shrink-0"
          >
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
            <path d="M16 2v4"></path>
            <path d="M8 2v4"></path>
            <path d="M3 10h5"></path>
            <path d="M17.5 17.5 16 16.3V14"></path>
            <circle cx="16" cy="16" r="6"></circle>
          </svg>
          <div className="min-w-0">
            <h4 className="font-medium">Платёж аренды</h4>
            <p className="text-sm text-muted-foreground truncate">52 000 ₽</p>
          </div>
          <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-100">
            Завтра
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 bg-muted rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell-ring h-7 w-7 text-primary shrink-0"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
            <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
          </svg>
          <div className="min-w-0">
            <h4 className="font-medium">Напомнили о платеже</h4>
            <p className="text-sm text-muted-foreground truncate">
              Анна К., ул. Ленина, 42
            </p>
          </div>
          <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            Отправлено
          </span>
        </div>

        <div className="flex items-center gap-3.5 p-3.5 bg-muted rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wallet h-7 w-7 text-primary shrink-0"
          >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
          </svg>
          <div className="min-w-0">
            <h4 className="font-medium">Коммунальные услуги</h4>
            <p className="text-sm text-muted-foreground truncate">8 760 ₽</p>
          </div>
          <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            Оплачено
          </span>
        </div>
      </div>

      {/* Footer line */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Сейчас вы управляете 3 объектами
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
