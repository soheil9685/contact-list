import Navbar from "@/Components/Navbar/Navbar";
import User from "@/models/User";
import connectDB from "@/uitls/connectDB";
import { verify } from "jsonwebtoken";

export default function Dashboard({ user }) {
    return (
        <section className="h-screen flex justify-start">
            <Navbar />
            <div className="flex flex-col justify-start items-center w-full mt-20 text-4xl inter text-[#F1F5F9]">
                <h1>Hi {user.firstName} {user.lastName}!</h1>
                <h2>Welcome to dashboard</h2>
            </div>

        </section>
    )
}

export async function getServerSideProps(context) {

    // Token in request header
    const { token } = context.req.cookies

    // Check if token exists
    if (!token) {
        return {
            redirect: {
                destination: "/login"
            }
        }
    }

    // Verify token
    let tokenPayload = null;
    try {
        tokenPayload = verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log(error)
    }

    // Connect to DB
    await connectDB();

    const user = await User.findOne({ email: tokenPayload.email }).select("firstName lastName role")

    return {
        props: {
            user: JSON.parse(JSON.stringify(user))
        }
    }
}