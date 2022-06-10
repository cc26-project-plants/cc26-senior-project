import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  const route = useRouter();
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
