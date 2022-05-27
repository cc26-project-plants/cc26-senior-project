import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
  return (
    <div>
      <div>My Plants Status</div>
      <Navbar />
      {/* <p>Hi! {user?.displayName} Welcome to Plants!</p> */}
      {/* <Link href="/admin">
        <a>Logout</a>
      </Link> */}
    </div>
  );
};

export default withProtected(Main);
