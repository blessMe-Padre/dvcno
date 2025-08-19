import { cookies } from 'next/headers';
import "./globals.css";
import { ClientLangInitializer, Footer, Header } from "./components";
import { StoreInitializer } from './components/StoreInitializer';
import localFont from 'next/font/local';

const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-montserrat'
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
      <head>
        <meta name="robots" content="noindex" />
      </head>
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
