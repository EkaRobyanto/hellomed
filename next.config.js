/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's6.imgcdn.dev',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
