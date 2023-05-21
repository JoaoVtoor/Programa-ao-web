//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes - 2110972
//20/05/2023

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Definindo modelo para a entidade "Biclicleta"
const Bicicleta = {
  id: Number,
  name: String,
  model: String,
  cicler: { type: Number, ref: "Ciclista" },
  team: [{ type: Number, ref: "Equipe" }],
};

// Definindo modelo para a entidade "Ciclista"
const Ciclista = {
  id: Number,
  name: String,
  bike: [{ type: Number, ref: "Bicicleta" }],
};

// Definindo modelo para a entidade "Equipe"
const Equipe = {
  id: Number,
  name: String,
  classification: String,
  bikers: [{ type: Number, ref: "corredores" }],
};

// Simulando dados das entidades
const bicileta = [
  {
    id: 1,
    name: "bike do jhon",
    model: "Mountain Bike City Tour",
    cicler: 1,
    team: [1],
  },
  {
    id: 2,
    name: "bicicleta offroad",
    model: "Mountain Bike Force",
    cicler: 1,
    team: [1],
  },
];

const Ciclista = [
  { id: 1, name: "Matheus", bike: [1] },
  { id: 2, name: "Rodrigo", bike: [1] },
];

const Equipe = [
  {
    id: 1,
    name: "VelozTech Racing Team",
    classification: "Offroad",
    bikers: [1],
  },
  { id: 2, name: "Cyclone Speedsters", classification: "Race", bikers: [1] },
  { id: 3, name: "SwiftWheel Warriors", classification: "Race", bikers: [2] },
];

// Consulta uma bicicletas e suas informações relacionadas
app.get("/Bicicleta/:id", (req, res) => {
  const Bicicleta = Bicicletas.find((n) => n.id === parseInt(req.params.id));
  if (!Bicicleta) return res.status(404).send("Bicicleta não encontrada");
  const ciclista = ciclistas.find((p) => p.id === Bicicleta.cicler);
  const equipe = team.filter((e) => Bicicleta.team.includes(e.id));
  Bicicleta.cicler = ciclista;
  Bicicleta.team = equipe;
  res.send(Bicicleta);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
