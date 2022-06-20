import Head from "next/head";

import CTA from "../components/CTA";

import aboutStyles from "../styles/about.module.css";

function Philosophy() {
	return (
		<>
			<Head>
				<title>Bevl • Philosophy</title>
			</Head>
			<div className={"container-full " + aboutStyles["container-full"]}>
				<div className={"container-partial " + aboutStyles["container-partial"]}>
					<div className={aboutStyles["content-text"]}>
						<h1>Philosophy</h1>
						<p>
							I believe an effective plan should be accurate enough to guide us, but not so precise that it
							dictates every moment of our time. If we include too much detail, we will never be able to
							realistically stick to our goals and will spend more time revising our plans than actually
							carrying them out. This is bad for both productivity and mental health.
						</p>
						<p>
							Bevl was created to support this idea that plans should be created without assigning tasks to
							specific times during the day, but to appoint time to tasks using arbitrary chunks, with the
							relative sizes of these chunks representing the distribution of our time between the tasks.
							The goal of this is to have full organisational control, but to prevent us from getting bogged
							down in details that cause us to overlook the unpredictable nature of our todos (which often
							result in us taking longer to do things than we planned and therefore cause our plans to
							constantly need adaptation).
						</p>
					</div>
					<div className={aboutStyles["content-graphic"]}>
						<div className={aboutStyles["graphic"] + " " + aboutStyles["graphic-1"]}></div>
						<div className={aboutStyles["graphic"] + " " + aboutStyles["graphic-2"]}></div>
					</div>
				</div>
			</div>
			<CTA independent={true} />
		</>
	);
}

export default Philosophy;
