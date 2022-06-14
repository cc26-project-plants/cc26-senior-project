/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
import webpack from "webpack";

const { parsed: myEnv } = dotenv.config({
  path: "./.env",
});

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};

export default nextConfig;
