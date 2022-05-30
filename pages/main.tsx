import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
  return (
    <div>
      <div className="font-mono max-w-screen h-14 bg-green-100 align-middle ">
        Happa
      </div>
      <div className="flex flex-row  ">
        <Navbar />
        <div className="font-mono  w-screen h-screen  bg-green-600">
          Main Field here
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        </div>
      </div>
    </div>
  );
};

export default Main;
