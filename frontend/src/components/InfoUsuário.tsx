import { useState } from "react";

export function InfoUsuario({ onAvancar }: { onAvancar: () => void }) {
  const alternativas = [
    { q1: "5 - 12", q2: "13 - 18", q3: "19 - 35", q4: "36+" },
  ];

  const [idade, setIdade] = useState("");
  const [error, setError] = useState("");

  const finallyRegister = () => {
    if (!idade) {
      setError("Por favor, selecione sua faixa etária.");
      return;
    }
    setError("");
    onAvancar();
  };

  return (
    <div className="w-[850px] max-sm:w-[90%] border-white border-[2px] rounded-lg flex flex-col items-center justify-start p-16 gap-10 text-white">
      <div className="">
        <p className="font-bebas-neue max-w-[500px] text-center text-2xl max-sm:text-lg leading-relaxed">
          Antes de começar a pesquisa, preencha algumas informações <br className="max-sm:hidden" />
          para ajudar na análise das respostas
        </p>

        <div className="w-full flex flex-col gap-6">
          <span className="text-red-500 text-sm">{error}</span>
          <p className="text-xl max-sm:text-lg font-bebas-neue">Faixa Etária:</p>

          <div className="flex flex-col gap-3 text-xl max-sm:text-base">
            {Object.entries(alternativas[0]).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center gap-2 text-[#B5B5B5]"
              >
                <input
                  type="radio"
                  value={value}
                  name="faixa-etaria"
                  onChange={(e) => setIdade(e.target.value)}
                  className="accent-green-600"
                />
                {value}
              </label>
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <button
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-inter font-bold text-lg max-sm:text-base transition"
              onClick={finallyRegister}
            >
              AVANÇAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
