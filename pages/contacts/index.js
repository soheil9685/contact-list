import ContactBox from "@/Components/Contact/ContactBox";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";

export default function Contacts({ contacts }) {

    return (
        <section className="flex items-start">
            <Navbar />
            <main className="grid grid-cols-4 gap-4 mt-3">
                <div className="col-span-4 text-center text-[#F1F5F9]">
                    <input className="w-70 border rounded-4xl text-md px-3 py-2 border-[#94A3B8]" type="text" placeholder="Search first name, last name or ...." />
                    <select className="px-3 py-2 border border-[#94A3B8] rounded-4xl mx-3 text-md">
                        <option value="all" selected>all</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <button className="cursor-pointer px-3 py-2 border border-[#94A3B8] rounded-4xl text-md hover:bg-[#94A3B8] hover:text-[#0B1120] duration-500"> Search </button>
                </div>
                {contacts.map((contact) => <ContactBox key={contact._id} {...contact} />)}
            </main>
        </section>
    )
}

export async function getServerSideProps() {

    await connectDB();
    let contacts = await Contact.find().lean(); // Convert MongoDB object to js object

    return {
        props: { contacts: JSON.parse(JSON.stringify(contacts)) }
    }

}