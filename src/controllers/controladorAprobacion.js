 
const { Aprobacion } = require('../models/Aprobacion');

const obtenerAprobaciones = async (req, res) => {
    try {
        const aprobaciones = await Aprobacion.findAll();
        res.json(aprobaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener aprobaciones', error });
    }
};

const crearAprobacion = async (req, res) => {
    try {
        const nuevaAprobacion = await Aprobacion.create(req.body);
        res.json(nuevaAprobacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la aprobación', error });
    }
};

module.exports = {
    obtenerAprobaciones,
    crearAprobacion,
};
