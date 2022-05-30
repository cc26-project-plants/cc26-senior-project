import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";
import FeedPlant from "./FeedPlant";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
const [modalShow, setModalShow]= useState(false)
  const displayModal = ()=>{
    setModalShow(true)
  }
  
  return (
    <div>
      <div
      className="font-mono max-w-screen-md h-14 bg-green-50"
      >My Plants Status</div>
      <div className="flex flex-row ">
        <Navbar />
        <div 
        className="font-mono w-96 h-96 px-5 bg-green-600"
        >Main Field here
        {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        {modalShow && <FeedPlant onClick={displayModal}/>}
        </div>
      </div>
    </div>
  );
};

// export default withProtected(Main);
export default Main;