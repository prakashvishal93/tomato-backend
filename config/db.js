import mongoose from 'mongoose'

export const connectDB = async () =>{
    await  mongoose.connect('mongodb+srv://admin:admin123@cluster0.sxvmywr.mongodb.net/food-del').then(()=>{
         console.log("DB Connected");
    })
}