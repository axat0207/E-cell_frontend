import Link from "next/link"
export default function Navbar(){

    return( 
    <div>
        <div className="bg-black flex justify-between px-6 h-20  w-full">
            <div className="text-white flex justify-center items-center">E-CELL</div>
            <div className="text-white text-lg flex justify-center items-center gap-4">
                <Link className="hover:text-red-700" href={'/'}>HOME</Link>
                <Link className="hover:text-red-700" href={'/'}>ABOUT US</Link>
                <Link className="hover:text-red-700" href={'/'}>INITIATIVE</Link>
                <Link className="hover:text-red-700" href={'/'}>EVENTS</Link>
                <Link className="hover:text-red-700" href={'/'}>ALUMNI</Link>
                <Link className="hover:text-red-700" href={'/'}>PARTNER WITH US</Link>
                <Link className="hover:text-red-700" href={'/'}>CONTACT US</Link>
            </div>
        </div>
    </div>
    )
}