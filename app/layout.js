import { cookies } from 'next/headers';
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { ClientLangInitializer, Footer, Header } from "./components";
import { StoreInitializer } from './components/StoreInitializer';
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const bebasNeue = localFont({
  src: './fonts/BebasNeue.ttf',
  display: 'swap',
  variable: '--font-bebas-neue',
  preload: true,
});

export const metadata = {
  title: "ДВЦНО",
  description: "Дальневосточный центр непрерывного образования",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const lang = cookieStore.get('language')?.value || 'ru';

  return (
    <html lang={lang}>
      <body className={`${montserrat.className} ${bebasNeue.variable} footer-sticky`}>
        <ClientLangInitializer>
          <div className="container">
            <Header />
          </div>
          <main>
            {children}
          </main>
          <Footer />
        </ClientLangInitializer>
      </body>
    </html>
  );
}
