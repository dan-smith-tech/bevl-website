import Head from "next/head";
import Link from "next/link";

import FeatureSplash from "../../components/FeatureSplash";
import CTA from "../../components/CTA";
import FeatureSummary from "../../components/FeatureSummary";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";

function Lists() {
	return (
		<>
			<Head>
				<title>Bevl • Keep Track of Wandering Ideas</title>
				<meta
					property="og:title"
					content="Bevl • Keep Track of Wandering Ideas"
				/>
				<meta
					name="description"
					content="Record less-organised notes and ideas, without cluttering your todo list."
				/>
				<meta
					property="og:description"
					content="Record less-organised notes and ideas, without cluttering your todo list."
				/>
				<meta
					property="og:image"
					content="https://www.bevl.app/images/open-graph/lists.png"
				/>
			</Head>
			<FeatureSplash
				subheading="LISTS"
				heading="Keep Track of Wandering Ideas"
				tagline="Record less-organised notes and ideas, without cluttering your todo list."
				demos={[
					{ heading: "Customise", src: "tasks.mp4" },
					{ heading: "Document", src: "tasks.mp4" },
					{ heading: "Default", src: "tasks.mp4" },
				]}
			/>
			<FeatureSummary
				heading={"Document"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
			>
				<p>
					Collect notes and ideas: use <strong>Lists</strong> to collate
					information that doesn't belong on a todo list, but does need to
					be remembered.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Bookmark"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
			>
				<p>
					Link notes and ideas to external resources (such as websites and
					files).
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Arrange"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
			>
				<p>
					Filter and reorder <strong>Lists</strong> for full organisational
					control.
				</p>
			</FeatureSummary>
			{/* <Testimonials /> */}
			<FeatureSummary
				heading={"Philosophy"}
				link={"/philosophy"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
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

export default Lists;
