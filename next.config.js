const nextConfig = {
  distDir: "deploy/build",
  output: "standalone",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: [
      "localhost",
      "sloe-paul.test",
      "sloepaul.marcusand.de",
      "edit.sloepaul.net",
      "sloe.marcusand.de",
      "sloe-cms.marcusand.de",
    ],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
