import "./globals.css";
import "./styles/layout.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { NavContextProvider } from "./context/nav-context";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Clubb",
  description: "Dan Clubb's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="../public/hero-devices.svg" />
      </head>
      <body className={inter.className}>
        <NavContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NavContextProvider>
      </body>
    </html>
  );
}
