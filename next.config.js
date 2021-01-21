const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");

const withPrettier = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    if (!options.isServer) {
      const { prettierLoaderOptions } = config;
      options.defaultLoaders.prettier = {
        loader: "prettier-loader",
        options: prettierLoaderOptions,
      };

      config.module.rules.push({
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: options.defaultLoaders.prettier,
      });
    }

    if (typeof nextConfig.webpack === "function")
      return nextConfig.webpack(config, options);
    return config;
  },
});

const withEslint = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    if (!options.isServer) {
      const { eslintLoaderOptions } = config;
      options.defaultLoaders.eslint = {
        loader: "eslint-loader",
        options: { failOnError: true, ...eslintLoaderOptions },
      };

      config.module.rules.push({
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: options.defaultLoaders.eslint,
      });
    }

    if (typeof nextConfig.webpack === "function")
      return nextConfig.webpack(config, options);
    return config;
  },
});

const withRawLoader = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: "raw-loader",
    });

    if (typeof nextConfig.webpack === "function")
      return nextConfig.webpack(config, options);
    return config;
  },
});

const withUrlLoader = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    options.defaultLoaders.url = {
      loader: "url-loader",
    };

    config.module.rules.push({
      test: /\.(png|jpg|woff|woff2)$/,
      exclude: /node_modules/,
      use: options.defaultLoaders.url,
    });

    if (typeof nextConfig.webpack === "function")
      return nextConfig.webpack(config, options);
    return config;
  },
});

const withNoXPoweredByHeader = (config = {}) => ({ ...config, poweredByHeader: false });

const withImageDomain = (config = {}) => ({
  ...config,
  images: {
    domains: [
      "localhost",
      "sloe-paul.test",
      "sloepaul.marcusand.de",
      "edit.sloepaul.net",
    ],
  },
});

const withI18n = (config = {}) => ({
  ...config,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});

const nextConfig = withPlugins([
  withSourceMaps(),
  withPrettier,
  withEslint,
  withRawLoader,
  withUrlLoader,
  withNoXPoweredByHeader,
  withImageDomain,
  withI18n,
]);

module.exports = nextConfig;
