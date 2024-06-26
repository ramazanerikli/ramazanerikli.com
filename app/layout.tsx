import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/menu";
import NavItem from "./components/nav-item";
import Footer from "./components/footer";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Ramazan Erikli | Frontend Developer",
  description: "Frontend Development | Web Development | React.js | Next.js",
};


// const inter = Inter({ subsets: ["latin"] });
const inter_light = Inter({
  subsets: ["latin"],
  weight: "300",
  variable: '--font-inter-light',
});
const inter_medium = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-inter-medium',
});
const inter_bold = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: '--font-inter-bold',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter_light.variable} ${inter_medium.variable} ${inter_bold.variable}`}>
        <div className="container mx-auto px-8 max-w-[960px]">
          <nav className="nav pt-6 flex align-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <MobileMenu />
              <div className="flex items-center ms-auto lg:ms-0">
              <img src="/avatar-bit.png" className="rounded-full me-2 hidden" width={30} height={30} alt="Ramazan Erikli" />
              <Link href="/" className="inter-bold text-lg">Ramazan Erikli</Link>
              </div>
              <div className="flex gap-7">
              <NavItem href="/" text="Home" />
              <NavItem href="/projects" text="Projects" />
              <NavItem href="/blog" text="Blog" />
              </div>
            </div>
          </nav>
        <div className="flex min-h-screen pb-16 pt-12">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
