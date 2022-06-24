import { useRef, useEffect, useState } from "react";

import CTA from "./CTA";

import featureSplashStyles from "../styles/featureSplash.module.css";

function FeatureSplash({ subheading, heading, tagline, demos }) {
	const [currentDemo, setCurrentDemo] = useState(0);
	const reelContainer = useRef();
	var splashContent = useRef();

	const getDemoStyles = (i) => {
		if (i === currentDemo)
			return (
				featureSplashStyles["demo"] +
				" " +
				featureSplashStyles["demo-current"]
			);
		if (Math.abs(i - currentDemo) === 1) {
			if (i < currentDemo)
				return (
					featureSplashStyles["demo"] +
					" " +
					featureSplashStyles["demo-back"] +
					" " +
					featureSplashStyles["demo-back-previous"]
				);
			return (
				featureSplashStyles["demo"] +
				" " +
				featureSplashStyles["demo-back"] +
				" " +
				featureSplashStyles["demo-back-next"]
			);
		}
		return (
			featureSplashStyles["demo"] + " " + featureSplashStyles["demo-hidden"]
		);
	};

	function selectDemo(i) {
		setCurrentDemo((currentDemo) => {
			// var previousVideo = reelContainer.current.children[0].children[currentDemo].children[0];
			// previousVideo.pause();
			// previousVideo.currentTime = 0;

			const demos = reelContainer.current.children[0].children;

			var nextWidth;
			if (i == demos.length - 1) nextWidth = demos[i - 1].clientWidth;
			else if (i == 0) nextWidth = demos[1].clientWidth;
			else if (i > currentDemo) nextWidth = demos[i - 1].clientWidth;
			else nextWidth = demos[i + 1].clientWidth;

			const currentWidth = demos[i].clientWidth;
			const largeWidth = Math.max(nextWidth, currentWidth);
			const smallWidth = Math.min(nextWidth, currentWidth);

			const offset =
				-(i * smallWidth) +
				(reelContainer.current.clientWidth - largeWidth) / 2;
			reelContainer.current.children[0].style.marginLeft = offset + "px";

			// var nextVideo = demos[i].children[0];
			// nextVideo.play();
			// nextVideo.addEventListener("ended", (e) => {});

			return i;
		});
	}

	useEffect(() => {
		selectDemo(1);

		window.addEventListener("resize", () => selectDemo(1));
		return () => {
			window.removeEventListener("resize", () => selectDemo(1));
		};
	}, []);

	return (
		<div className={featureSplashStyles["container-main"]}>
			<div
				className={
					"container-full " + featureSplashStyles["container-full-content"]
				}
				ref={splashContent}
			>
				<div
					className={
						"container-partial " +
						featureSplashStyles["container-partial-content"]
					}
				>
					<h4 className={featureSplashStyles["subheading"]}>
						{subheading}
					</h4>
					<h1 className={featureSplashStyles["heading"]}>{heading}</h1>
					<p className={featureSplashStyles["tagline"]}>{tagline}</p>
					<CTA />
				</div>
			</div>
			<div
				className={
					"container-full " + featureSplashStyles["container-reel"]
				}
				ref={reelContainer}
			>
				<div
					className={
						"container-full " + featureSplashStyles["container-video"]
					}
					style={{ marginLeft: 0 }}
				>
					{demos &&
						demos.map((demo, i) => (
							<div
								className={getDemoStyles(i)}
								onClick={() => selectDemo(i)}
								key={i}
							>
								<video className={featureSplashStyles["demo-video"]}>
									<source src={"/videos/comingSoon.mp4"} />
									{/* + demo.src */}
								</video>
								<h3 className={featureSplashStyles["demo-heading"]}>
									{demo.heading}
								</h3>
							</div>
						))}
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1440 320"
					className={featureSplashStyles["wave"]}
				>
					<path
						fill="#f3f3f3"
						fillOpacity="1"
						d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,58.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default FeatureSplash;
