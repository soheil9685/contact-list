import ContactBox from "@/Components/Contact/ContactBox";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";
import { useState } from "react";

export default function Contacts({ contactsList }) {

    let [contacts, setContacts] = useState(contactsList)
    const [key, setKey] = useState("");
    const [gender, setGender] = useState("");

    async function searchHandler() {
        const res = await fetch(`/api/contacts?key=${key}&gender=${gender}`)
        const data = await res.json()
        setContacts(data)
    }

    return (
        <section className="flex items-start">
            <Navbar />
            <main className="grid grid-cols-4 gap-4 mt-3 w-full">
                <div className="col-span-4 text-center text-[#F1F5F9]">
                    <input onChange={(e) => setKey(e.target.value)} className="w-70 border rounded-4xl text-md px-3 py-2 border-[#94A3B8]" type="text" placeholder="Search first name, last name or ...." />
                    <select onChange={(e) => setGender(e.target.value)} className="px-3 py-2 border border-[#94A3B8] rounded-4xl mx-3 text-md">
                        <option value="all" selected>all</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <button onClick={searchHandler} className="cursor-pointer px-3 py-2 border border-[#94A3B8] rounded-4xl text-md hover:bg-[#94A3B8] hover:text-[#0B1120] duration-500"> Search </button>
                </div>
                <div className="grid grid-cols-4 col-span-4 gap-4">
                    {contacts.length > 0 &&
                        contacts.map((contact) => <ContactBox key={contact._id} {...contact} />)
                    }
                    {contacts.length == 0 &&
                        <h2 className="col-span-4 justify-self-center py-2 px-5 bg-[#111C30] text-[#F1F5F9] border-2 border-[#263449] rounded-lg">No contact found...!</h2>
                    }
                </div>
            </main>
        </section>
    )
}

export async function getServerSideProps() {

    await connectDB();
    let contacts = await Contact.find().lean(); // Convert MongoDB object to js object

    return {
        props: { contactsList: JSON.parse(JSON.stringify(contacts)) }
    }

}