import {  Quicksand } from "next/font/google"; // Add Quicksand import
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify desired weights
});

export const metadata = {
  title: "FunPlay Systems - Playground Equipment",
  description: "FunPlay Systems offers award-winning, safe, and customizable playground equipment across India. Transform your space into a world of play with our expert solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${quicksand.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}