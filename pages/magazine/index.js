import Head from "next/head";

import tempStyles from "../../styles/temp.module.css";
import detailStyles from "../../styles/partials/detail.module.css";

export default function Magazine() {
	return (
		<>
			<Head>
				<title>Bevl • Magazine</title>
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
					<p>The Bevl magazine is launching soon.</p>
				</div>
			</div>
		</>
	);
}
