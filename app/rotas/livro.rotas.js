module.exports = app => {
const livros = require("../controladores/livro.controlador.js");

var router = require("express").Router();

//cria um novo livro
router.post("/", livros.create);

//recupera todos os livros
router.get("/", livros.findAll);

//recupera todos os livros emprestados
router.get("/emprestado", livros.findAllEmprestado);

//recupera um livro com ID
router.get("/:id", livros.findOne);

//atualiza um livro com a ID
router.put("/:id", livros.update);

//deleta um livro com a ID
router.delete("/:id", livros.delete);

//deleta todos os livros
router.delete("/", livros.deleteAll);

app.use('/api/livros', router);
};