import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Areia Play — Rede social de esportes de areia",
  description:
    "Registre partidas, acompanhe rankings e encontre parceiros para jogar beach tennis, futevôlei, vôlei de areia e futebol de areia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-archivo)]">
        {children}
      </body>
    </html>
  );
}
