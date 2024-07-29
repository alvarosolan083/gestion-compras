const express = require('express');
const { iniciarSesion, registrarse } = require('../controllers/controladorAuth');
const router = express.Router();

// Ruta de prueba para login con GET
router.get('/login', (req, res) => {
    res.send('Ruta de prueba para login');
});

router.post('/login', iniciarSesion);
// router.post('/register', registrarse); // No necesitamos el registro para los usuarios

module.exports = router;
