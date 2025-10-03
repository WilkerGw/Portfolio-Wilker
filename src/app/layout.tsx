import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wilker Martins",
  description: "Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
