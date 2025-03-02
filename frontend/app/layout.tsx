import type { Metadata } from "next";
import { roboto } from '@/ui/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "IYC-Mitsu.de - Mitsubishiclub in Berlin und Brandenburg",
  description: "Mitsubishiclub in Berlin und Brandenburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
