import User from "@/models/User";
import connectDB from "@/uitls/connectDB";

export default async function handler(req , res) {

    // Connect to DB
    await connectDB();

    if(req.method != "POST"){
        return res.status(405).json({message : "Method is not allowed"})
    }

    // Validation
    const {firstName , lastName , email , password} = req.body;
    if(!firstName || !lastName || !email || !password){
        return res.status(422).json({message : "Fill all fields"})
    }

    // Check if email exists
    const isUserExist = await User.findOne({ email })
    if(isUserExist){
       return res.status(409).json({message : "There is an user with this email"}) 
    }

    await User.create(req.body)
    res.status(201).json({ message : "User registered successfully"})
}