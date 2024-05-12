import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



// app config
const app = express();
const PORT = 4000;


//middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB();


// api endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads '))



app.get('/', (req,res)=>{
    res.send("Kuch bhi return karde")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})

// mongodb+srv://admin:admin123@cluster0.sxvmywr.mongodb.net/?
 
