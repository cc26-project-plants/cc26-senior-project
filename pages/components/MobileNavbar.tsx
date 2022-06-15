import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const MobileNavbar = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();
  const { logout, setCurrentUser } = useAuth();

  const handleLogOut = async () => {
    await logout();
    setCurrentUser(null);
    router.push("/");
  };
  return (
    <div className="bg-roppongi-100 flex flex-row gap-3 drop-shadow-lg">
      <div>
        <h2 className="normal-case text-xl m-7 -mr-1 text-roppongi-700">Happa</h2>
      </div>
      <div className="mt-3">
        <div className="dropdown">
          <label tabIndex={tabIndex} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={tabIndex}
            className="menu dropdown-content bg-roppongi-200 text-roppongi-800 p-2 shadow rounded-box w-52"
          >
            <li onClick={() => router.push("/myPage")}>
              <h2>My Page</h2>
            </li>
            <li onClick={() => handleLogOut()}>
              <h2>Log Out</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
