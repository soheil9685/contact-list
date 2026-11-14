import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Login({setIsAuth}) {

    const [isLoading , setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    async function loginHandler(event){
        event.preventDefault();

        setIsLoading(true)
        const res = await fetch("/api/auth/login" , {
            method: "POST",
            body: JSON.stringify(formData),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await res.json()
        setIsLoading(false)

        if(res.status == 200){
            toast.success("Loged in successfully")
            setIsAuth(true)
            router.replace("/dashboard")
        }else{
            toast.error(data.message)
        }
    }


    return (
        <section className="h-screen flex justify-center">
            <Toaster />
            <main>
                <form className="bg-[#111C30] p-10 mt-40 rounded-2xl flex flex-col gap-3 w-120">
                    <h1 className="text-4xl inter text-center text-[#F1F5F9]">Login Form</h1>
                    {/* Email */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">Email:</label>
                        <input
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-[#F1F5F9] mb-1">Password:</label>
                        <input
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button onClick={loginHandler} className="col-span-4 border-2 border-[#94A3B8] text-[#F1F5F9] py-2 mt-4 rounded-2xl hover:text-[#0F172A] hover:bg-[#94A3B8] duration-300 flex justify-center gap-3">
                        Login
                        {
                            isLoading ? <LoaderCircle /> : ""
                        }
                    </button>
                    <div className="inter text-center">
                        <span className="text-[#F1F5F9] hover:text-[#]">Not registered? </span>
                        <Link href="/register" className="text-[#94A3B8] hover:underline hover:text-[#F1F5F9] duration-300">
                            Create an account
                        </Link>
                    </div>
                </form>
            </main>
        </section>
    )
}