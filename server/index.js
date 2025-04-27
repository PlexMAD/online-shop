require('dotenv').config()
const models = require('./models/models')
const express = require('express')
const sequelize  =require('./db')
const PORT = process.env.PORT || 7000
const cors =  require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const app = express()
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

