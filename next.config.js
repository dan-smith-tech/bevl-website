module.exports = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	productionBrowserSourceMaps: true,
	async redirects() {
		return [
			{
				source: "/signup",
				destination: "/newsletter",
				permanent: true,
			},
		];
	},
};
