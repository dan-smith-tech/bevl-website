import CTA from "../../components/CTA";
import FeatureSummary from "../../components/FeatureSummary";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";

import featureStyles from "../../styles/feature.module.css";
import FeatureSplash from "../../components/FeatureSplash";

function Tasks() {
	return (
		<>
			<FeatureSplash
				subheading="TASKS"
				heading="Organise Every Kind of Todo"
				tagline="Bevl's 4 unique task types enable you to organise all kinds of todos; big or small."
				demos={[
					{ heading: "Deadlines", src: "tasks.mp4" },
					{ heading: "Events", src: "tasks.mp4" },
					{ heading: "Habits", src: "tasks.mp4" },
					{ heading: "Projects", src: "tasks.mp4" },
				]}
			/>
			<FeatureSummary
				heading={"Deadlines"}
				summary={"Drag tasks into the calendar to assign time to work on them."}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={true}
				dark={false}
			/>
			<FeatureSummary
				heading={"Events"}
				summary={"Assign a final date, but drag them into the calendar to plan when you will work on them."}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={false}
				dark={false}
			/>
			<FeatureSummary
				heading={"Habits"}
				summary={"Assign a final date, but drag them into the calendar to plan when you will work on them."}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={true}
				dark={false}
			/>
			<FeatureSummary
				heading={"Projects"}
				summary={"Assign a final date, but drag them into the calendar to plan when you will work on them."}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={false}
				dark={false}
			/>
			<FeatureSummary
				heading={"Calendar"}
				summary={
					"All tasks appear on the fully interactable calendar, where they can be filtered and organised."
				}
				image={"/images/screenshots/light/dashboard.png"}
				imageFirst={true}
				dark={false}
			/>
			{/* <Testimonials /> */}
			<FeatureSummary
				heading={"Philosophy"}
				summary={
					"Whilst you are welcome to use Bevl in any way that suits you, it was originally designed to facilitate my planning philosophy."
				}
				link={"/about"}
				image={"/images/screenshots/light/comingSoon.png"}
				imageFirst={false}
				dark={false}
			/>
			<CTA independent={true} />
			<FAQ />
		</>
	);
}

export default Tasks;
