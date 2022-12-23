"use client";
import React from "react";
import Footer from "../components/footer";
import MobileNavBar from "../components/navbar/mobileNavBar";
import NavBar from "../components/navbar/navBar";
import ThemeProvider from "./context/ThemeContext";
import "../styles/globals.css";

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
