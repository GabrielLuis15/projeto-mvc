const model = require("../models/fornecedorModel");

exports.index = (req, res) => {
  const fornecedores = model.listar();
  res.render("fornecedores/index", { fornecedores });
};
