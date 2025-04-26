require('dotenv').config()
const models = require('./models/models')
const express = require('express')
const sequelize  =require('./db')
const PORT = process.env.PORT || 7000

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(e)
    }
}

start()