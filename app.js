const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const notFound = require('./middleware/notfound')
const errorHandlerMiddlwWare = require('./middleware/errorhandler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddlwWare)



const port = process.env.PORT || 3000;



const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}....`))

    }catch(error){
        console.log("CANT CONNECT TO THE DATABASE")
    }
}


start()