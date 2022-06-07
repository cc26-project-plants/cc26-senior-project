import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";

const TopBar = () => {
  const router = useRouter();

  const { logout, setCurrentUser } = useAuth();

  const handleLogOut = async (e: any) => {
    await logout();
    setCurrentUser(null);
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className="w-40 h-16 bg-leaf bg-contain bg-no-repeat bg-center text-center mt-0 ml-24">
          <h4 className="flex justify-start mt-10 ml-0 text-apple-500">
            Happa
          </h4>
        </div>
        <div className="flex gap-2 mr-2 ">
          <Link href="/myPage">
            <button
              className="w-40 h-20 inline-block text-sm leading-none rounded-lg
              no-underline text-white border-teal-500 bg-apple-300
              hover:border-transparent hover:text-white hover:bg-apple-400
              shadow-gray-200 
              "
            >
              My Page
            </button>
          </Link>

          <Link href="/">
            <button
              onClick={(e: any) => {
                handleLogOut(e);
              }}
              className="w-40 h-20 inline-block text-sm leading-none rounded-lg
              no-underline text-white border-teal-500 bg-apple-300
              hover:border-transparent hover:text-white hover:bg-apple-400
              shadow-gray-200 
              "
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
