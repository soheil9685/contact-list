import mongoose from "mongoose";

export default async function connectDB() {
    try {
        if (mongoose.connections[0].readyState) return
        await mongoose.connect("mongodb://localhost:27017/")
        console.log("Connect to DB successfully")
    } catch (err) {
        console.log("Connection faild")
    }
}