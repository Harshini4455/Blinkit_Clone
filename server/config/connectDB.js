import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
if(!process.env.MONGODB_URI){
    throw new Error(
        "Provide Mongo URI"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connectDB")
    }catch(error){
        console.log("Mongo Connection error: ", error)
        process.exit(1)
    }
}

export default connectDB