import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/router.js'

dotenv.config()

const app = express()

const PORT = 8000

app.use(express.json())
app.use(cors())
app.use('/api',router)

let URL = process.env.CONNECTION_URL

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB successfully!");
    app.listen(PORT, () => {
      console.log(`The server is running on ${PORT}`);
    });
  });
  
  mongoose.connection.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  
  mongoose.connect(URL);

app.get('/',(req,res)=>{
    res.send({msg : 'Hi i am running on home'})
})


