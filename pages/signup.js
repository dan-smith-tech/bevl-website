import Head from "next/head";
import Link from "next/link";
import Layout, { siteName } from "../components/layout";
import signupStyles from "../styles/signup.module.css";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Signup | {siteName}</title>
			</Head>
			<div className={signupStyles.containerMain}>
				<div className={signupStyles.containerInformation}>
					<h3>Note:</h3>
					<p>
						<em>Bevl</em> is in very early stages of development. As detailed on the{" "}
						<a href="https://feedback.bevl.app/roadmap" target="_blank" rel="noopener noreferrer">
							<strong>roadmap</strong>
						</a>
						, there are still many features to be added, along with many improvements and optimisations to be made. This means that <em>Bevl</em> is not currently in a state ready for permanent use.
					</p>
					<p>
						Thank you for taking the time to test <em>Bevl</em>.
					</p>
				</div>
				<a href="https://open.bevl.app/signup" className={["button", "buttonPrimary", signupStyles.buttonPrimary].join(" ")}>
					I UNDERSTAND, SIGN UP
				</a>
			</div>
		</Layout>
	);
}
