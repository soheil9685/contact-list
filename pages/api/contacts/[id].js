import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";
import mongoose from "mongoose";

export default async function handler(req , res) {
    // Connecting to DB
    await connectDB();

    // Query
    const {id} = req.query;
    console.log(id)

    // Validation
    let check = mongoose.isValidObjectId(id)

    if(check){
        if(req.method == "DELETE"){
            const result = await Contact.findByIdAndDelete(id)
            if(result){
                res.status(200).json({ message: "Contact deleted successfully" })
            }else{
                res.status(404).json({ message : "Contact not found" })
            }
        }
    }else{
        res.status(404).json({ message : "Contact not found" })
    }
}