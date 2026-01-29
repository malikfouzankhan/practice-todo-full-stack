import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log('Failed to connect to DB');
    }
}

dbConnect();