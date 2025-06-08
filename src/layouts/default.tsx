import { Link } from '@heroui/link';

import { Navbar } from '@/components/navbar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
      <footer className="w-full bg-default-50 py-8 mt-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <p className="text-default-600 mb-2">г. Москва</p>
              {/* <p className="text-default-600 mb-2"></p> */}
              <p className="text-default-600 mb-2">
                <Link className="text-primary hover:underline" href="mailto:info@soperations.ru">
                  info@soperations.ru
                </Link>
              </p>
            </div>

            {/* Company Activities */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Деятельность компании «СОПС» в сфере IT:</h3>
              <ul className="text-default-600">
                <li className="mb-1">ОКВЭД 62.01 - Разработка компьютерного программного обеспечения</li>
                <li className="mb-1">ОКВЭД 62.02 - Деятельность консультативная и работы в области компьютерных технологий</li>
                <li className="mb-1">ОКВЭД 62.09 - Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая</li>
              </ul>
            </div>

            {/* Company Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Реквизиты</h3>
              <p className="text-default-600 mb-1">ООО «СОПС»</p>
              <p className="text-default-600 mb-1">ИНН: 9703210784</p>
              <p className="text-default-600 mb-1">КПП: 770301001</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
