import Head from "next/head";

import helpStyles from "../styles/help.module.css";

function Pricing() {
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
			<div className={"container-full"}>
				<div
					className={
						"container-partial " + helpStyles["container-partial"]
					}
				>
					<p>
						The pricing schemes for Bevl will be released closer to
						launch.
					</p>
				</div>
			</div>
		</>
	);
}

export default Pricing;
