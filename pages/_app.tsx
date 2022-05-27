import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import "../src/config/firebase.config";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default MyApp;
