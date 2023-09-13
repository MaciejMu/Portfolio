import { Header } from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "@/style/globals.css";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Provider/Provider";
import { ReactNode } from "react";
import { languages } from "../i18n/settings";

export const metadata = {
  title: "Moje portfolio",
  description: "Moje portfolio - Maciej Muter",
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
