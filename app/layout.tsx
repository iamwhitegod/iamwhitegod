"use client";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import GlobalStyles from "@/styles/globalStyles";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitegod Kingsley - iamwhitegod",
  description: "Whitegod Kingsley is a frontend engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
