"use client";
import { NavBar } from "@components";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>AstroByte</title>
      </head>
      <body className={`${roboto.className} overflow-y-auto bg-black`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
