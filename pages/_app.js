import Head from "next/head";
import Link from "next/link";

import "../styles/global.css";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

export const siteName = "Bevl";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon.svg" />
				<title>{siteName}</title>
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
