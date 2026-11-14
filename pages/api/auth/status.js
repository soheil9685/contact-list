import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(405).json({ message: "Method is not valid" })
    }

    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        verify(token, process.env.JWT_SECRET)
        res.status(200).json({message: "Authenticated"})
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}