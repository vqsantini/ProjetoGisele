import { Header } from "./components/Header";
import { Perguntas } from "./components/Perguntas";

export function Pesquisa() {

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-black">
            <div className="min-h-screen bg-pesquisa flex flex-col">
                <Header />
                <div className="flex flex-col justify-center items-center flex-1 text-center px-8 max-sm:px-4">
                    <div className="max-w-[825px] flex flex-col gap-10 pt-32 max-sm:pt-16">
                        <p className="text-white text-5xl max-sm:text-2xl font-inter font-extrabold uppercase leading-tight">
                            a simplicidade do amor
                        </p>
                        <p className="text-[#D3D3D3] text-lg max-sm:text-sm leading-relaxed">
                            Esta pesquisa não é sobre política ou ideologia. É sobre o direito de existir.
                            Sobre poder andar na rua, trabalhar, estudar e amar sem medo. É sobre garantir
                            a todos a mesma dignidade que você deseja para si. Agradecemos por dedicar seu
                            tempo a esta causa.
                        </p>
                    </div>
                </div>

                <div className="flex items-end h-[30vh] max-sm:h-[20vh]">
                    <img src="./Transiction.svg" className="w-screen object-cover" />
                </div>
            </div>
            <div className="flex flex-col items-center w-full bg-black">
                <p className="text-white font-extrabold text-5xl max-sm:text-3xl font-inter text-center pt-32 max-sm:pt-16 pb-12">
                    RESPONDA A PESQUISA
                </p>

                <div className="flex justify-center items-center w-full h-[600px] max-sm:h-auto max-sm:pb-12">
                    <div className="w-full flex justify-center items-center px-6">
                        <Perguntas />
                    </div>
                </div>

                <p className="pt-24 pb-12 text-[#A6A6A6] text-center text-sm max-sm:text-xs px-6">
                    © 2025. Todos direitos reservados a Jonathan Luis Uber e Victor Gonzaga Santini
                </p>
            </div>
        </div>
    );
}
