import Image from "next/image";

import aboutStyles from "../styles/about.module.css";

function Story() {
	return (
		<>
			<div className={"container-full " + aboutStyles["container-full"]}>
				<div className={"container-partial " + aboutStyles["container-partial"]}>
					<div className={aboutStyles["content-text"]}>
						<h1>My Story</h1>
						<p>
							Like many people, I have always liked to make sure I’m ahead of the work I need to get done. I
							have also always found technology a great tool to facilitate and aid me with these tasks.
						</p>
						<p>
							However, when I was in school and going through exams, I discovered that the way many people
							around me were organising their time didn’t suit me. This is because it often involved
							designating precise times to certain tasks and being overly specific when making plans. This
							method hindered my ability to accomplish the goals I was setting, as the specificity meant I
							was overlooking the unpredictable nature of the tasks I was organising, and often ended up
							having to spend time adjusting my plans because things that I couldn’t have prepared for would
							arise. I realised I was spending too much time rewriting plans and micromanaging the tasks I
							needed to get done, and that I wasn’t working on the important things.
						</p>
						<p>
							Over time I tried many different planning tools, but none met my needs. Calendars generally
							require you to input specific times (not to mention the tediousness of having to create new
							events) and todo lists don’t often allow you to visualise plans or assign time to work on
							tasks. This is why I created Bevl; to facilitate my philosophy of creating visual plans that
							are not too time-specific, but allow for chunks of time to be assigned to todos. 
						</p>
					</div>
					<div className={aboutStyles["content-graphic"]}>
						<div className={aboutStyles["graphic"] + " " + aboutStyles["graphic-1"]}></div>
						<div className={aboutStyles["graphic"] + " " + aboutStyles["graphic-2"]}></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Story;
