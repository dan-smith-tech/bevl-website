import Head from "next/head";

import helpStyles from "../styles/help.module.css";

export default function Help() {
	return (
		<>
			<Head>
				<title>Bevl • Help</title>
				<meta property="og:title" content="Bevl • Help" />
				<meta name="description" content="Learn how to use Bevl." />
				<meta property="og:description" content="Learn how to use Bevl." />
			</Head>
			<div className={"container-full " + helpStyles["container-full"]}>
				<div
					className={
						"container-partial " + helpStyles["container-partial"]
					}
				>
					<p>The help centre will release closer to launch.</p>
				</div>
			</div>
		</>
	);
}
