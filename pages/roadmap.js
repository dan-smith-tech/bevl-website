import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteName } from "../components/layout";
import roadmapStyles from "../styles/roadmap.module.css";

export default function Roadmap() {
	return (
		<Layout>
			<Head>
				<title>Roadmap | {siteName}</title>
			</Head>
			<div className={roadmapStyles.containerMain}>
				<Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
				<Link href="/signup">
					<a className="button buttonPrimary" draggable="false">
						SIGN UP FOR CLOSED BETA
					</a>
				</Link>
				<Link href="/help">
					<a className="button buttonSecondary" draggable="false">
						HOW TO USE
					</a>
				</Link>
				<div className={roadmapStyles.roadmapFeatures}>
					<h2>Features to be added</h2>
					<ul className={roadmapStyles.roadmapFeaturesList}>
						<li className={roadmapStyles.roadmapFeaturesListElement}>
							Deadline plans signify their time occurance relative to their associated Deadline (e.g., if a Deadline plan occurs after the Deadline itself, users will be signified that they are planning to work on the task after it&apos;s
							due).
						</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Information can be added to deadline plans.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>All tasks that appear on the calendar can be reordered using drag n&apos; drop.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>A day on the calendar can be clicked to create a task, with that date pre-selected.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Tasks can be toggled on and off on the calendar; either by task type or by label.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Tasks can be toggled on and off in the list bar; either by time occurance (e.g., &ldquo;only show tasks that occur in the next month&rdquo;), task type, or by label.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Habits: recurring events that only appear on the calendar.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Projects: larger tasks that can be broken down into mutiple Deadlines.</li>

						<li className={roadmapStyles.roadmapFeaturesListElement}>The mobile app/web version acts as a companion to add/edit tasks. The desktop version is then used to organsie and manage these tasks with the calendar.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Work plan: select tasks to work on &apos;today&apos;. Events and habits occuring &apos;today&apos; will also show up in this section.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Moodboard: make &ldquo;sticky note&rdquo; lists for random, less organised, pieces of information.</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>Moodboard browser extension: bookmarks/websites can be saved to lists on the Moodboard.</li>

						<li className={roadmapStyles.roadmapFeaturesListElement}>
							Recipe book: individual recipes can be created, each with cooking steps and ingredients. Weekly meal plans can be made by selecting created recipes, and a shopping list can then be generated.
						</li>
						<li className={roadmapStyles.roadmapFeaturesListElement}>
							Workout routines: individual exercises can be created, where notes and videos can be recorded. Workout routines can then be created by dragging individual exercises into a schedule.
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
}
