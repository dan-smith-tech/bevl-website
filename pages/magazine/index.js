import Head from "next/head";

import magazineStyles from "../../styles/magazine/index.module.css";

export default function Magazine() {
	return (
		<>
			<Head>
				<title>Bevl • Magazine</title>
			</Head>
			<div className={"container-full " + magazineStyles["container-full"]}>
				<div
					className={
						"container-partial " + magazineStyles["container-partial"]
					}
				>
					<p>The Bevl magazine is launching soon.</p>
				</div>
			</div>
		</>
	);
}
