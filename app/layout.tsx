"use client";
import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import "../styles/globals.css";
import Footer from "../components/footer";
import ThemeProvider, { useTheme } from "./context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html>
        <head />
        <body>
          <NavBar />
          <MobileNavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
