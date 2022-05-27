import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { withProtected } from "../src/hook/route";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
  return (
    <div>
      <p>Main(let's draw your app here)</p>
      {/* <p>Hi! {user?.displayName} Welcome to Plants!</p> */}
      <Link href="/admin">
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default withProtected(Main);
