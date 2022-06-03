import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../config/firebase";

import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

interface Data {
  currentUser: object | null;
  login: unknown;
  signup: unknown;
  logout: unknown;
}

const AuthContext = createContext<Data | any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  function signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    setCurrentUser(null);
    auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    // console.log(currentUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ setCurrentUser, currentUser, login, signup, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
