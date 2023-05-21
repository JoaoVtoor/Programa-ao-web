const mongoose = require("mongoose");
//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes -2110972
//DATA: 10/05/2023

const ciclistaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  equipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipe",
  },
});

const Ciclista = mongoose.model("Ciclista", ciclistaSchema);

module.exports = Ciclista;
