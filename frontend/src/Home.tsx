import { Link } from "react-router-dom";
import { Header } from "./components/Header";
// import InfiniteCarousel from "./components/Carrosel";

export function Home() {


    return (
        <div className="h-screen w-full overflow-x-hidden bg-black">
            <div className="h-screen w-screen bg-home">
                <Header />
                <div className="w-full overflow-x-hidden">

                    {/* APRESENTAÇÃO */}
                    <div className="flex flex-col gap-20 h-[calc(100vh-192px)] mt-20">
                        <div className="flex flex-col items-start px-20 gap-6 text-white max-w-[720px]">
                            <p className="text-5xl font-inter font-extrabold leading-[4rem] uppercase">Atualmente, ser <br />lgbtqia+ é ilegal em <br /> 64 países do mundo</p>
                            <p className="text-lg font-inter" >No Irã, Arábia Saudita e Uganda, ser quem você é pode levar à pena de morte.</p>
                            <Link to="/pesquisa"><button className="flex text-center text-2xl gap-5 py-3 px-6 bg-red-500 rounded hover:bg-red-600 font-bebas-neue ">RESPONDER PESQUISA<img src="./Arrow.svg" /></button></Link>
                        </div>

                        {/* TRANSIÇÃO */}
                        <div className="h-[100%] bg-gradient-to-b from-black/0 to-black"></div>
                    </div>

                    {/* CANAIS DE DENÚNCIA */}
                    <div className="flex flex-col bg-black font-inter">
                        <div className="flex gap-10 px-20 items-center">
                            <img src="./Denuncia.svg" />
                            <p className="text-3xl font-extrabold text-white">CANAIS DE DENÚNCIA</p>
                        </div>
                        <div className="flex justify-around pt-16 px-20 gap-10">
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl transition-transform duration-300 hover:scale-[1.1]">100</p>
                                <p className="text-[#ACACAC]">Disque 100 - Disque Direitos Humanos, para denunciar qualquer tipo de violência ou discriminação.</p>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl transition-transform duration-300 hover:scale-[1.1]">190</p>
                                <p className="text-[#ACACAC]">Disque 190 - Polícia Militar, em situações de emergência, não hesite em acionar a Polícia.</p>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-[300px] gap-y-6 cursor-default">
                                <p className="font-extrabold text-white text-5xl transition-transform duration-300 hover:scale-[1.1]">B.O</p>
                                <p className="text-[#ACACAC]">Você também pode registrar boletins de ocorrência em delegacias, tanto físicas, quanto delegacias on-line.</p>
                            </div>
                        </div>
                        <p className="text-[#A6A6A6] text-center pt-12 pb-24">Não tenha medo de denunciar, isso pode salvar o seu e o futuro de diversas pessoas LBGBTQIA+</p>
                        {/* FOOTER */}
                        {/* <InfiniteCarousel /> */}
                        <p className="pt-24 pb-12 text-[#A6A6A6] text-center">© 2025.Todos direitos reservados a Jonathan Luis Uber e Victor Gonzaga Santini</p>
                    </div>

                </div>
            </div>
        </div>
    )
}