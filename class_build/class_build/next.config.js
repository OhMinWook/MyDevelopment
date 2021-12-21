module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "minugi",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/board": { page: "/board" },
    "/404": { page: "/404" },
  }),
};
