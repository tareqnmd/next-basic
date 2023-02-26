/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com'],
	},
	compiler: {
		removeConsole: true,
	},
};

module.exports = nextConfig;
