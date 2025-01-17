import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { ModalProvider } from "@/context/ModalContext";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "DGenny - Compreai",
  description: "DGenny - Plataforma de Compras Inteligentes",
  icons: {
    icon: '/favicon-dgenny.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ModalProvider>
          <Navbar />
          {children}
          <ScrollTop />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
