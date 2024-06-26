import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { TopNav } from "./_components/topnav";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-gray-50`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
            {modal}
          </div>
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
