import Navbar from "../components/Navbar"

export default function Landing(){
    return(
        <>
        <Navbar/>
        <div className="h-[90vh] bg-black leading-loose  text-white flex flex-col justify-center items-center">
        <div className="flex">
        <span className="text-3xl text-red-700">E</span ><span className="text-3xl">-CELL</span>

        </div>
            
            <div className="text-3xl pt-2">JABALPUR ENGINERING COLLEGE</div>
            <div className="text-xl pt-5">Enpowering for you a better future</div>
            <div className="text-sm underline pt-5"> KNOW MORE</div>
        </div>
        </>
    )
}