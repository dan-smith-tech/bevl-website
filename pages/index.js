import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteName } from "../components/layout";
import indexStyles from "../styles/index.module.css";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteName}</title>
			</Head>
			<div className={indexStyles.containerMain}>
				<Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
				<Link href="/signup">
					<a className="button buttonPrimary">Sign Up For Alpha</a>
				</Link>
				<a href="https://feedback.bevl.app/roadmap" target="_blank" className="button buttonSecondary">
					View Roadmap
				</a>
				<a href="https://feedback.bevl.app/" target="_blank" className="button buttonSecondary">
					Provide Feedback
				</a>
			</div>
		</Layout>
	);
}
