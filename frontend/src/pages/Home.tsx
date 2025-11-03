import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Home() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-black">
            <div className="min-h-screen w-screen bg-home">
                <Header map="home"/>
                <div className="w-full overflow-x-hidden">
                    <div className="flex flex-col justify-between gap-16 h-[calc(100vh-192px)] mt-20 max-sm:mt-0 max-sm:gap-12 max-sm:px-6">
                        <div className="flex flex-col items-start px-20 gap-6 text-white max-w-[720px] max-sm:max-w-full max-sm:px-4">
                            <p className="text-5xl max-sm:text-2xl font-inter font-extrabold leading-[4rem] max-sm:leading-8 uppercase">
                                Atualmente, ser lgbtqia+ é ilegal em 64 países do mundo
                            </p>
                            <p className="text-lg max-sm:text-sm font-inter leading-relaxed">
                                No Irã, Arábia Saudita e Uganda, ser quem você é pode levar à pena de morte.
                            </p>
                            <Link to="/pesquisa">
                                <button className="flex items-center justify-center text-2xl max-sm:text-lg gap-3 py-3 px-6 bg-red-500 rounded hover:bg-red-600 font-bebas-neue transition">
                                    RESPONDER PESQUISA
                                    <img src="./Arrow.svg" className="w-5 max-sm:w-4" />
                                </button>
                            </Link>
                        </div>
                        <div className="h-[100%] bg-gradient-to-b from-black/0 to-black"></div>
                    </div>
                    <div className="flex flex-col bg-black font-inter px-20 max-sm:px-6">
                        <div className="flex items-center gap-6 max-sm:gap-4 max-sm:flex-col max-sm:text-center">
                            <img src="./Denuncia.svg" className="w-12 max-sm:w-10" />
                            <p className="text-3xl max-sm:text-2xl font-extrabold text-white">CANAIS DE DENÚNCIA</p>
                        </div>

                        <div className="flex justify-around flex-wrap pt-16 px-10 gap-10 max-sm:flex-col max-sm:items-center max-sm:px-0">
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl max-sm:text-4xl transition-transform duration-300 hover:scale-[1.1]">
                                    100
                                </p>
                                <p className="text-[#ACACAC] text-sm max-sm:text-xs leading-relaxed">
                                    Disque 100 - Disque Direitos Humanos, para denunciar qualquer tipo de violência ou discriminação.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl max-sm:text-4xl transition-transform duration-300 hover:scale-[1.1]">
                                    190
                                </p>
                                <p className="text-[#ACACAC] text-sm max-sm:text-xs leading-relaxed">
                                    Disque 190 - Polícia Militar, em situações de emergência, não hesite em acionar a Polícia.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl max-sm:text-4xl transition-transform duration-300 hover:scale-[1.1]">
                                    B.O
                                </p>
                                <p className="text-[#ACACAC] text-sm max-sm:text-xs leading-relaxed">
                                    Você também pode registrar boletins de ocorrência em delegacias, tanto físicas, quanto delegacias on-line.
                                </p>
                            </div>
                        </div>

                        <p className="text-[#A6A6A6] text-center pt-12 pb-8 text-sm max-sm:text-xs px-4">
                            Não tenha medo de denunciar — isso pode salvar o seu e o futuro de diversas pessoas LGBTQIA+
                        </p>
                        <p className="pt-12 pb-8 text-[#A6A6A6] text-center text-xs max-sm:text-[10px] px-4">
                            © 2025. Todos direitos reservados a Jonathan Luis Uber e Victor Gonzaga Santini
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}