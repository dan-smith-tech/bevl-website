import Image from "next/image";

import featureStyles from "../../styles/feature.module.css";

import FeatureSummary from "../../components/FeatureSummary";
import NewsletterSignup from "../../components/NewsletterSignup";

function Moodboard() {
	return (
		<>
			<FeatureSummary
				heading={"Plan Your Life"}
				summary={"Create tasks ranging from Deadlines, Events, Habits, and Projects!"}
				link={"/features/tasks"}
				image={"/images/landing/screenshot-dashboard-edit1.png"}
				imageFirst={false}
				dark={false}
			/>
		</>
	);
}

export default Moodboard;
