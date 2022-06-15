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
				<title>Bevl • Filter and Segment Content</title>
			</Head>
			<FeatureSplash
				subheading="LABELS"
				heading="Group and Filter Plans"
				tagline="Categorise tasks and lists to arrange content in any way."
				demos={[
					{ heading: "Customise", src: "tasks.mp4" },
					{ heading: "Segment", src: "tasks.mp4" },
					{ heading: "Default", src: "tasks.mp4" },
				]}
			/>
			<FeatureSummary
				heading={"Segment"}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Group{" "}
					<Link href={"/features/tasks"}>
						<a>Tasks</a>
					</Link>{" "}
					and{" "}
					<Link href={"/features/lists"}>
						<a>Lists</a>
					</Link>{" "}
					so they can be filtered: use <strong>Labels</strong> to arrange content in categories.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Customise"}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Name, colour, and change the background pattern of <strong>Labels</strong> to organise{" "}
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
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Set the most fequently used <strong>Label</strong>, to save time when creating new{" "}
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
				link={"/about"}
				image={"/images/screenshots/light/comingSoon.png"}
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

export default Labels;
