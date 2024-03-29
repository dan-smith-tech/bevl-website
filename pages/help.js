import Head from "next/head";

import tempStyles from "../styles/temp.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function Help() {
	return (
		<>
			<Head>
				<title>Bevl • Help</title>
				<meta property="og:title" content="Bevl • Help" />
				<meta
					name="description"
					content="Learn how to use Bevl's unique todo list, calendar, and note system."
				/>
				<meta
					property="og:description"
					content="Learn how to use Bevl's unique todo list, calendar, and note system."
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
					<p>The help centre will release closer to launch.</p>
				</div>
			</div>
		</>
	);
}
