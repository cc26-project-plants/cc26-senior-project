import "../styles/globals.css";
import "../config/firebase";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import DataProvider from "../context/getdata";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </AuthProvider>
  );
}

export default MyApp;
