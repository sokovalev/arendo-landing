import { Building2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-8 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Arendo</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Arendo — простой и надёжный сервис для частных арендодателей.
              Управляйте арендаторами, платежами и документами - без лишней
              суеты.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#features" className="hover:underline">
                  Возможности
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:underline">
                  Почему Arendo
                </Link>
              </li>
              <li>
                <Link href="#demo" className="hover:underline">
                  Демо
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:privacy@arendo.pro" className="hover:underline">
                  privacy@arendo.pro
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Arendo. Сделано с заботой о частных
            арендодателях.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
