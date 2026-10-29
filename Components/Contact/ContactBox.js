import { SquarePen, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactBox({ _id, firstName, lastName, gender, age, phone }) {
    return (
        <div className="bg-[#111C30] p-4 rounded-lg overflow-hidden w-80 border-2 border-[#94A3B8] grid grid-cols-12 items-center">
            <span className="flex items-center gap-2 mb-5 col-span-12">
                <Image src="/assets/images/profile.png" width={30} height={30} alt="contact image" />
                <h2 className="text-[#818CF8] inter text-lg">
                    {firstName} {lastName}
                </h2>
            </span>
            <span className="text-[#F1F5F9] inter text-sm col-span-11">
                <p>Gender : {gender}</p>
                <p>Age : {age}</p>
                <p>Phone : {phone}</p>
            </span>
            <span className="text-[#F1F5F9] col-span-1 grid gap-2">
                <button>
                    <Trash className="hover:text-[#dc2626] duration-300 cursor-pointer" />
                </button>
                <Link href={`/edit-contact/${_id}`}>
                    <SquarePen className="hover:text-[#94A3B8] duration-300 cursor-pointer" />
                </Link>
            </span>
        </div>
    )
}