import Head from "next/head";

import Footer from "../components/partials/Footer";

import "../styles/global.css";

export default function BevlWebsite({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon.ico" />
				<title>Bevl</title>
				<meta property="og:site_name" content="Bevl" />
				<meta
					name="keywords"
					content="todo, task, list, plan, organise, productivity"
				/>
				<meta
					property="og:image"
					content="https://www.bevl.app/images/opengraph.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
