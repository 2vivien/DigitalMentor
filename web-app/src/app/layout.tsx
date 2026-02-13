import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalMentor - Trouvez votre mentor idéal",
  description: "Plateforme de mentorat pour développeurs et entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
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
