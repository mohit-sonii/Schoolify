import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schoolify",
  description: "School DashBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={`${inter.className} bg-slate-200`}>
          <main>
            <Toaster/>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
