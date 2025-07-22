import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose"
import express from "express"
import {DB_NAME} from "./constants.js"
const url=process.env.MONGODB_URL
const port = process.env.PORT || 6421

const app = express()

const connectDB = async() => {
    try {
        const connectionVar = await mongoose.connect(`${url}/${DB_NAME}`)
        console.log(`DB connected, hosting from ${connectionVar.connection.host}`)
        app.on("error",(err)=>{
            console.log("Error Found: ",err)
        })

        app.get("/",(req,res)=>{
            res.send("Welcome to the Test Page")
        })

        app.listen(port,(req,res)=>{
            console.log(`Server listening on: http://localhost:${port}`)
        })

    } catch (error) {
        console.log("DB connection failed",error.message)
        process.exit(1)
    }
}

connectDB()
