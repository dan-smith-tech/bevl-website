import Head from "next/head";

import CTA from "../components/form/CTA";

import aboutStyles from "../styles/about.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function About() {
	return (
		<>
			<Head>
				<title>Bevl • Story</title>
				<meta property="og:title" content="Bevl • Story" />
				<meta
					name="description"
					content="Discover what inspired Bevl's creation."
				/>
				<meta
					property="og:description"
					content="Discover what inspired Bevl's creation."
				/>
			</Head>
			<div className={"container-full " + detailStyles["container-detail"]}>
				<div
					className={
						"container-partial " + aboutStyles["container-partial"]
					}
				>
					<h1>My story</h1>
					<p>
						Like many people, I have always liked to make sure I&apos;m
						ahead of the work I need to get done. I have also always found
						technology a great tool to facilitate and aid me with these
						duties.
					</p>
					<p>
						However, when I was in school and going through exams, I
						discovered that the way many people around me were organising
						their time didn&apos;t suit me. This is because it often
						involved designating precise times to certain tasks and being
						overly specific when making plans. This method hindered my
						ability to accomplish the goals I was setting, as the
						specificity meant I was overlooking the unpredictable nature
						of the tasks I was organising, and often ended up having to
						spend time adjusting my plans because things that I
						couldn&apos;t have prepared for would arise. I realised I was
						spending too much time rewriting plans and micromanaging the
						tasks I needed to get done, and that I wasn&apos;t working on
						the important things.
					</p>
					<p>
						Over time I tried many different planning tools, but none met
						my needs. Calendars generally require you to input specific
						times (not to mention the tediousness of having to create new
						events) and todo lists don&apos;t often allow you to visualise
						plans or assign time to work on tasks. This is why I created
						Bevl; to facilitate my philosophy of creating visual plans
						that are not too time-specific, but allow for chunks of time
						to be assigned to todos.
					</p>
					<h2>Philosophy</h2>
					<p>
						I believe an effective plan should be accurate enough to guide
						us, but not so precise that it dictates every moment of our
						time. If we include too much detail, we will never be able to
						realistically stick to our goals and will spend more time
						revising our plans than actually carrying them out. This is
						bad for both productivity and mental health.
					</p>
					<p>
						Bevl was created to support this idea that plans should be
						created without assigning tasks to specific times during the
						day, but to appoint time to tasks using arbitrary chunks, with
						the relative sizes of these chunks representing the
						distribution of our time between the tasks. The goal of this
						is to have full organisational control, but to prevent us from
						getting bogged down in details that cause us to overlook the
						unpredictable nature of our todos (which often result in us
						taking longer to do things than we planned and therefore cause
						our plans to constantly need adaptation).
					</p>
				</div>
			</div>
			<CTA independent={true} />
			<div className={aboutStyles["spacer"]} />
		</>
	);
}
