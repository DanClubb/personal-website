import "./globals.css";
import "./styles/layout.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { NavContextProvider } from "./context/nav-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Clubb",
  description: "Dan Clubb's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavContextProvider>
          <Header />
          <main>{children}</main>
          <footer>Footer</footer>
        </NavContextProvider>
      </body>
    </html>
  );
}
