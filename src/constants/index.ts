export const text1: string[] = [
    "Inferência com raciocínio para frente e para trás proporcionais são as duas estratégias mais importantes (sendo as ideias base) tanto no campo da Inteligência Artificial, quanto da lógica proposicional. A Inferência para Frente ocorre quando se toma uma decisão com base nos dados disponíveis, enquanto a Inferência para Trás começa com o objetivo final e trabalha para trás para determinar quais fatos devem ser considerados para alcançar o objetivo.",
    "• Encadeamento para Frente: Decide com base nos dados disponíveis.",
    "Utiliza uma abordagem bottom-up (vem da assunção específica indo para a geral). Aplica a estratégia de busca em largura. Objetivo é obter uma conclusão. Mais lento, pois usa todas as regras disponíveis. Opera da inicial ao final, ou seja, em direção progressiva. Usado em planejamento, monitoramento, controle e interpretação.",
    "• Encadeamento para Trás: Começa com o objetivo final e trabalha para trás. Utiliza uma abordagem top-down(vem da assunção geral indo para a específica).",
    "Aplica a estratégia de busca em profundidade. Objetivo é obter os fatos necessários. Mais rápido, pois usa apenas algumas regras. Opera do objetivo para alcançar o estado inicial, ou seja, em direção regressiva. Usado em mecanismos de inferência automatizados, provas de teoremas, assistentes de prova e outras aplicações de inteligência artificial."];
export const text2: string[] = ["A unificação é uma técnica lógica que resolve problemas envolvendo expressões e equações, buscando encontrar substituições que tornem essas expressões iguais. Existem diferentes abordagens e classificações para a unificação, como unificação de primeira ordem e unificação de alta ordem, dependendo das características das expressões envolvidas. O objetivo é encontrar uma solução completa e mínima, ou seja, um conjunto de substituições que cubra todas as soluções possíveis sem redundâncias. John Alan Robinson foi um dos pioneiros na formalização da unificação, usando-a como parte fundamental da resolução em lógica de primeira ordem. Hoje, a unificação é amplamente aplicada em áreas como raciocínio automatizado, lógica de programação e implementação de sistemas de tipos, entre outros.",
    "Para iniciar um processo de unificação, são necessários certos pré-requisitos:",
    "1. Um suposto conjunto infinito de variáveis, geralmente denotado por V. Para unificação de alta ordem, é comum que V seja disjunto do conjunto de variáveis ligadas ao Cálculo Lambda.",
    "2. Um conjunto de termos T, onde as variáveis pertencem ao conjunto V. Para unificação de primeira ordem, os termos são usualmente de primeira ordem ou incluem termos lambda, dependendo do contexto.",
    "3. Um mapeamento que associe a cada termo do conjunto T um subconjunto de variáveis livres que ocorrem nele.",
    "4. Uma relação de equivalência entre os termos em T, indicando quais termos são considerados iguais. Para unificação de alta ordem, isso geralmente significa que os termos são equivalentes em alpha. Para unificação de primeira ordem, a relação pode refletir conhecimentos prévios sobre certos símbolos de função.", 
    "Além disso, é importante entender o conceito de termo de primeira ordem, que é definido recursivamente como o conjunto mínimo que inclui símbolos de variáveis, constantes e funções. Por exemplo, se tivermos uma variável x, uma constante 1 e uma função binária “+”, então termos como x, 1 e a expressão x+1 são todos termos de primeira ordem."];
export const text3: string[] = ["Na lógica de predicados, a forma normal prenexa é uma forma padronizada de uma fórmula, onde todos os quantificadores estão agrupados no início da fórmula, seguidos por uma sentença livre de quantificadores. Essa forma é útil para simplificar métodos de prova e as próprias fórmulas. A prova de Gödel em seu teorema da completude para lógica de primeira ordem pressupõe que todas as fórmulas estejam na forma prenexa.",
  "Uma fórmula na forma normal prenexa tem a seguinte estrutura: x1...xn.α, onde α é uma fórmula livre de quantificadores, chamada de matriz, e x1,..., xn são os quantificadores, com x1, ..., xn sendo variáveis distintas e cada quantificador indicando se é universal (∀) ou existencial (∃). Se todos os quantificadores são universais, a fórmula é chamada de universalmente fechada.",
  "Existem regras para converter uma fórmula para sua forma normal prenexa, dependendo dos conectivos lógicos envolvidos na fórmula. Essas regras incluem manipulações de conjunção, disjunção, negação e implicação. Essas manipulações visam mover os quantificadores para o início da fórmula enquanto preservam a equivalência lógica da fórmula original.",
  "Exemplo 1:", 
  "Considere a fórmula: ¬( ∀x.P(x,y) → ∀x.¬(P(x,y) ∨ y.R(y)))",
  "Passos para converter para a forma normal prenexa:",
  "1. Aplicar negação na fórmula: ¬(¬( ∀x.P(x,y)) ∨ ∀x.(¬(P(x,y)) ∨ y.R(y)))",
  "2. Remover implicação: ¬(¬( ∀x.P(x,y)) ∨ ∀x.(¬(P(x,y)) ∨ y.R(y)))",
  "3. Aplicar negação novamente:  ∀x.P(x,y) ∧ ¬∀x.(¬(P(x,y)) ∨ y.R(y))",
  "4. Converter para a forma prenexa: ∀x ∃x.(P(x,y) ∧ (P(x,y) ∧ ¬y.R(y)) ∧ P(x,y))",
  "Exemplo 2:",
  "Considere a fórmula: ( ∃x.P(x) → ∀y.Q(x,y)) → ∀z.R(z)",
  "Passos para converter para a forma normal prenexa:",
  "1. Remover implicação: ¬( ∃x.P(x) → ∀y.Q(x,y)) ∨ ∀z.R(z)",
  "2. Aplicar negação: ( ∃x.¬P(x) ∨ ∀y.¬Q(x,y)) ∨ ∀z.R(z)",
  "3. Converter para a forma prenexa: ∃x ∀z. (¬P(x) ∨ ¬∀y.Q(x,y) ∨ R(z))"];
export const text4: string[] = [];

export const nomes: string[] = ["jonas","victor","simao","joaor"];
