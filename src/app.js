const express = require('express');
const dotenv = require('dotenv');
const rutasAuth = require('./routes/rutasAuth');
const autenticar = require('./middlewares/middlewareAuth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Ruta de prueba para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de gestión de compras');
});

// Rutas de autenticación
app.use('/auth', rutasAuth);

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
