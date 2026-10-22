import HomeImg from "@/public/assets/images/Home background.jpg"

export default function Home() {
  return (
    <main style={{
      backgroundImage: `url("${HomeImg.src}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#F1F5F9] inter text-7xl"> Manage your contacts </h1>
      <h2 className="text-[#F1F5F9] dancing text-5xl">easy & clear</h2>

      <div>
        <button className="border px-5 py-1 rounded-md mt-8 text-xl text-[#263449] inter hover:bg-[#818CF8] hover:border-[#818CF8] hover:text-[#F1F5F9] duration-300">
          <a href="/contacts">
            Let's go
          </a>
        </button>
      </div>
    </main>
  );
}
