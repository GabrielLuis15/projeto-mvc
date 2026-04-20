const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/fornecedores.json");

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados);
}

function listar(req, res) {
  const dados = lerDados();
  res.render("fornecedores/index", { fornecedores: dados });
}

module.exports = {
  listar
};