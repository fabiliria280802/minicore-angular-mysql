const mysql = require ('mysql2');

const {Sequelize,Op} = require('sequelize')

const sequelize = new Sequelize('db_a93931_mini', 'a93931_mini', 'Arrugasbb248816*', {
    host: 'MySQL80.site4now.net',
    dialect: 'mysql',
    logging: false
})

sequelize.sync(/*{ force: true }*/)
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = {sequelize,Sequelize,Op}