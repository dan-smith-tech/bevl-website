import { useRef, useEffect, useState } from "react";
import Head from "next/head";

import CTA from "../components/CTA";
import FeatureSummary from "../components/FeatureSummary";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

import landingStyles from "../styles/landing.module.css";

function Landing() {
	const featuresIntersectionDetectorRef = useRef();
	const [featuresIntersection, setFeaturesIntersection] = useState();
	const splashContent = useRef();

	const getFeatureStyles = () => {
		if (!featuresIntersection)
			return (
				"container-partial " + landingStyles["container-partial-features"]
			);
		return (
			"container-partial " +
			landingStyles["container-partial-features"] +
			" " +
			landingStyles["features-animation"]
		);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!featuresIntersection && entry.isIntersecting) {
				setFeaturesIntersection(true);
				observer.disconnect();
			}
		});
		observer.observe(featuresIntersectionDetectorRef.current);
	}, []);

	return (
		<>
			<Head>
				<title>Bevl • A Modern Todo List for Productive Visual Plans</title>
				<meta
					property="og:title"
					content="Bevl • A Modern Todo List for Productive Visual Plans"
				/>
				<meta
					name="description"
					content="Spend less time planning, and more time doing. Drag and drop todos to make visual plans, and keep track of wandering ideas. Bevl is an app with a philosophy."
				/>
				<meta
					property="og:description"
					content="Spend less time planning, and more time doing. Drag and drop todos to make visual plans, and keep track of wandering ideas. Bevl is an app with a philosophy."
				/>
				<meta
					property="og:image"
					content="https://bevl.app/images/open-graph/landing.png"
				/>
			</Head>
			<div
				className={
					"container-full " + landingStyles["container-full-splash"]
				}
			>
				<div
					className={
						"container-partial " +
						landingStyles["container-partial-splash"]
					}
					ref={splashContent}
				>
					<h1 className={landingStyles["heading"]}>
						Get Ahead of Life's Endeavors
					</h1>
					<p className={landingStyles["tagline"]}>
						Spend less time planning, and more time doing.
					</p>
					<CTA />
				</div>
			</div>
			<div
				className={"container-full " + landingStyles["container-waves"]}
				tabIndex={-1}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1440 320"
					className={
						landingStyles["wave"] + " " + landingStyles["wave-background"]
					}
				>
					<path
						fill="#f3f3f3"
						fillOpacity="1"
						d="M0,32L34.3,32C68.6,32,137,32,206,26.7C274.3,21,343,11,411,26.7C480,43,549,85,617,96C685.7,107,754,85,823,69.3C891.4,53,960,43,1029,64C1097.1,85,1166,139,1234,170.7C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
					></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1440 320"
					className={
						landingStyles["wave"] +
						" " +
						landingStyles["wave-middleground"]
					}
				>
					<path
						fill="#fe4c5f"
						fillOpacity="1"
						d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,58.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1440 320"
					className={
						landingStyles["wave"] + " " + landingStyles["wave-foreground"]
					}
				>
					<path
						fill="#323a52"
						fillOpacity="1"
						d="M0,192L60,202.7C120,213,240,235,360,229.3C480,224,600,192,720,176C840,160,960,160,1080,181.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
			<div
				className={
					"container-full " +
					landingStyles["container-full-content"] +
					" " +
					landingStyles["container-full-content-dark"] +
					" " +
					landingStyles["container-full-features"]
				}
			>
				<div
					className={getFeatureStyles()}
					ref={featuresIntersectionDetectorRef}
				>
					<h1 className={landingStyles["features-title"]}>
						Simple, Personal, Effective
					</h1>
					<div
						className={landingStyles["container-partial-features-list"]}
					>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#8E44AD" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm11-6h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zM5 7h14v2H5V7z"
								></path>
							</svg>
							<p>
								Assign time to work on todos by dragging them into the
								calendar.
							</p>
						</div>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#E74C3C" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"
								></path>
							</svg>
							<p>
								Set recurring events to create routines or develop
								habits.
							</p>
						</div>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#27AE60" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
								></path>
							</svg>
							<p>
								Split larger tasks into smaller tasks to organise
								individually.
							</p>
						</div>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#3498DB" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm10.707-4.707-1.414 1.414L12 16.414l-2.293 2.293-1.414-1.414L10.586 15l-2.293-2.293 1.414-1.414L12 13.586l2.293-2.293 1.414 1.414L13.414 15l2.293 2.293zM5 7h14v2H5V7z"
								></path>
							</svg>
							<p>
								Filter and drag tasks using the interactable calendar.
							</p>
						</div>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#34495E" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm8 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
								></path>
							</svg>
							<p>
								Keep track of random ideas and notes on custom lists.
							</p>
						</div>
						<div
							className={landingStyles["feature"]}
							style={{ backgroundColor: "#F39C12" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
							>
								<path
									fill="#ffffff"
									fillOpacity="1"
									d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8zM7 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 9z"
								></path>
							</svg>
							<p>Group and filter tasks and lists with custom tags.</p>
						</div>
					</div>
				</div>
			</div>
			<FeatureSummary
				heading={"Tasks"}
				link={"/features/tasks"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Plan any todo with 4 unique task types (Deadlines, Events,
					Habits, Projects) that suit every situation.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Lists"}
				link={"/features/lists"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Keep track of less-organised notes and ideas, without cluttering
					your todo list.
				</p>
			</FeatureSummary>
			<FeatureSummary
				heading={"Labels"}
				link={"/features/labels"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={false}
				dark={false}
			>
				<p>
					Group and filter content with customisable tags, to organise the
					tasks at hand.
				</p>
			</FeatureSummary>
			{/* <Testimonials /> */}
			<FeatureSummary
				heading={"Productivity Resources"}
				link={"/philosophy"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
				dark={false}
			>
				<p>
					Learn about the planning philosophy that Bevl was designed to
					facilitate, or explore the latest issues of the magazine.
				</p>
			</FeatureSummary>
			<CTA independent={true} />
			<FAQ />
		</>
	);
}

export default Landing;
