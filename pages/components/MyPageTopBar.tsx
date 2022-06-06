import React from "react";
import Link from "next/link";

const MyPageTopBar = () => {
  return (
    <div>
      <div className="flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className="w-40 h-16 bg-leaf bg-contain bg-no-repeat bg-center text-center mt-0 ml-24">
          <h4 className="flex justify-start mt-10 ml-0 text-apple-500">
            My Page
          </h4>
        </div>
        <div className="flex justify-between text-apple-500 items-center max-w-screen h-20 bg-apple-50 align-middle mr-2">
          <Link href="/main">
            <button
              className="w-40 h-20 inline-block text-sm leading-none shadow-lg rounded-lg
              no-underline text-white border-teal-500 bg-apple-300
              hover:border-transparent hover:text-white hover:bg-apple-400
              shadow-gray-200 
              "
            >
              Back to Main
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPageTopBar;
