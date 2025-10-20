import type { Metadata } from "next";
import "../../globals.css"

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
