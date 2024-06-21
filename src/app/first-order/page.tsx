'use client';

import { Explanation } from "@/components/Explanation";
import { text2, text8 } from "@/constants";

export default function FirstOrder() {
  return (
    <section>
      <Explanation text={text2} title="UNIFICAÇÃO EM LOGICA DE PRIMEIRA ORDEM" />
      <Explanation text={text8} title="EXEMPLO" />
    </section>
  )
}