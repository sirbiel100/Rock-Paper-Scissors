import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.sass";
import ContextProvider from "@/context/provider";
import { Suspense } from "react";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Rock Paper Scissors | GC",
  description: "Welcome to my minigame that you probably already know how to play. But don't worry if you don't, there is a 'rules' modal where you can check it. Enjoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlowSemiCondensed.className}>
        <ContextProvider>
          <Suspense>
            {children}
          </Suspense>
        </ContextProvider>
      </body>
    </html>
  );
}
