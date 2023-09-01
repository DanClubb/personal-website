import "./globals.css";
import "./styles/layout.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { NavContextProvider } from "./context/nav-context";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Clubb",
  icons: {
    icon: "./favicon.ico",
  },
  description: "Dan Clubb's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-_f6zD3CM3AnECDofbTezl_WmbNknjDMvgIbabL8Alc"
        />
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
