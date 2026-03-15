import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switch to Inter for a cleaner, modern look
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anisul | Visual Poetry", // Better SEO and brand alignment
  description: "A visual journey that transcends time and space. Discover the artistry of moments captured in motion by Anisul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
