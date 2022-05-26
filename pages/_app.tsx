import "../styles/globals.css";
import "../src/config/firebase.config";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/hook/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
