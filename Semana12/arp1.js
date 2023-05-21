//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes - 2110972
//20/05/2023

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let patients = [];

// Cadastrar pacientes
app.post("/patients", (req, res) => {
  const { name, age, gender } = req.body;
  const patient = { name, age, gender };
  patients.push(patient);
  res.status(201).send(`Paciente ${name} cadastrado com sucesso.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
