import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Pesquisa } from "./models/Pesquisa.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.post("/pesquisa", async (req, res) => {
  try {
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = req.body;

    const newSearch = new Pesquisa({
      p1: p1 || "",
      p2: p2 || "",
      p3: p3 || "",
      p4: p4 || "",
      p5: p5 || "",
      p6: p6 || "",
      p7: p7 || "",
      p8: p8 || "",
      p9: p9 || "",
      p10: p10 || "",
    });

    await newSearch.save();
    res.status(201).json({ message: "Pesquisa salva com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar pesquisa:", error);
    res.status(500).json({
      message: "Erro interno ao salvar pesquisa",
      error: error.message,
    });
  }
});
app.get("/pesquisa", async (req, res) => {
  try {
    const pesquisas = await Pesquisa.find();
    const estatisticas = {};

    // Contagem das respostas
    pesquisas.forEach((doc) => {
      Object.entries(doc.toObject()).forEach(([key, value]) => {
        if (key.startsWith("p")) {
          const v = (value ?? "").toString();
          if (!estatisticas[key]) estatisticas[key] = {};
          if (!estatisticas[key][v]) estatisticas[key][v] = 0;
          estatisticas[key][v]++;
        }
      });
    });

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

    const colorMap = {
      Sim: "#ef4444",
      Não: "#facc15",
      "Não sei": "#22c55e",
      Talvez: "#3b82f6",
      "Falta de informação": "#ef4444",
      "Influência religiosa": "#f59e0b",
      "Mídia": "#0ea5e9",
      "Outros": "#a855f7",
    };

    const questionsData = Object.entries(estatisticas).map(([key, respostas], i) => {
      const data = Object.entries(respostas).map(([name, value]) => ({
        name,
        value: Number(value) || 0,
        color: colorMap[name] || "#888888",
      }));

      const total = data.reduce((s, d) => s + d.value, 0);
      let modaName = "—";
      if (data.length > 0) {
        const moda = data.reduce((a, b) => (a.value >= b.value ? a : b), data[0]);
        modaName = moda.name;
      }
      let medianaName = "—";
      let medianaPercent = 0;
      if (data.length > 0 && total > 0) {
        let acumulado = 0;
        for (const d of data) {
          acumulado += (d.value / total) * 100;
          if (acumulado >= 50) {
            medianaName = d.name;
            medianaPercent = ((d.value / total) * 100);
            break;
          }
        }
      }

      return {
        id: i + 1,
        question: perguntas[i] ?? `Pergunta ${i + 1}`,
        totalRespostas: total,
        moda: modaName,
        mediana: medianaName,
        medianaPercent: Number.isFinite(medianaPercent)
          ? medianaPercent.toFixed(1)
          : "0.0",
        data,
      };
    });

    res.json(questionsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao gerar estatísticas", error: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));