/** @type {import('next').NextConfig} */
const nextConfig = {
  
    output: 'export',
    typescript: {
      ignoreBuildErrors: true,
    }
  };
  // export default nextConfig;
  
  
  import TerserPlugin from 'terser-webpack-plugin';
  import withPWAInit from "@ducanh2912/next-pwa";
  
  const withPWA = withPWAInit({  
    dest: "public",  
    disable: process.env.NODE_ENV === "production",
      cacheOnFrontEndNavCaching: true,
      aggressiveFrontEndNavCaching: true,
      reloadOnOnline: true,
      swcMinify: true,
      workboxOptions: {
          disableDevLogs: true,
        },
  });
  
  export default withPWA({
  webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
  config.optimization.minimizer.push(new TerserPlugin());
  }
  return config;
  },
  
  
  });
  
  
  
  