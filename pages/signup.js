import Head from "next/head";
import Link from "next/link";
import Layout, { siteName } from "../components/layout";
import signupStyles from "../styles/signup.module.css";

export default function Signup() {
	return (
		<Layout>
			<Head>
				<title>Signup | {siteName}</title>
			</Head>
			<div className={signupStyles.containerMain}>
				<div className={signupStyles.containerInformation}>
					<h3>Please Note:</h3>
					<p>
						<em>Bevl</em> is in very early stages of development. Not only are there many more features coming soon (see the{" "}
						<a draggable="false" href="https://feedback.bevl.app/roadmap" target="_blank" rel="noopener noreferrer">
							roadmap
						</a>
						), but many of the existing features will be improved and built upon. Whilst testing, if you encounter any issues or have any unique ideas, please leave feedback{" "}
						<a draggable="false" href="https://feedback.bevl.app" target="_blank" rel="noopener noreferrer">
							here
						</a>
						.
					</p>
					<p>
						Go to the{" "}
						<Link href="/help">
							<a draggable="false">help</a>
						</Link>{" "}
						section to find out exactly what <em>Bevl</em> is, and how to use all of the features currently implemented.
					</p>
					<p>
						Thank you for taking the time to test <em>Bevl</em>.
					</p>
				</div>
				<a draggable="false" href="https://open.bevl.app/signup" className={["button", "buttonPrimary", signupStyles.buttonPrimary].join(" ")}>
					I UNDERSTAND, SIGN UP
				</a>
			</div>
		</Layout>
	);
}
