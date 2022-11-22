import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "../components/footer";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={` bg-primaryBg text-white`}>
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
