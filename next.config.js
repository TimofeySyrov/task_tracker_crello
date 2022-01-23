const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: isProd ? true : false,
  },
}