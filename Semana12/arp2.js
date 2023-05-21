//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes - 2110972
//20/05/2023

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let appointments = [];

// Cadastrar um Agendamento
app.post("/appointments", (req, res) => {
  const { patientName, date } = req.body;
  const appointment = { patientName, date };
  appointments.push(appointment);
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Listar Agendamentos
app.get("/appointments", (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
