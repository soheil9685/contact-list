import { ContactRound, House, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="m-3 sticky">
            <div className={`bg-[#1E293B] h-200 p-3 rounded-lg ${isOpen ? "w-70" : "w-14"} duration-500`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <div className="flex justify-between mb-7">
                    <h1 className={`inter text-[#F1F5F9] text-2xl ${isOpen ? " " : "hidden"}`}>Contact App</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <a className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/">
                        <House />
                        <span className={`${isOpen ? " " : "hidden"}`}>
                            Home Page
                        </span>
                    </a>
                    <a className={`text-[#94A3B8] hover:text-[#F1F5F9] hover:text-shadow-lg/10 hover:text-shadow-[#F1F5F9] duration-300 inter text-md flex gap-2`} href="/contacts">
                        <ContactRound  />
                        <span className={`${isOpen ? " " : "hidden"}`}>
                            Contacts
                        </span>
                        
                    </a>
                </div>
            </div>
        </nav>
    )
}