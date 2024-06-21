'use client';
import { Explanation } from "@/components/Explanation";
import { text1, text4, text5 } from "@/constants";

export default function Inference() {
  return (
    <section>
         <Explanation text={text1} title="INFERÊNCIA PROPOSICIONAL COM RACIOCÍNIO PARA FRENTE E PARA TRÁS DE PRIMEIRA ORDEM " />
         <Explanation text={text4} title="EXEMPLO 1" />
         <Explanation text={text5} title="EXEMPLO 2" />
    </section>
  )
}