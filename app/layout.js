import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavContextProvider } from "./context/nav-context";
import "./globals.css";
import "./styles/layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dan Clubb",
    description:
        "On the site, you'll find a showcase of my previous work experiences and some personal projects that I've been working on. I'm eager to share my coding adventures with you all!",
    authors: [{ name: "Dan Clubb" }, { name: "Daniel Clubb" }],
    keywords: [
        "Dan Clubb",
        "Daniel Clubb",
        "Frontend developer",
        "Software developer",
        "Portfolio",
    ],
    icons: {
        icon: "/icon.ico",
    },
    openGraph: {
        title: "Dan Clubb",
        description:
            "On the site, you'll find a showcase of my previous work experiences and some personal projects that I've been working on. I'm eager to share my coding adventures with you all!",
        url: "https://www.danclubb.com/",
        siteName: "danclubb.com",
        images: [
            {
                url: "/images/hero-devices.png",
                width: 150,
                height: 50,
                alt: "Welcome to danclubb.com",
            },
        ],
        authors: ["Dan Clubb"],
        locale: "en_GB",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
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
