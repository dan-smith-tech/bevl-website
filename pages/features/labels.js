import Head from "next/head";
import Link from "next/link";

import FeatureSplash from "../../components/FeatureSplash";
import CTA from "../../components/CTA";
import FeatureSummary from "../../components/FeatureSummary";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";

function Labels() {
	return (
		<>
			<Head>
				<title>Bevl • Group and Filter Content</title>
				<meta
					property="og:title"
					content="Bevl • Group and Filter Content"
				/>
				<meta
					name="description"
					content="Group and filter content with customisable tags, to focus on the tasks at hand."
				/>
				<meta
					property="og:description"
					content="Group and filter content with customisable tags, to focus on the tasks at hand."
				/>
				<meta
					property="og:image"
					content="https://bevl.app/images/open-graph/labels.png"
				/>
			</Head>
			<FeatureSplash
				subheading="LABELS"
				heading="Group and Filter Content"
				tagline="Group and filter content with customisable tags, to focus on the tasks at hand."
				demos={[
					{ heading: "Customise", src: "tasks.mp4" },
					{ heading: "Segment", src: "tasks.mp4" },
					{ heading: "Default", src: "tasks.mp4" },
				]}
			/>
			<FeatureSummary
				heading={"Group"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Organise{" "}
					<Link href={"/features/tasks"}>
						<a>Tasks</a>
					</Link>{" "}
					and{" "}
					<Link href={"/features/lists"}>
						<a>Lists</a>
					</Link>{" "}
					so they can be filtered: use <strong>Labels</strong> to arrange
					content in categories.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Customise"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Name, colour, and change the background pattern of{" "}
					<strong>Labels</strong> to organise{" "}
					<Link href={"/features/tasks"}>
						<a>Tasks</a>
					</Link>{" "}
					and{" "}
					<Link href={"/features/lists"}>
						<a>Lists</a>
					</Link>{" "}
					in any way.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Default"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Set the most fequently used <strong>Label</strong>, to save time
					when creating new{" "}
					<Link href={"/features/tasks"}>
						<a>Tasks</a>
					</Link>{" "}
					and{" "}
					<Link href={"/features/lists"}>
						<a>Lists</a>
					</Link>{" "}
					.
				</p>
			</FeatureSummary>
			{/* <Testimonials /> */}
			<FeatureSummary
				heading={"Philosophy"}
				link={"/philosophy"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Learn about the planning philosophy that Bevl was designed to
					facilitate.
				</p>
			</FeatureSummary>
			<CTA independent={true} />
			<FAQ />
		</>
	);
}

export default Labels;
