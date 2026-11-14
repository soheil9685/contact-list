import { ContactRound, House, LayoutDashboard, LogIn, LogOut, Plus} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar(isAuth , setIsAuth) {

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    
    async function logOutHandler(){
        const res = await fetch("/api/auth/logout")
        const data = await res.json()
        
        console.log(data)

        if(res.status == 200){
            toast.success(data.message)
            setIsAuth(false)
            router.replace("/login")
        }else{
            toast.error(data.message)
        }
    }

    return (
        <nav className="m-3 sticky w-70">
            <Toaster />
            <div className={`bg-[#1E293B] h-200 p-3 rounded-lg ${isOpen ? "w-70" : "w-14 flex justify-center"} duration-500`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <div className="flex justify-between mb-7">
                    <h1 className={`inter text-[#F1F5F9] text-2xl ${isOpen ? " " : "hidden"}`}>Contact App</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <Link className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/">
                        <House />
                        <span className={`${isOpen ? " " : "hidden"}`}>
                            Home Page
                        </span>
                    </Link>

                    {
                        isAuth ? (
                            <Link onClick={logOutHandler} className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/login">
                                <LogOut />
                                <span className={`${isOpen ? " " : "hidden"}`}>
                                    Logout
                                </span>
                            </Link>
                        ) : (
                            <Link className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/login">
                                <LogIn />
                                <span className={`${isOpen ? " " : "hidden"}`}>
                                    Login
                                </span>
                            </Link>
                        )
                    }

                    {
                        isAuth ? (
                            <Link className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/contacts">
                                <ContactRound />
                                <span className={`${isOpen ? " " : "hidden"}`}>
                                    Contacts
                                </span>

                            </Link>
                        ) : " "
                    }
                    {
                        isAuth ? (
                            <Link className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/add-contact">
                                <Plus />
                                <span className={`${isOpen ? " " : "hidden"}`}>
                                    Add Contact
                                </span>
                            </Link>
                        ) : " "
                    }

                    {
                        isAuth ? (
                            <Link className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/dashboard">
                                <LayoutDashboard />
                                <span className={`${isOpen ? " " : "hidden"}`}>
                                    Dashboard
                                </span>
                            </Link>
                        ) : " "
                    }

                </div>
            </div>
        </nav>
    )
}