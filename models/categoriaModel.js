const model = require("../models/categoriaModel");

exports.index = (req, res) => {
  const categorias = model.listar();
  res.render("categorias/index", { categorias });
};
