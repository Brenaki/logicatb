import Image from "next/image";

export function Footer() {
  return (
    <footer className="flexCenter flex-col mt-20 p-4 bg-gray-40 gap-8">
      <div className="flexCenter flex-col gap-y-2">
        <h1 className="text-3xl font-bold text-gray-100">Parceiros:</h1>
        <div className="flex items-center justify-between gap-x-4">
          <Image alt="Logo UEPG" src={"/uepg.png"} width={100} height={100} />
          <span className="text-2xl font-mono text-gray-100 max-w-24">Lógica Computacional</span>
        </div>
      </div>
      <div className="flex flex-col max-w-md text-center text-gray-100 ">
        <h2 className="font-bold">Créditos: </h2>
        <p>Desenvolvedor: JOÃO PEDRO BORSATO DE RAMOS</p>
        <p>Pesquisa: JOÃO PEDRO CHAVES SIMÃO</p>
        <p>Designer: JOÃO RAFAEL DOS SANTOS DA ROSA</p>
        <p>Desenvolvedor: VICTOR ANGELO LEGAT CERQUEIRA</p>
      </div>
      <p className="text-gray-100">© 2023 LOLGIX. Todos os direitos reservados.</p>
    </footer>
  );
}