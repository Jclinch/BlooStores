import type { Metadata } from "next";
import "./globals.css";
import CartInitializer from "@/components/CartInitializer";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloostores",
  description: "Your friendly neighbourhood store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <CartInitializer />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
