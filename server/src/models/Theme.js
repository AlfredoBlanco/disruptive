const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const Theme = sequelize.define('theme', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name : {
        type: DataTypes.STRING,
        unique: true,
        require: true,
    },
    image : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    video : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    text : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

})

module.exports = Theme