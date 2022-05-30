import Link from "next/link"
import { Button } from 'react-bootstrap';
//className;
//container: tailwind
//button: bootstrap

export default function Humidity(){
    return(
        <div className="container mx-auto ">
            <div className="w-96 h-96 bg-rainyframe bg-contain bg-no-repeat bg-center 
            py-14 place-content-center">
            humidity
            </div>
            <Link href="/main">
                <Button type="button" className="btn btn-success w-25 my-5"
                >Go Back to Main Page
                </Button>
            </Link>
        </div>
    )
} 