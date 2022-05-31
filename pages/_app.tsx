import "../styles/globals.css";
import "../config/firebase";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import DataProvider from "../context/GetData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </DataProvider>
  );
}

export default MyApp;
