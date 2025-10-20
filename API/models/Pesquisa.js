import mongoose from "mongoose";

const pesquisaSchema = new mongoose.Schema({
  faixa_etaria: String,
  p1: String,
  p2: String,
  p3: String,
  p4: String,
  p5: String,
  p6: String,
  p7: String,
  p8: String,
  p9: String,
  p10: String
});

export const Pesquisa = mongoose.model("Pesquisa", pesquisaSchema);