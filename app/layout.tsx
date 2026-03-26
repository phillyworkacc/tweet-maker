import "@/styles/globals.css";
import "@/styles/site.css";
import type { Metadata } from "next";
import { AppleEmojiFont, InterFont } from "./fonts";
import { ModalProvider } from "@/components/Modal/ModalContext";

export const metadata: Metadata = {
  title: "Tweet Maker",
  description: "Generate tweet images for social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
        </head>
        <body className={`${InterFont.className} ${AppleEmojiFont.className}`}>
          {children}
        </body>
      </html>
    </ModalProvider>
  );
}
