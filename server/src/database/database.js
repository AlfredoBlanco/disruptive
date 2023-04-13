const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('disruptive', 'postgres', 'Alfredo', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = {
    sequelize,
}