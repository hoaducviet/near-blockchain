import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Provider from '@/context/Provider'
import Header from "./header"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Near Chain",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
        {children}
        </Provider>
        </body>
    </html>
  );
}
