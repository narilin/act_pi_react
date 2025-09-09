import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "AutoMundo",
  description: "Catálogo de autos en Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="p-6 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

