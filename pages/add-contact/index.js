export default function AddContact() {
    return (
        <section className="w-full h-screen flex flex-col items-center pt-20">
            <div className="bg-[#0F172A] px-10 py-10 rounded-2xl">
                <h1 className="text-[#F1F5F9] text-4xl inter text-center mb-10">Add Contact</h1>
                <form className="w-130 grid grid-cols-4 gap-3">
                    {/* First Name */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">First Name:</label>
                        <input className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="First Name" />
                    </div>


                    {/* Last Name */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">Last Name:</label>
                        <input className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="Last Name" />
                    </div>

                    {/* Gender */}
                    <div className="col-span-1">
                        <label className="block text-[#F1F5F9] mb-1">Gender:</label>
                        <select className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>

                    {/* Age */}
                    <div className="col-span-1">
                        <label className="block text-[#F1F5F9] mb-1">Age:</label>
                        <input className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="number" placeholder="Age" />
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">Phone Number:</label>
                        <input className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="Phone Number" />
                    </div>

                    <button className="col-span-4 border-2 border-[#94A3B8] text-[#F1F5F9] py-2 mt-4 rounded-2xl hover:text-[#0F172A] hover:bg-[#94A3B8] duration-300"> Create New Contact </button>
                </form>
            </div>
        </section>
    )
}