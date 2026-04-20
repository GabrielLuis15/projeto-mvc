const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/categorias.json");

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados);
}

function listar(req, res) {
  const dados = lerDados();
  res.render("categorias/index", { categorias: dados });
}

module.exports = {
  listar
};