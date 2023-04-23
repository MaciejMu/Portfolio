import { Header } from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "../style/globals.css";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/components/Provider/Provider";

export const metadata = {
  title: "Moje portfolio",
  description: "Moje portfolio - Maciej Muter",
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
