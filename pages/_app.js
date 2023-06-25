import Head from "next/head";

import Footer from "../components/partials/Footer";

import "../styles/global.css";

export default function BevlWebsite({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon.ico" />
				<title>Bevl</title>
				<meta property="og:title" content="Bevl" key="title" />
				<meta
					name="keywords"
					content="todo, task, list, plan, organise, productivity"
				/>
				<meta
					property="og:image"
					content="https://www.bevl.app/images/opengraph.png"
				/>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
