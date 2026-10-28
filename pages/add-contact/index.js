import toast , {Toaster} from "react-hot-toast";

export default function AddContact() {

    let data = {
        firstName: "",
        lastName: "",
        age: 0,
        gender: "male",
        phone: ""
    }

    async function submitHandler(e){
        e.preventDefault();
        
        let{firstName , lastName , age , phone} = data;
        if(!firstName || !lastName || !age || !phone){
            return toast.error("Fill all fields!")
        }

        // First name validation
        if(firstName.length < 3 || firstName.length > 15){
            return toast.error("Length first name is invalid!")
        }

        // Last name validation
        if(lastName.length < 3 || lastName.length > 15){
            return toast.error("Length last name is invalid!")
        }

        // Age validation
        if(age < 18 || age > 200){
            return toast.error("Age is invalid!")
        }

        // Phone validation
        if(phone.length > 11 || phone.match(/09\d{9}/)){
            return toast.error("Phone is invalid!")
        }
    }

    return (
        <section className="w-full h-screen flex flex-col items-center pt-20">
            <Toaster />
            <div className="bg-[#0F172A] px-10 py-10 rounded-2xl">
                <h1 className="text-[#F1F5F9] text-4xl inter text-center mb-10">Add Contact</h1>
                <form className="w-130 grid grid-cols-4 gap-3">
                    {/* First Name */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">First Name:</label>
                        <input onChange={(e) => data.firstName = e.target.value} className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="First Name" />
                    </div>


                    {/* Last Name */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">Last Name:</label>
                        <input onChange={(e) => data.lastName = e.target.value} className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="Last Name" />
                    </div>

                    {/* Gender */}
                    <div className="col-span-1">
                        <label className="block text-[#F1F5F9] mb-1">Gender:</label>
                        <select onChange={(e) => data.gender = e.target.value} className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>

                    {/* Age */}
                    <div className="col-span-1">
                        <label className="block text-[#F1F5F9] mb-1">Age:</label>
                        <input min="18" max="200" onChange={(e) => data.age = e.target.value} className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="number" placeholder="Age" />
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-2">
                        <label className="block text-[#F1F5F9] mb-1">Phone Number:</label>
                        <input onChange={(e) => data.phone = e.target.value} className="border-2 border-[#94A3B8] text-lg text-[#F1F5F9] px-5 py-1 rounded-xl w-full" type="text" placeholder="Phone Number" />
                    </div>

                    <button onClick={submitHandler} className="col-span-4 border-2 border-[#94A3B8] text-[#F1F5F9] py-2 mt-4 rounded-2xl hover:text-[#0F172A] hover:bg-[#94A3B8] duration-300"> Create New Contact </button>
                </form>
            </div>
        </section>
    )
}