import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import Cursor from "@/components/Global/Cursor";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadhil Kholaf",
  description: "Muhammad Fadhil Kholaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Cursor />
          <Image
            className="h-screen w-full fixed object-cover opacity-50 pointer-events-none z-[998]"
            src="/images/grain.svg"
            alt="Grain Filter"
            loading="lazy"
            width={1024}
            height={1024}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
