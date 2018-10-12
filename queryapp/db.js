const Sequelize = require('sequelize')

const db = new Sequelize('queryapp', 'queryuser', 'pass1', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        min: 0,
        max: 5,
    },
    operatorsAliases: false
})

const Query = db.define('hired', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    qualification: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    percentage:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type:Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    skills: {
        type:Sequelize.DataTypes.STRING,
        allowNull: false,
    }
})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Query
}