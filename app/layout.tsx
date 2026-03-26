import "@/styles/globals.css";
import "@/styles/site.css";
import type { Metadata } from "next";
import { AppleEmojiFont, InterFont, ManropeFont, TwitterFont } from "./fonts";
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
      <html lang="en" className={`${InterFont.className} ${AppleEmojiFont.className}`}>
        <body>{children}</body>
      </html>
    </ModalProvider>
  );
}
