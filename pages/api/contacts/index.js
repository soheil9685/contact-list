import Contact from "@/models/Contact"
import User from "@/models/User";
import connectDB from "@/uitls/connectDB"

export default async function handler(req, res) {
    // Connect to DB
    await connectDB();

    if (req.method == "GET") {      // ===== GET =====
        let contacts = null;
        let { gender, key , userId } = req.query;

        contacts = await Contact.find(generateFilter(gender , key , userId)).populate("userId" , "-password -role -__v")

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

function generateFilter(gender, key , userId){
    let filter = {userId}

    if(gender){
        filter.gender = gender;
    }
    if(key){
        filter.$or = [{firstName : key} , {lastName: key}];
    }

    return filter;
}