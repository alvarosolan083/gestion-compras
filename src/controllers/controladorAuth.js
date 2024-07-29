const { Usuario } = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};

module.exports = {
    iniciarSesion
};
