import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../config/firebase";
import { AuthProvider } from "../context/AuthContext";
import DataProvider from "../context/GetData";
import VisibilityProvider from "../context/VisibilityContext";
import MqttProvider from "../context/MqttContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <MqttProvider>
        <VisibilityProvider>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </VisibilityProvider>
      </MqttProvider>
    </AuthProvider>
  );
};

export default MyApp;
