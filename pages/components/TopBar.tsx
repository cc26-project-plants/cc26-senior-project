import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function TopBar() {
  const { logout, setCurrentUser } = useAuth();
  const router = useRouter();

  async function handleLogOut(e: any) {
    e.preventDefault();
    try {
      await logout();
      setCurrentUser(null);
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className="flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className="w-40 h-16 bg-leaf bg-contain bg-no-repeat bg-center text-center mt-0 ml-24">
          <h4 className="flex justify-start mt-10 ml-0 text-apple-500">
            Happa
          </h4>
        </div>
        <div>
          <Link href="/MyPage">
            <button
              className="w-40 h-20 inline-block text-sm leading-none border rounded
              no-underline text-white border-teal-500 bg-apple-300 
              hover:border-transparent hover:text-white hover:bg-apple-400 
              shadow-gray-200 drop-shadow-md
              "
            >
              My Page
            </button>
          </Link>

          <Link href="/admin">
            <button
              onClick={(e) => {
                handleLogOut(e);
              }}
              className="w-40 h-20 inline-block text-sm leading-none border rounded 
            no-underline text-white border-sycamore-500 bg-apple-300
            hover:border-transparent hover:text-white hover:bg-apple-400
            shadow-md
            "
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
