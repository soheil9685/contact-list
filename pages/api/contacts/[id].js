import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";
import mongoose from "mongoose";

export default async function handler(req, res) {
    // Connecting to DB
    await connectDB();

    // Query
    const { id } = req.query;

    // Validation
    let check = mongoose.isValidObjectId(id)

    if (check) {
        if (req.method == "DELETE") {
            const result = await Contact.findByIdAndDelete(id)
            if (result) {
                res.status(200).json({ message: "Contact deleted successfully" })
            } else {
                res.status(404).json({ message: "Contact not found" })
            }
        } else if (req.method == "PUT") {
            try {
                await Contact.findByIdAndUpdate(id, req.body);
                res.status(200).json({ message: "Contact updated successfully" })
            }catch(error){
                res.status(400).json({ message : "Updating faild" })
            }
        }
    } else {
        res.status(404).json({ message: "Contact not found" })
    }
}