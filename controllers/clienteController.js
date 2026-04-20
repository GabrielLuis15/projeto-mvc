const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/clientes.json");

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados);
}

function listar(req, res) {
  const dados = lerDados();
  res.render("clientes/index", { clientes: dados });
}

module.exports = {
  listar
};