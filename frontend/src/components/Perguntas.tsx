import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Perguntas({ onVoltar }: { onVoltar: () => void }) {
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
    "Você acredita que as pessoas LGBTQIAP+ têm os mesmos direitos respeitados que os demais cidadãos?"
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
    { q1: "Sim", q2: "Não", q3: "Em parte" }
  ];

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [resposta, setResposta] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(10);
  const [i, setI] = useState(1);
  const [respostas, setRespostas] = useState<string[]>([]);

  const voltar = () => {
    if (index >= 1) {
      const nextIndex = index - 1;
      const nextI = i - 1;
      setIndex(nextIndex);
      setI(nextI);
      setProgress(nextI * 10);
      setResposta(respostas[nextIndex] ?? "");
      setError("");
    } else {
      onVoltar();
    }
  };

  const avancar = () => {
    if (!resposta) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }

    setRespostas((prev) => {
      const next = [...prev];
      next[index] = resposta;
      return next;
    });

    const nextIndex = index + 1;
    const nextI = i + 1;
    setIndex(nextIndex);
    setI(nextI);
    setProgress(nextI * 10);
    setResposta("");
    setError("");
  };

  const finalizar = async () => {
    if (!resposta && respostas[index] === undefined) {
      setError("Por favor, selecione uma alternativa para continuar.");
      return;
    }

    const todas = [...respostas];
    todas[index] = resposta || todas[index];

    try {
      await axios.post("http://localhost:3000/pesquisa", {
        p1: todas[0] ?? "",
        p2: todas[1] ?? "",
        p3: todas[2] ?? "",
        p4: todas[3] ?? "",
        p5: todas[4] ?? "",
        p6: todas[5] ?? "",
        p7: todas[6] ?? "",
        p8: todas[7] ?? "",
        p9: todas[8] ?? "",
        p10: todas[9] ?? "",
      });

      console.log("Pesquisa enviada com sucesso!");
      navigate("/finalizada");
    } catch (err) {
      console.error("Erro ao enviar pesquisa:", err);
      setError("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="w-[850px] h-full border-white border-[2px] rounded-lg flex flex-col items-center p-14 gap-6 text-white font-bebas-neue">
      <div className="h-full w-full flex flex-col justify-start gap-10">
        <div className="flex flex-col w-full h-auto">
          {(index <= 9) && (
            <div className="flex justify-between text-lg">
              <p>Etapa {i} de {perguntas.length}</p>
              <p>{progress}%</p>
            </div>
          )}
          <div className="flex w-full h-2 bg-green-400 rounded">
            {(index <= 9) && (
              <div
                className="bg-green-600 rounded"
                style={{ width: i < 10 ? `${progress}%` : "100%" }}
              />
            )}
          </div>
        </div>

        <p className="text-2xl w-full text-center">{perguntas[index]}</p>
        <span className="w-full text-red-500 font-inter">{error}</span>

        <div className="flex flex-col gap-3 w-full h-48 justify-start">
          {alternativas[index] && Object.entries(alternativas[index]).map(([key, value]) => (
            <label key={key} className="flex items-center gap-2 text-2xl text-[#B5B5B5] radio">
              <input
                type="radio"
                value={value}
                name={`pergunta-${index}`}
                checked={resposta === value || respostas[index] === value}
                onChange={(e) => setResposta(e.target.value)}
              />
              {value}
            </label>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between h-12">
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={voltar}>VOLTAR</button>

        {index < 9 && (
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-inter font-bold text-lg" onClick={avancar}>AVANÇAR</button>
        )}

        {index === 9 && (
          <Link to="/finalizada">
            <button onClick={finalizar} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-inter font-bold text-lg">FINALIZAR</button>
          </Link>
        )}
      </div>
    </div>
  );
}
