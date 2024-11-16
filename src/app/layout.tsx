import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bokun frontend assignment",
  description:
    "Create a frontend application that displays a list of experiences. These experiences must be editable, dynamic, and deletable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-primary">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.bokun.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Bokun logo featuring a mountain. Bokun is a Trip Advisor company"
                aria-hidden
                height={100}
                priority
                src="/images/logo.png"
                width={100}
              />
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
