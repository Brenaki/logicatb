'use client';
import { Explanation } from "@/components/Explanation";
import { text1, text2, text3 } from "@/constants";

export default function Home() {
  return (
    <section className="2xl:max-container relative flexCenter min-h-screen flex-col gap-y-40">
      <Explanation text={text1} title="INFERÊNCIA PROPOSICIONAL COM RACIOCÍNIO PARA FRENTE E PARA TRÁS DE PRIMEIRA ORDEM " />
      <Explanation text={text2} title="UNIFICAÇÃO EM LOGICA DE PRIMEIRA ORDEM" />
      <Explanation text={text3} title="FORMA NORMAL PRENEX" />
    </section>
  );
}
