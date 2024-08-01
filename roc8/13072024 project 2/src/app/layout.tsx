import "../styles/globals.css";
import Navbar from "./(component)/Navbar";
import Discount from "./(component)/Discount";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "roc8 Project 2",
  description: "roc8 project 2",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        <Discount />
        {children}
      </body>
    </html>
  );
}
