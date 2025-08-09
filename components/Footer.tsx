import { Building2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-8 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Arendo</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Сервис для частных арендодателей. Контроль арендаторов, платежей и
              документов - без лишней суеты.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:support@arendo.pro" className="hover:underline">
                  support@arendo.pro
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Будьте в курсе</h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Arendo</p>
          <p>Сделано с заботой о частных арендодателях</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
