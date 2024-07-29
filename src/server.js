const express = require('express');
const { connectDB, syncDB } = require('./config/database');
const dotenv = require('dotenv');
const rutasAuth = require('./routes/rutasAuth');
const autenticar = require('./middlewares/middlewareAuth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/auth', rutasAuth);

app.use(autenticar);  // Aplicar autenticación a todas las rutas siguientes

// Aquí irán las demás rutas

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
    connectDB().catch(error => {
        console.error('No se ha podido conectar a la base de datos:', error);
    });
});
