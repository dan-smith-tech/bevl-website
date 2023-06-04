import Head from "next/head";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

import "../styles/global.css";

export default function BevlWebsite({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon.svg" />
				<title>Bevl</title>
				<meta property="og:title" content="Bevl" key="title" />
				<meta
					name="keywords"
					content="todo, task, list, plan, organise, productivity"
				/>
				<meta
					property="og:image"
					content="https://www.bevl.app/images/open-graph/index.png"
				/>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
