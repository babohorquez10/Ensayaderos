var express = require('express');
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

async function getData () {
  const client = new MongoClient(url);

  await client.connect();

  const db = client.db("data");
  const colEnsayaderos = db.collection("ensayaderos");

  const ensayaderos = await colEnsayaderos.find({}).toArray();

  client.close();

  return ensayaderos;
}

/* GET home page. */
router.get('/data', async (req, res, next) => {

  const ensayaderos = await getData();
  res.json(ensayaderos);
});

module.exports = router;
