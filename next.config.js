/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's6.imgcdn.dev',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'deployailment.pythonanywhere.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'warungirfan.000webhostapp.com',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
