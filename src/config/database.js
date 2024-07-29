const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Añadir esta línea para especificar el puerto
    dialect: 'mysql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('La conexión se ha establecido correctamente.');
    } catch (error) {
        console.error('No se ha podido conectar a la base de datos:', error);
    }
};

const syncDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Todos los modelos se han sincronizado correctamente.');
    } catch (error) {
        console.error('Error sincronizando modelos:', error);
    }
};

module.exports = { sequelize, connectDB, syncDB };
