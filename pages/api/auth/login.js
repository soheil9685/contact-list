import User from "@/models/User";
import connectDB from "@/uitls/connectDB";
import tokenValidation from "@/uitls/tokenValidation";
import bcrypt from "bcrypt"
const jwt = require("jsonwebtoken")
import * as cookie from "cookie";

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
        const token = jwt.sign({userId: isUserExist._id , email: isUserExist.email, role: isUserExist.role }, process.env.JWT_SECRET, {
            expiresIn: "7day"
        })

        // Set cookie
        res.setHeader(
            "Set-Cookie",
            cookie.stringifySetCookie({
                name: "token",
                value: token,
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60,
                sameSite: "strict",
                path: "/"
            })
        )

        res.status(200).json({ message: "Loged in successfully" })
    } catch (error) {
        res.status(500).json({ message: "Server error" , error})
        console.log(error)
    }
}

export async function getServerSideProps(context) {
    const payload = tokenValidation(context);

    if(payload){
        return {
            redirect: {
                destination: "/dashboard"
            }
        }
    }

    return {
        props : {}
    }
}