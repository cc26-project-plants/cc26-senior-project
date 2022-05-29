import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
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
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  function signup(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
