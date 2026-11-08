import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Login() {
    return (
        <section className="h-screen flex justify-center">
            <main>
                <form className="bg-[#111C30] p-10 mt-40 rounded-2xl flex flex-col gap-3 w-120">
                    <h1 className="text-4xl inter text-center text-[#F1F5F9]">Register Form</h1>
                    {/* First Name */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">First Name:</label>
                        <input
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">Last Name:</label>
                        <input
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">Email:</label>
                        <input
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">Password:</label>
                        <input
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <Link href="/" className="col-span-4 border-2 border-[#94A3B8] text-[#F1F5F9] py-2 mt-4 rounded-2xl hover:text-[#0F172A] hover:bg-[#94A3B8] duration-300 flex justify-center gap-3">
                        Register
                    </Link>
                    <div className="inter text-center">
                        <span className="text-[#F1F5F9] hover:text-[#]">Already registered? </span>
                        <Link href="/login" className="text-[#94A3B8] hover:underline hover:text-[#F1F5F9] duration-300">
                            Login
                        </Link>
                    </div>
                </form>
            </main>
        </section>
    )
}