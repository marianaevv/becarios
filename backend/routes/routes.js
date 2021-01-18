const express = require("express");
const path = require('path');
const router = express.Router();
const maestro = require("../controllers/maestro");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Maestros', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get("/api/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/api/maestros", async (req, res) => {
  await maestro.getAllMaestros(req, res);
});

router.post("/api/newMaestro", async (req, res) => {
  await maestro.nuevoMaestro(req, res);
});
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/build'));
}
//La ruta no existe
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


module.exports = router;