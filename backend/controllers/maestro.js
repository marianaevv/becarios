const app = require("../app");
const maestroModel = require("../models/maestroModel");

const getAllMaestros = async function (req, res) {
  const maestros = await maestroModel.find({});
  return res.status(200).send({
    maestros
  })
};

const nuevoMaestro = async function (req, res) {
  const maestro = new maestroModel();
  maestro.nombre = req.body.nombre;
  maestro.nomina = req.body.nomina;
  maestro.correo = req.body.correo;
  maestro.alumnos.alumno1 = req.body.alumno1;
  maestro.alumnos.matricula1 = req.body.matricula1;
  maestro.alumnos.alumno2 = req.body.alumno2;
  maestro.alumnos.matricula2 = req.body.matricula2;
  maestro.alumnos.alumno3 = req.body.alumno3;
  maestro.alumnos.matricula3 = req.body.matricula3;
  maestro.alumnos.alumno4 = req.body.alumno4;
  maestro.alumnos.matricula4 = req.body.matricula4;
  maestro.alumnos.alumno5 = req.body.alumno5;
  maestro.alumnos.matricula5 = req.body.matricula5;
  maestro.alumnos.alumno6 = req.body.alumno6;
  maestro.alumnos.matricula6 = req.body.matricula6;
  maestro.alumnos.alumno7 = req.body.alumno7;
  maestro.alumnos.matricula7 = req.body.matricula7;
  maestro.alumnos.alumno8 = req.body.alumno8;
  maestro.alumnos.matricula8 = req.body.matricula8;
  maestro.comentarios = req.body.comentarios;
  try {
    await maestro.save();
    return res.status(201).send(maestro);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  getAllMaestros: getAllMaestros,
  nuevoMaestro: nuevoMaestro,
};