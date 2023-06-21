import Head from "next/head";

import tempStyles from "../styles/temp.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function Demo() {
	return (
		<>
			<Head>
				<title>Bevl • Demo</title>
				<meta property="og:title" content="Bevl • Demo" />
				<meta
					name="description"
					content="Try using Bevl's unique todo list, calendar, and note system, to see if it meets your productivity needs."
				/>
				<meta
					property="og:description"
					content="Try using Bevl's unique todo list, calendar, and note system, to see if it meets your productivity needs."
				/>
			</Head>
			<div
				className={
					"container-full " +
					tempStyles["container-full"] +
					" " +
					detailStyles["container-detail"]
				}
			>
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
