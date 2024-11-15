import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Schoolify",
  description: "School DashBoard"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
