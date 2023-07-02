const express = require('express');
const controller = require('./controller');

const app = express();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const authenticated = controller.login(username, password);

  if (authenticated) {
    res.send('Login bem-sucedido');
  } else {
    res.status(401).send('Credenciais inválidas');
  }
});

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});