import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      <p>Main(let's draw your app here)</p>
      <Link href="/admin">
        <a>Logout</a>
      </Link>
    </div>
  );
};

export default Main;
