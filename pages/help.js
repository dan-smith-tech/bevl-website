import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteName } from "../components/layout";
import helpStyles from "../styles/help.module.css";

export default function Help() {
	return (
		<Layout>
			<Head>
				<title>Help | {siteName}</title>
			</Head>
			<div className={helpStyles.containerMain}>
				<Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
				<Link href="/signup">
					<a className="button buttonPrimary" draggable="false">
						SIGN UP FOR CLOSED BETA
					</a>
				</Link>
				<Link href="/roadmap">
					<a className="button buttonSecondary" draggable="false">
						VIEW PLANNED FEATURES
					</a>
				</Link>
				<div className={helpStyles.helpContainer}>
					<section className={helpStyles.helpSection}>
						<h2 className={helpStyles.helpSectionHeading}>Labels</h2>
						<Image src="/images/help/settings-labels.png" width={1000} height={585} alt="Bevl Logo" draggable="false" />
						<p className={helpStyles.helpSectionDescription}>Labels allow you to organise your tasks by grouping them together.</p>
						<p className={helpStyles.helpSectionDescription}>NOTE: You must always have at least one label.</p>
						<h3 className={helpStyles.helpSectionSubHeading}>Creating A New Label</h3>
						<p className={helpStyles.helpSectionDescription}>
							When you create an account, a default label called "General" is created. You can create new labels in order to have more organisational capability, and to replace the default "General" label, should you wish to.
						</p>
						<p className={helpStyles.helpSectionDescription}>
							To create a label, go to{" "}
							<em>
								Settings (<i class="fas fa-ellipsis-h"></i>) : Labels
							</em>{" "}
							and enter the name of your label into the input field. Then press either the "Add Label" UI button or "Enter" on your keyboard. You will see the new label appear in your list of labels.
						</p>
						<h3 className={helpStyles.helpSectionSubHeading}>Changing the Color of a Label</h3>
						<p className={helpStyles.helpSectionDescription}>Coloring labels allows you to visually organise the tasks you create by having them appear as the same color.</p>
						<p className={helpStyles.helpSectionDescription}>
							When you create a label a random color is assigned, but you can easily change this by clicking the <i class="fas fa-palette"></i> icon. A context menu with 12 colors will then appear, selecting one of these will change the color
							of this label.
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
