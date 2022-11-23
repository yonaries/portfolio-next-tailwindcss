import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import "../styles/globals.css";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="">
      <head />
      <body className="dark:bg-primaryBg bg-white dark:text-white text-primaryBg">
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
