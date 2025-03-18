import type { Metadata } from "next";
import Header from "./components/Header";
import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mam Les Cro Mignon's",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
