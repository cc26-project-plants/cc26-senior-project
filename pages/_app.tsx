import "../styles/globals.css";
import "../config/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
