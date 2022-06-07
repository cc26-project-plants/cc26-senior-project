import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../config/firebase";
import { AuthProvider } from "../context/AuthContext";
import DataProvider from "../context/GetData";
import "../styles/globals.css";
import VisibilityProvider from "../context/VisibilityContext";
import MqttProvider from "../context/MqttContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MqttProvider>
      <VisibilityProvider>
        <DataProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </DataProvider>
      </VisibilityProvider>
    </MqttProvider>
  );
};

export default MyApp;
