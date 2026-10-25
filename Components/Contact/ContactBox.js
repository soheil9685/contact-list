import Image from "next/image"

export default function ContactBox({firstName , lastName , gender , age , phone}) {
    return (
        <div className="bg-[#111C30] p-3 rounded-lg overflow-hidden w-80 mt-3">
            <span className="flex items-center gap-2 mb-5">
                <Image src="/assets/images/profile.png" width={30} height={30} />
                <h2 className="text-[#F1F5F9] inter text-lg">
                    {firstName} {lastName} Soheil Hosseini
                </h2>
            </span>
            <span className="text-[#F1F5F9] inter text-sm">
                <p>Gender : {gender} male</p>
                <p>Age : {age} 28</p>
                <p>Phone : {phone} 09905368058</p>
            </span>
        </div>
    )
}