import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Login() {
    return (
        <section className="h-screen flex justify-center">
            <main>
                <form className="bg-[#111C30] p-10 mt-40 rounded-2xl flex flex-col gap-3">
                    <h1 className="text-4xl inter text-center text-[#F1F5F9]">Login Form</h1>
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
                        Login
                    </Link>
                    <div className="inter">
                        <span className="text-[#F1F5F9] hover:text-[#]">Not registered? </span>
                        <Link href="/" className="text-[#94A3B8] hover:underline hover:text-[#F1F5F9] duration-300">
                            Create an account
                        </Link>
                    </div>
                </form>
            </main>
        </section>
    )
}