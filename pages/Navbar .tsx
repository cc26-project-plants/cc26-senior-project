import { useState } from "react";
import Link from "next/link";
import FeedPlant from "./FeedPlant";
import { useAuth } from "../context/AuthContext"

//className: all tailwind
export default function Navbar({}){
    const { logout } = useAuth();
    const menu: { name: string; link: string}[]=[
        // {name:"Feed my plant", link:"/"},
        {name:"Check Camera", link:"/CheckCamera"},
        {name:"Check Humidity", link:"/Humidity"},
        {name:"Check Soil moist", link:"/SoilMoist"},
        {name:"Check Temperature", link:"/Temperature"},
    ]
    // const [open, setOpen] = useState(false)
    // const toggle = ()=>{
    //     setOpen(prevState => !prevState)
    // }
    const [modalShow, setModalShow]= useState(false)
    const displayModal = ()=>{
      setModalShow(true)
    }

    return (
    <div className="h-96 w-48 bg-lime-400 list-none">
        <div>
        <li>
            <div
            onClick={displayModal}
            // href={"/"} 
            className="font-mono w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-green-700 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Feed my plant
            </div>
        </li> 
        {menu.map((menu) => (
            <li key={menu.name}>
                <a 
                // onClick={toggle}
                href={menu.link} 
                className="font-mono w-40 inline-block text-sm px-4 py-2 leading-none border rounded
                no-underline text-green-700 border-white 
                hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                {menu.name}
                </a>
            </li> 
            
        ))}     
        </div>
        <Link href="/admin">
            <a
            className="font-mono w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-green-700 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mb-8 lg:mt-0"
            >Logout</a>
        </Link>
    </div>
    )
}