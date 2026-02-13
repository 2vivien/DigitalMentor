import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalMentor - Neo Brutalism",
  description: "Neo brutalist style React UI blocks and templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/digitalmentor.png" />
        </head>
        <body className={`${jakarta.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
