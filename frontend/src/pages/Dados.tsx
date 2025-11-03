import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Header } from "../components/Header";

type Answer = {
  name: string;
  value: number;
  color: string;
};

type QuestionData = {
  id: number;
  question: string;
  totalRespostas: number;
  moda: string;
  mediana: string;
  medianaPercent: string;
  data: Answer[];
};

export const Dados = () => {
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([]);

  useEffect(() => {
    axios
      .get<QuestionData[]>("https://backend-projetohomofobia.onrender.com/pesquisa")
      .then((res) => {
        const normalized = (res.data || []).map((q) => ({
          ...q,
          totalRespostas: Number(q.totalRespostas) || 0,
          medianaPercent: q.medianaPercent ?? "0.0",
          data: (q.data || []).map((d: any) => ({
            name: d.name,
            value: Number(d.value) || 0,
            color: d.color || "#888888",
          })),
        }));
        setQuestionsData(normalized);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white">
      <Header map="statistic" />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Resultados da Pesquisa sobre Homofobia</h1>
            <p className="text-gray-400 text-sm">Dados consolidados de todas as respostas enviadas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {questionsData.map((q) => {
              const total = q.totalRespostas || 0;
              return (
                <div key={q.id} className="bg-[#161920] border border-red-500 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">{q.id}. {q.question}</h3>

                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="text-gray-400">TOTAL DE RESPOSTAS</p>
                      <p className="text-lg font-bold text-red-400">{total}</p>
                    </div>

                    <div>
                      <p className="text-gray-400">MODA</p>
                      <p className="text-lg font-bold text-yellow-400">{q.moda ?? "—"}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-400">MEDIANA</p>
                      <p className="text-lg font-bold text-green-400">
                        {q.mediana ?? "—"} {q.mediana && `(${q.medianaPercent ?? "0.0"}%)`}
                      </p>
                    </div>
                  </div>
                  {q.data.map((d) => {
                    const percent = total === 0 ? 0 : ((d.value / total) * 100);
                    const percentText = Number.isFinite(percent) ? percent.toFixed(1) : "0.0";
                    return (
                      <div key={d.name} className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{d.name}</span>
                          <span className="font-semibold text-white">{percentText}%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentText}%` }}
                            transition={{ duration: 0.6 }}
                            className="h-2 rounded-full"
                            style={{ backgroundColor: d.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-400">
                    {q.data.map((d) => (
                      <div key={d.name} className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                        <span>{d.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dados;
