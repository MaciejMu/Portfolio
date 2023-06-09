import { Header } from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "../style/globals.css";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Provider/Provider";
import { ReactNode } from "react";

export const metadata = {
  title: "Moje portfolio",
  description: "Moje portfolio - Maciej Muter",
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
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
