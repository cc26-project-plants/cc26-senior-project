import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase";
//interface for createContext

const authContext = createContext(null);

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.LoginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const loginWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const value = { user, error, loginWithGoogle, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
}
