import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteName } from "../components/layout";
import helpStyles from "../styles/help.module.css";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteName}</title>
			</Head>
			<div className={helpStyles.containerMain}>
				<Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
				<div className={helpStyles.helpContainer}>
					<h2 className={helpStyles.helpSectionHeading}>Terms and Conditions</h2>
					<p className={helpStyles.helpSectionDescription}>
						The following terms are temporary whilst <em>Bevl</em> is in its prototyping phase. What you experience does not represent the final product.
					</p>
					<p className={helpStyles.helpSectionDescription}>
						The data you store on <em>Bevl</em> will not persist past the prototyping phase.
					</p>
					<p className={helpStyles.helpSectionDescription}>
						<em>Bevl</em> is only collecting data (name, email, password) for infrequent notifications and authentication.
					</p>
				</div>
			</div>
		</Layout>
	);
}
