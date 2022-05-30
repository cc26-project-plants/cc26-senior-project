import { useState } from "react";
import Link from "next/link";

export default function Navbar(){
    const menu: { name: string; link: string}[]=[
        {name:"Feed my plant", link:"/"},
        {name:"Check Camera", link:"/"},
        {name:"Check Humidity", link:"/"},
        {name:"Check Soil moist", link:"/"},
        {name:"Check Temperature", link:"/"},
    ]
    let [open, setOpen] = useState(false);

    return (
    <div className="h-96 w-48 bg-lime-400 list-none">
        <div>
        {menu.map((menu) => (
            <li key={menu.name}>
                <a 
                href={menu.link} 
                className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
                no-underline text-green-700 border-white 
                hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                {menu.name}
                </a>
            </li> 
            
        ))}     
        </div>
        <Link href="/admin">
            <a
            className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-green-700 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mb-8 lg:mt-0"
            >Logout</a>
        </Link>
    </div>
    )
}