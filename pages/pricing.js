import Head from "next/head";

import tempStyles from "../styles/temp.module.css";

export default function Pricing() {
	return (
		<>
			<Head>
				<title>Bevl • Pricing</title>
				<meta property="og:title" content="Bevl • Pricing" />
				<meta
					name="description"
					content="Explore Bevl's pricing options."
				/>
				<meta
					property="og:description"
					content="Explore Bevl's pricing options."
				/>
			</Head>
			<div className={"container-full " + tempStyles["container-full"]}>
				<div
					className={
						"container-partial " + tempStyles["container-partial"]
					}
				>
					<p>The pricing plans will release closer to launch.</p>
				</div>
			</div>
		</>
	);
}
