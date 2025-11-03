import { Link } from "react-router-dom";

export function PesquisaFinalizada() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black flex items-center justify-center p-6 sm:p-10 md:p-20">
      <div className="w-full max-w-[850px] h-auto border-white border-[2px] rounded-2xl flex flex-col items-center justify-start p-16 gap-6 text-white font-bebas-neue">
        <p className="text-2xl sm:text-3xl text-center leading-tight">
          PESQUISA FINALIZADA COM SUCESSO!
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#ACACAC] text-center max-w-[500px] leading-snug">
          AGRADECEMOS SUA CONTRIBUIÇÃO. É A PARTIR DESSAS AÇÕES QUE PODEMOS COMEÇAR A CONSCIENTIZAR A SOCIEDADE.
        </p>
        <img
          src="/Check.svg"
          alt="Ícone de confirmação"
          className="w-24 sm:w-32 md:w-40 mt-4"
        />
        <Link
          to="/"
          className="mt-6 sm:mt-8 max-sm:text-[0.75rem] bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 rounded font-inter font-bold text-base sm:text-lg transition-colors"
        >
          VOLTAR PARA A PÁGINA INICIAL
        </Link>
      </div>
    </div>
  );
}
