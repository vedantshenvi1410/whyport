import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/components/layout/ThemeProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vedant Shenvi | Portfolio",
  description: "VLSI Student · Developer · Builder · Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} min-h-screen antialiased`}
      >
        <ThemeContextProvider>
          <CustomCursor />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
