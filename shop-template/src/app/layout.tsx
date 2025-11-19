import type { Metadata } from "next";
import "../../globals.css";
import Baner from "@/components/ui/Baner";
import SearchBar from "@/components/ui/SearchBar";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Using Vazir Font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <Baner />
        <SearchBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
