"use client";
import MobileNavBar from "../components/mobileNavBar";
import NavBar from "../components/navBar";
import "../styles/globals.css";
import Footer from "../components/footer";
import ThemeProvider, { useTheme } from "../context/ThemeContext";
import { App } from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const { darkTheme } = useTheme();
  
  return (
    <ThemeProvider>
      <App children={children} />
    </ThemeProvider>
  );
}

