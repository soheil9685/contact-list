import Navbar from "@/Components/Navbar/Navbar";
import User from "@/models/User";
import connectDB from "@/uitls/connectDB";
import tokenValidation from "@/uitls/tokenValidation";
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

    const payload = tokenValidation(context);

    if(!payload){
        return {
            redirect : {
                destination : "/login"
            }
        }
    }

    // Connect to DB
    await connectDB();

    const user = await User.findOne({ email: payload.email }).select("firstName lastName role")

    return {
        props: {
            user: JSON.parse(JSON.stringify(user))
        }
    }
}