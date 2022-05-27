import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import useAuth from "../hook/auth";

function AuthStateChanged({ children }: { children: any }) {
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
}

export default AuthStateChanged;
