import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import FeatureSummary from "../components/partials/FeatureSummary";
import TasksGraphic from "../components/graphics/Tasks";
import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";
import Modal from "../components/form/Modal";
import CTA from "../components/form/CTA";
import FAQ from "../components/faq/Index";
import ListsGraphic from "../components/graphics/Lists";
import LabelsGraphic from "../components/graphics/Labels";
import ResourcesGraphic from "../components/graphics/Resources";
import Features from "../components/partials/Features";

import { isEmail } from "../lib/helpers";
import sendFetchRequest from "../lib/fetch";

import "boxicons/css/boxicons.min.css";
import splashStyles from "../styles/splash.module.css";
import ctaStyles from "../styles/form/cta.module.css";

export default function Landing() {
	const splashRef = useRef();
	const backWaveRef = useRef();
	const middleWaveRef = useRef();

	function parallax(element, speed) {
		if (element != null)
			element.style.transform =
				"translateY(" + window.pageYOffset * speed + "px)";
	}

	const infoParallax = () => parallax(splashRef.current, 0.35);
	const backWaveParallax = () => parallax(backWaveRef.current, 0.25);
	const midWaveParallax = () => parallax(middleWaveRef.current, 0.15);

	useEffect(() => {
		if (window.innerWidth > 850) {
			window.addEventListener("scroll", infoParallax);
			window.addEventListener("scroll", backWaveParallax);
			window.addEventListener("scroll", midWaveParallax);

			return () => {
				window.removeEventListener("scroll", infoParallax);
				window.removeEventListener("scroll", backWaveParallax);
				window.removeEventListener("scroll", midWaveParallax);
			};
		}
	}, []);

	// Splash CTA (has to be seperate to prevent transform breaking fixed position)
	const [showModal, setShowModal] = useState(false);
	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email_splash.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest(
				"/api/newsletter/subscribe?optInStage=1&bevlAnnouncements=true",
				"POST",
				{
					email,
				}
			);
			e.target.email_splash.value = null;
		}
	}

	return (
		<>
			<Head>
				<title>
					Bevl • A Minimalist Modern Todo List for Productive Visual Plans
				</title>
				<meta
					property="og:title"
					content="Bevl • A Minimalist Modern Todo List for Productive Visual Plans"
				/>
				<meta
					name="description"
					content="Spend less time planning, and more time doing: drag and drop todos to make visual plans, keep track of random ideas, and sort or filter through all of them."
				/>
				<meta
					property="og:description"
					content="Spend less time planning, and more time doing: drag and drop todos to make visual plans, keep track of random ideas, and sort or filter through all of them."
				/>
			</Head>
			<div
				className={
					"container-full " + splashStyles["container-full-splash"]
				}
			>
				<div
					className={
						splashStyles["wave"] + " " + splashStyles["wave-background"]
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 1440 320"
						ref={backWaveRef}
					>
						<path
							fill="#eaefff"
							fillOpacity="1"
							d="M0,32L34.3,32C68.6,32,137,32,206,26.7C274.3,21,343,11,411,26.7C480,43,549,85,617,96C685.7,107,754,85,823,69.3C891.4,53,960,43,1029,64C1097.1,85,1166,139,1234,170.7C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
						></path>
					</svg>
				</div>
				<div
					className={
						"container-partial " +
						splashStyles["container-partial-splash"]
					}
					ref={splashRef}
				>
					<div className={splashStyles["splash-info"]}>
						<h1 className={splashStyles["heading"]}>
							Spend less time <span>organising</span>,<br />
							and more time <span>doing</span>.
						</h1>
						<h2 className={splashStyles["tagline"]}>
							A minimalist, modern todo list for productive visual plans.
						</h2>
						<form
							onSubmit={handleSubmit}
							className={ctaStyles["container-form"]}
						>
							<div className={ctaStyles["container-form-input"]}>
								<FormInput
									type={"text"}
									name={"email_splash"}
									placeholder="Enter email address..."
									required={true}
								/>
								<small>
									Get a special offer at launch by signing up now.
								</small>
							</div>
							<div className={ctaStyles["container-form-button"]}>
								<FormButton type={"submit"} light={true}>
									Sign Up
								</FormButton>
							</div>
						</form>
					</div>
					<div className={splashStyles["splash-demo"]}>
						<div className={splashStyles["splash-demo-container-image"]}>
							<Image
								src={"/images/screenshots/placeholder.png"}
								alt={"Screenshot of app"}
								layout="fill"
								className={splashStyles["splash-demo-image"]}
								draggable="false"
								quality={50}
								loading={"eager"}
								blurDataURL={
									"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85xNfDwAGIwIqqYhd4AAAAABJRU5ErkJggg=="
								}
								placeholder={"blur"}
							/>
						</div>
					</div>
				</div>
				<div
					className={
						splashStyles["wave"] + " " + splashStyles["wave-middleground"]
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 1440 320"
						ref={middleWaveRef}
					>
						<path
							fill="#fe4c5f"
							fillOpacity="1"
							d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,58.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
				<div
					className={
						splashStyles["wave"] + " " + splashStyles["wave-foreground"]
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 1440 320"
					>
						<path
							fill="#292f44"
							fillOpacity="1"
							d="M0,192L60,202.7C120,213,240,235,360,229.3C480,224,600,192,720,176C840,160,960,160,1080,181.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
			<Modal
				show={showModal}
				onClose={() => setShowModal(false)}
				heading={"Almost there..."}
				body={
					"Thank you for signing up to the newsletter! Please confirm your subscription through the email you have been sent."
				}
				buttonValue={"Okay!"}
			/>
			<Features />
			<FeatureSummary
				heading={"Tasks"}
				description={
					"Plan any todo with 4 unique task types:  Deadlines for longer-term todos, Events for one-off occasions, Habits for routines, and Projects to split up large tasks."
				}
				link={"/demo"}
				image={"/images/screenshots/tasks.png"}
				imageFirst={false}
			>
				<TasksGraphic />
			</FeatureSummary>
			<FeatureSummary
				heading={"Lists"}
				description={
					"Keep track of less structured notes and ideas, without cluttering your todo list. Bookmark websites and files, and filter them on a moodboard-like panel."
				}
				link={"/demo"}
				image={"/images/screenshots/lists.png"}
				imageFirst={true}
			>
				<ListsGraphic />
			</FeatureSummary>
			<FeatureSummary
				heading={"Labels"}
				description={
					"Group Tasks and Lists with customisable tags to filter and organise all of your work and ideas."
				}
				link={"/demo"}
				image={"/images/screenshots/labels.png"}
				imageFirst={false}
			>
				<LabelsGraphic />
			</FeatureSummary>
			<FeatureSummary
				heading={"Resources"}
				description={
					"Learn about the planning philosophy that Bevl was designed to facilitate, or explore the experiences that informed its design."
				}
				link={"/about"}
				image={"/images/screenshots/comingSoon.png"}
				imageFirst={true}
			>
				<ResourcesGraphic />
			</FeatureSummary>
			<CTA independent={true} />
			<FAQ />
		</>
	);
}
