/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Mengabaikan semua error TypeScript saat build
  },
  experimental: {
    appDir: true,
  },
  swcMinify: true, // Pastikan ini aktif untuk minify lebih cepat

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Tambahkan aturan untuk mengizinkan import ES
    config.module?.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false, // Tambahkan ini
      },
    });

    return config;
  },
}

module.exports = nextConfig
