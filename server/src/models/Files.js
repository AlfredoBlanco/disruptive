const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
/* Ver como guardar los archivos
https://www.youtube.com/watch?v=JVzFNWHMbew&ab_channel=PyarmandoAcademy
 */
const Files = sequelize.define('files', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name : {
        type: DataTypes.B,
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