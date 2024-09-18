import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/pay.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayGate",
  description: "PayGate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
