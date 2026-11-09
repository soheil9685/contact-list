import User from "@/models/User";
import connectDB from "@/uitls/connectDB";
import bcrypt from "bcrypt"
const jwt = require("jsonwebtoken")

export default async function handler(req, res) {

    // Connect to DB
    await connectDB();

    if (req.method != "POST") {
        return res.status(405).json({ message: "Method is not allowed" })
    }

    try {
        // Validation
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ message: "Fill all fields" })
        }

        // Email validation
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!emailRegex.test(email)) {
            return res.status(422).json({ message: "Email is not valid" })
        }

        // Check if email exists
        const isUserExist = await User.findOne({ email })
        if (!isUserExist) {
            return res.status(401).json({ message: "Email or password is invalid" })
        }

        // Compare password
        const isValidPass = await bcrypt.compare(password, isUserExist.password)
        if (!isValidPass) {
            return res.status(401).json({ message: "Email or password is invalid" })
        }

        // Generate a token
        const token = jwt.sign({email : isUserExist.email , role: isUserExist.role} , process.env.JWT_SECRET , {
            expiresIn: "10min"
        })

        res.status(200).json({message : "Loged in successfully" , token})
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}