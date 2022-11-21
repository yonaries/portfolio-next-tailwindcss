import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-primaryBg text-white">
        <NavBar />
        <MobileNavBar />
        {children}
      </body>
    </html>
  );
}
