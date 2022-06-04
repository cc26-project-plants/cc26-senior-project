import axios from "axios";
import Link from "next/link";
import { useData } from "../context/GetData";

function MyPage() {
  // const getUserInfo = async ()=>{

  //     const info =  await axios.get("https://happa-26-backend.an.r.appspot.com/users/")
  //     console.log(info.data)

  // }
  const { userData, setUserData } = useData();
  console.log("[mp]", userData);

  return (
    <div>
      <div className=" bg-apple bg-apple-200 h-screen w-screen">
        <h1 className="text-white font-mono text-center">My Page</h1>

        <div>{userData.userName}</div>
        <Link href="/">
          <button className="w-1/2 text-white min-w-1/2 justify-center bg-teal-600 outline outline-1 h-16 rounded-md outline-white mt-6 hover:text-white hover:bg-teal-400">
            go back to main page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MyPage;
