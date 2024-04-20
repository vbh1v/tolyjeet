import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import MarqueeComponent from "@/components/MarqueeComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tolyjeet",
  description: "You can't jeet the boss!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <MarqueeComponent />
      </body>
    </html>
  );
}
