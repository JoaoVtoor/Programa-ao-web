// Model de usuários
const users = [
    {
      username: 'admin',
      password: 'password123',
    },
    // Adicione mais usuários aqui
  ];
  
  // Função para buscar usuário por credenciais
  function findByCredentials(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }
  
  module.exports = {
    findByCredentials
  };