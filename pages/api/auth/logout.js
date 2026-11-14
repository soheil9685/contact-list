import * as cookie from "cookie";

export default async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    try {
        // Set cookie
        res.setHeader(
            "Set-Cookie",
            cookie.stringifySetCookie({
                name: "token",
                value: "",
                httpOnly: true,
                maxAge: 0,
                sameSite: "strict",
                path: "/"
            })
        )

        return res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}