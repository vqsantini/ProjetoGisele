import { useState } from "react";
import { Header } from "./components/Header";
import { InfoUsuario } from "./components/InfoUsuário";
import { Perguntas } from "./components/Perguntas";

export function Pesquisa() {

    const [step, setStep] = useState<"info" | "perguntas">("info");

    return (
        <div className="h-screen w-full overflow-x-hidden bg-black">
            <div className="h-screen bg-pesquisa">
                <Header />
                <div className="h-[calc(70vh-112px)] flex justify-center items-center">
                    <div className="flex flex-col text-center max-w-[825px] gap-10 pt-32">
                        <p className="text-white text-5xl font-inter font-extrabold uppercase">a simplicidade do amor</p>
                        <p className="text-[#D3D3D3]">Esta pesquisa não é sobre política ou ideologia. É sobre o direito de existir. Sobre poder andar na rua, trabalhar, estudar e amar sem medo. É sobre garantir a todos a mesma dignidade que você deseja para si. Agradecemos por dedicar seu tempo a esta causa.</p>
                    </div>
                </div>
                <div className="flex items-end h-[30vh]"> <img src="./Transiction.svg" className="w-screen" /></div>
            </div>
            <div className="h-auto flex flex-col">
                <p className="text-white font-extrabold text-5xl font-inter text-center pt-32 pb-12">RESPONDA A PESQUISA</p>
                <div className="flex justify-center items-center h-[600px]">
                    <div className="w-full h-full flex justify-center items-center">
                        {step === "info" && <InfoUsuario onAvancar={() => setStep("perguntas")} />}
                        {step === "perguntas" && (
                            <Perguntas onVoltar={() => setStep("info")} />
                        )}
                    </div>
                </div>
                <p className="pt-24 pb-12 text-[#A6A6A6] text-center">© 2025.Todos direitos reservados a Jonathan Luis Uber e Victor Gonzaga Santini</p>
            </div>
        </div>
    )
}