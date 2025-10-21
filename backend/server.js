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
    const {p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = req.body;

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));