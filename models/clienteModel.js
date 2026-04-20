const model = require("../models/clienteModel");

exports.index = (req, res) => {
  const clientes = model.listar();
  res.render("clientes/index", { clientes });
};
