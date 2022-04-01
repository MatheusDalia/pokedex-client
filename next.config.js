/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = withPWA({
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: false,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
