import { Link } from "react-router-dom"

export function PesquisaFinalizada() {

  return (
    <div className="h-screen w-full overflow-x-hidden bg-black flex items-center justify-center p-20">
      <div className="w-[850px] h-[600px] border-white border-[2px] rounded-lg flex flex-col items-center justify-start pt-12 px-20 gap-10 text-white font-bebas-neue">
        <p className="text-3xl text-center">PESQUISA FINALIZADA COM SUCESSO!</p>
        <p className="text-xl text-[#ACACAC] text-center max-w-[450px]">AGRADECEMOS SUA CONTRIBUIÇÃO. À PARTIR DESSAS AÇÕES QUE PODEMOS COMEÇAR A CONSCIENTIZAR A SOCIEDADE</p>
        <img src="./Check.svg" className="" />
        <div className="flex flex-col items-center gap-4 mt-6 ">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg"> <Link to='/'>VOLTAR PARA A PÁGINA INICIAL</Link></button>
        </div>
      </div>
    </div>
  )
}