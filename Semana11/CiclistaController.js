//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: João Vitor de Pina Menezes -2110972
//DATA: 10/05/2023

class CiclistaController {
  // Método para listar todos os ciclistas
  async listar(req, res) {
    try {
      const ciclistas = await Ciclista.find();
      return res.json(ciclistas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar ciclistas." });
    }
  }

  // Método para criar um novo ciclista
  async criar(req, res) {
    try {
      const { nome, idade, equipeId } = req.body;
      const ciclista = await Ciclista.create({ nome, idade, equipeId });
      return res.json(ciclista);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar ciclista." });
    }
  }

  // Método para atualizar um ciclista existente
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, idade, equipeId } = req.body;
      const ciclista = await Ciclista.findByIdAndUpdate(
        id,
        { nome, idade, equipeId },
        { new: true }
      );
      return res.json(ciclista);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar ciclista." });
    }
  }

  // Método para excluir um ciclista
  async excluir(req, res) {
    try {
      const { id } = req.params;
      await Ciclista.findByIdAndDelete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao excluir ciclista." });
    }
  }
}
