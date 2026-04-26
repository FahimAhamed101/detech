/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    const noindexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, follow",
      },
    ];

    return [
      {
        source: "/index-:slug*",
        headers: noindexHeaders,
      },
      {
        source: "/project:slug*",
        headers: noindexHeaders,
      },
      {
        source: "/team:slug*",
        headers: noindexHeaders,
      },
      {
        source: "/news:slug*",
        headers: noindexHeaders,
      },
      {
        source: "/service-details",
        headers: noindexHeaders,
      },
    ];
  },
};

export default nextConfig;
