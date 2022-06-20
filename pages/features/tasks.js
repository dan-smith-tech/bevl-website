import Head from "next/head";

import FeatureSplash from "../../components/FeatureSplash";
import CTA from "../../components/CTA";
import FeatureSummary from "../../components/FeatureSummary";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";

function Tasks() {
	return (
		<>
			<Head>
				<title>Bevl • Organise Every Kind of Todo</title>
			</Head>
			<FeatureSplash
				subheading="TASKS"
				heading="Organise Every Kind of Todo"
				tagline="Plan any todo with 4 unique task types, that suit every situation."
				demos={[
					{ heading: "Events", src: "tasks.mp4" },
					{ heading: "Deadlines", src: "tasks.mp4" },
					{ heading: "Habits", src: "tasks.mp4" },
					{ heading: "Projects", src: "tasks.mp4" },
				]}
			/>
			<FeatureSummary
				heading={"Deadlines"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Drag tasks into the calendar to assign times to work on them: use <strong>Deadlines</strong> to plan
					work that has a final due date, but needs to be completed over time.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Events"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Set tasks that only occur once: use <strong>Events</strong> for one-off occasions, such as meetings
					or activities.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Habits"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Arrange recurring tasks that can be individually customised: use <strong>Habits</strong> to create
					routines or develop practices.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Projects"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Break tasks down into smaller <strong>Deadlines</strong> and <strong>Events</strong>, so they can be
					individually organised: use <strong>Projects</strong> to split larger pieces of work into multiple
					chunks.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Calendar"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>View all tasks on the fully-interactable calendar, where they can be filtered and organised.</p>
			</FeatureSummary>
			{/* <Testimonials /> */}
			<FeatureSummary
				heading={"Philosophy"}
				link={"/philosophy"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>Learn about the planning philosophy that Bevl was designed to facilitate.</p>
			</FeatureSummary>
			<CTA independent={true} />
			<FAQ />
		</>
	);
}

export default Tasks;
