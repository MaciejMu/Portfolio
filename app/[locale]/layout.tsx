import { Header } from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "@/style/globals.css";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Provider/Provider";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "Moje portfolio",
  description: "Moje portfolio - Maciej Muter",
  icons: {
    icon: "/favicon.png",
  },
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pl" }];
}
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
