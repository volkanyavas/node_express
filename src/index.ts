const express = require("express")
import knexfile from "./knexfile"
import userRouter from './routes/user'
const app = express()

app.use(express.json())
const knex = require('knex')(knexfile["development"])

app.use('/user',userRouter)

app.listen(5000, () => {
    console.log("server running port 5000")
})
