import ContactBox from "@/Components/Contact/ContactBox";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";

export default function Contacts({ contacts }){

    return(
        <section className="flex items-start">
            <Navbar />
            <main className="grid grid-cols-4 gap-4">
                {contacts.map((contact) => <ContactBox key={contact._id} {...contact} />)}
            </main>
        </section>
    )
}

export async function getServerSideProps() {

    await connectDB();
    let contacts = await Contact.find().lean(); // Convert MongoDB object to js object
    
    return {
        props : { contacts : JSON.parse(JSON.stringify(contacts)) }
    }
    
}