const server = require('./src/app.js')
const { PORT } = require('./config.js');
const { sequelize } = require('./src/database/database.js');
require('dotenv').config()
require('./src/models/User.js');
require('./src/models/Theme.js');

sequelize.sync()
server.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})