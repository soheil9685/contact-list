import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/models/Contact";
import connectDB from "@/uitls/connectDB";

export default function Contacts({ contacts }){

    return(
        <section>
            <Navbar />
            <main className="bg-[#0F172A]">

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