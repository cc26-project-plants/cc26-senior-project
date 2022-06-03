import React from "react";
// import { withProtected } from "../src/hook/route";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

function Admin() {
  const { logout } = useAuth();
  return (
    <div className="bg-green-100 w-screen h-screen">
      <div className="flex flex-col container mx-auto p-8 ">
        <Link href="/main">
          <Button type="button" className="btn btn-info w-25 my-5">
            Go Back to Main Page
          </Button>
        </Link>
        <Button
          type="button"
          className="btn btn-success w-25 my-5"
          onClick={logout}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Admin;
