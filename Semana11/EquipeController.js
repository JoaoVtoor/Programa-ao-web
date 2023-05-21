//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes -2110972
//DATA: 10/05/2023
class EquipeController {
    // Método para listar todas as equipes
    async listar(req, res) {
      try {
        const equipes = await Equipe.find();
        return res.json(equipes);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar equipes.' });
      }
    }
  
    // Método para criar uma nova equipe
    async criar(req, res) {
      try {
        const { nome, pais } = req.body;
        const equipe = await Equipe.create({ nome, pais });
        return res.json(equipe);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar equipe.' });
      }
    }
  
    // Método para atualizar uma equipe existente
    async atualizar(req, res) {
      try {
        const { id } = req.params;
        const { nome, pais } = req.body;
        const equipe = await Equipe;
      }
    }
}
  