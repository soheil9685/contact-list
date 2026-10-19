import Contact from "@/models/Contact"
import connectDB from "@/uitls/connectDB"

export default async function handler(req, res) {
    // Connect to DB
    await connectDB();

    let contacts = null;

    if (req.method == "GET") {
        contacts = await Contact.find()
        res.status(200).json(contacts)
    }
}