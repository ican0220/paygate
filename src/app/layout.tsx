import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/pay.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

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
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
