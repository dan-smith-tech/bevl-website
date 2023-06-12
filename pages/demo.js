import Head from "next/head";

import tempStyles from "../styles/temp.module.css";

export default function Demo() {
	return (
		<>
			<Head>
				<title>Bevl • Help</title>
				<meta property="og:title" content="Bevl • Help" />
				<meta name="description" content="Learn how to use Bevl." />
				<meta property="og:description" content="Learn how to use Bevl." />
			</Head>
			<div className={"container-full " + tempStyles["container-full"]}>
				<div
					className={
						"container-partial " + tempStyles["container-partial"]
					}
				>
					<p>The demo will release closer to launch.</p>
				</div>
			</div>
		</>
	);
}
