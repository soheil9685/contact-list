import Contact from "@/models/Contact"
import connectDB from "@/uitls/connectDB"

export default async function handler(req, res) {
    // Connect to DB
    await connectDB();

    if (req.method == "GET") {      // ===== GET =====
        let contacts = null;
        let { gender, key } = req.query;


        if (gender && key) {
            if (gender == "male" || gender == "female") {
                contacts = await Contact.find({
                    $and: [{ gender }, { $or: [{ firstName: key }, { lastName: key }] }]
                })
            } else {
                contacts = await Contact.find({
                    $or: [{ firstName: key }, { lastName: key }]
                })
            }
        } else if (gender) {
            if (gender == "male" || gender == "female") {
                contacts = await Contact.find({ gender })
            } else {
                contacts = await Contact.find()
            }
        } else if (key) {
            contacts = await Contact.find({
                $or: [{ firstName: key }, { lastName: key }]
            })
        } else {
            contacts = await Contact.find()
        }

        res.status(200).json(contacts)

    } else if (req.method == "POST") {      // ===== POST =====
        try {
            await Contact.create(req.body)
            res.status(200).json({ message: "Contact added successfully" })
        } catch (error) {
            res.status(422).json({ message: "Something went wrong" })
        }

    }
}