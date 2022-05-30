import type { NextPage } from "next";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main";
import { useAuth } from "../context/AuthContext";

const Index = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Index;
