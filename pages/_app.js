import Head from "next/head";

import "../styles/global.css";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

function MyApp({ Component, pageProps }) {
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
					content="https://bevl.app/images/open-graph/index.png"
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
