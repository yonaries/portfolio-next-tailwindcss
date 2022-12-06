"use client";
import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import "../styles/globals.css";
import Footer from "../components/footer";
import ThemeProvider, { useTheme } from "../context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <App children={children} />
    </ThemeProvider>
  );
}
export function App({ children }: { children: React.ReactNode }) {
  const { darkTheme } = useTheme();
  return (
    <html className={`${darkTheme && "dark"}`}>
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
