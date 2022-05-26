import { createContext, useState } from "react";
import { AuthService } from "../service/AuthService";

//interface for createContext

const authContext = createContext(null);

export function AuthProvider() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const LoginWithGoogle = async () => {
    const { error, user } = await AuthService.LoginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const login = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return <authContext.Provider value={} />;
}
