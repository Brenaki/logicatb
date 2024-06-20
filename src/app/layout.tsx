import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LogicTb",
  description: "Elaborar uma página web que descreva e exemplifique os seguintes tópicos: inferência proposicional com raciocínio para frente, unificação em lógica de primeira ordem, raciocínio para trás em lógica de primeira ordem e forma normal prenex. A tarefa deve ser realizada em grupos de 3 ou 4 alunos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
