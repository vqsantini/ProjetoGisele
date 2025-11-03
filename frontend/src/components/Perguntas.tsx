import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Perguntas() {
  const perguntas = [
    "Você acredita que a homofobia ainda é um problema sério na sociedade hoje?",
    "Você já presenciou ou soube de algum caso de homofobia em sua escola, trabalho ou comunidade?",
    "Na sua opinião, o que mais contribui para a homofobia?",
    "Você considera importante ter leis e políticas públicas para combater a homofobia?",
    "Você se sentiria à vontade em denunciar um ato de homofobia que presenciasse?",
    "Você já sofreu homofobia diretamente?",
    "Como você reagiria se visse alguém sofrendo homofobia?",
    "Você acha que a escola/faculdade/trabalho faz o suficiente para conscientizar sobre homofobia?",
    "Na sua opinião, como combater a homofobia de forma mais eficaz?",
    "Você acredita que as pessoas LGBTQIAP+ têm os mesmos direitos respeitados que os demais cidadãos?",
  ];

  const alternativas = [
    { q1: "Sim", q2: "Não", q3: "Não sei" },
    { q1: "Sim", q2: "Não" },
    { q1: "Falta de informação/educação", q2: "Influência da família ou religião", q3: "Cultura e mídia", q4: "Outros" },
    { q1: "Sim", q2: "Não", q3: "Não sei" },
    { q1: "Sim", q2: "Não", q3: "Talvez" },
    { q1: "Sim", q2: "Não", q3: "Prefiro não responder" },
    { q1: "Intervir e ajudar a vítima", q2: "Chamaria ajuda/autoridades", q3: "Ficaria sem saber o que fazer", q4: "Não fazer nada" },
    { q1: "Sim", q2: "Não", q3: "Parcialmente" },
    { q1: "Educação e conscientização", q2: "Conversas e diálogo aberto", q3: "Leis mais rigorosas", q4: "Outra" },
    { q1: "Sim", q2: "Não", q3: "Em parte" },
  ];

  const [index, setIndex] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [error, setError] = useState("");

  const progress = ((index + 1) / perguntas.length) * 100;

  const handleChange = (valor: string) => {
    setRespostas((prev) => {
      const next = [...prev];
      next[index] = valor;
      return next;
    });
    setError("");
  };

  const avancar = () => {
    if (!respostas[index]) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const voltar = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const finalizar = async () => {
    if (!respostas[index]) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }

    try {
      await axios.post("https://backend-projetohomofobia.onrender.com/pesquisa", {
        p1: respostas[0] ?? "",
        p2: respostas[1] ?? "",
        p3: respostas[2] ?? "",
        p4: respostas[3] ?? "",
        p5: respostas[4] ?? "",
        p6: respostas[5] ?? "",
        p7: respostas[6] ?? "",
        p8: respostas[7] ?? "",
        p9: respostas[8] ?? "",
        p10: respostas[9] ?? "",
      });
    } catch (err) {
      console.log(err);
      setError("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="w-[850px] max-sm:w-[90%] border-white border-[2px] rounded-lg flex flex-col items-center p-10 sm:p-16 gap-6 text-white font-bebas-neue">
      <div className="w-full flex flex-col">
        <div className="flex justify-between text-lg max-sm:text-sm">
          <p>Etapa {index + 1} de {perguntas.length}</p>
          <p>{Math.round(progress)}%</p>
        </div>

        <div className="flex w-full h-2 bg-green-400 rounded">
          <div
            className="bg-green-600 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-2xl max-sm:text-lg text-center px-4 leading-relaxed">{perguntas[index]}</p>
      <span className="w-full text-red-500 font-inter text-sm">{error}</span>
      <div className="flex flex-col gap-3 w-full">
        {Object.entries(alternativas[index]).map(([key, value]) => (
          <label
            key={key}
            className={`flex items-center gap-3 text-[1.25rem] max-sm:text-base text-[#B5B5B5] option-label ${respostas[index] === value ? 'active' : ''}`}
          >
            <input
              type="radio"
              value={value}
              name={`pergunta-${index}`}
              checked={respostas[index] === value}
              onChange={() => handleChange(value)}
            />
            {value}
          </label>
        ))}
      </div>
      <div className="flex w-full justify-between pt-8 flex-wrap gap-4">
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-inter font-bold text-lg max-sm:text-base transition"
          onClick={voltar} disabled={index === 0}
        >
          VOLTAR
        </button>

        {index < perguntas.length - 1 ? (
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg max-sm:text-base transition" onClick={avancar}>
            AVANÇAR
          </button>
        ) : (
          <Link to="/finalizada" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-inter font-bold text-lg max-sm:text-base transition">
            <button onClick={finalizar}>
              FINALIZAR
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}