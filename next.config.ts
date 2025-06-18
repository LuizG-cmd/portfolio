import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
   remotePatterns:[
    {
    hostname: "images.icon-icons.com"
    },
    {
    hostname: "avatars.githubusercontent.com"
    },
   ],
  },
};

export default nextConfig;
