var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {

  const ensayaderos =
  
  [
  {id:0, nombre: "Hall of Rock", precio: 20000, direccion:"Calle 12A # 32 - 10"},
  {id:1, nombre: "Alta Distorsión", precio: 25000, direccion:"Calle 12A # 32 - 10"},
  {id:2, nombre: "Arbol Naranja", precio: 40000, direccion:"Calle 12A # 32 - 10"},
  {id:3, nombre: "REC", precio: 22000, direccion:"Calle 12A # 32 - 10"}
  ]

  res.json(ensayaderos);
});

module.exports = router;
