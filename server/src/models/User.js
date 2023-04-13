const { sequelize } = require('../database/database');
const { DataTypes } = require('sequelize')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username : {
        type: DataTypes.STRING,
        unique: true,
        require: true,
    },
    email: {
        type : DataTypes.STRING,
        unique: true,
        require: true,
    },
    role : {
        type: DataTypes.INTEGER,
        require: true,
    },

})

module.exports = User