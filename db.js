const Sequelize = require('sequelize');
const databaseUrl = process.env.DATABASE_URL ||'postgres://postgres:ilkdatabase@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)


db
    .sync()
    .then(() => console.log('Database updated'))
    .catch(console.error)

module.exports = db