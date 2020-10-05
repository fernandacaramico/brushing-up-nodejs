const Sequelize = require('sequelize')

// conexão com o banco
const sequelize = new Sequelize('DATABASE', 'USUARIO', 'SENHA', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}