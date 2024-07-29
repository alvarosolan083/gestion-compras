 
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Usuario = require('./Usuario');

const SolicitudCompra = sequelize.define('SolicitudCompra', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    presupuesto: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    argumento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'Pendiente',
    },
}, {
    tableName: 'solicitudes_compra',
    timestamps: true,
});

SolicitudCompra.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(SolicitudCompra, { foreignKey: 'usuarioId' });

module.exports = SolicitudCompra;
