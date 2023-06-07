import { useEffect, useRef, useState } from "react";

import featureStyles from "../../styles/partials/features.module.css";

export default function Features() {
	const featuresIntersectionDetectorRef = useRef();
	const [featuresIntersection, setFeaturesIntersection] = useState();

	const getFeatureStyles = () => {
		if (!featuresIntersection)
			return (
				"container-partial " + featureStyles["container-partial-features"]
			);
		return (
			"container-partial " +
			featureStyles["container-partial-features"] +
			" " +
			featureStyles["features-animation"]
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

		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={
				"container-full " + featureStyles["container-full-features"]
			}
		>
			<div className={getFeatureStyles()}>
				<div
					style={{
						position: "absolute",
						top: "50%",
						visibility: "hidden",
					}}
					ref={featuresIntersectionDetectorRef}
				></div>
				<h2 className={featureStyles["features-title"]}>
					Simple, Personal, Powerful
				</h2>
				<div className={featureStyles["container-partial-features-list"]}>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-hand"></i>
						<p>
							Assign time to work on todos by dragging them into the
							calendar.
						</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-calendar"></i>
						<p>
							Set recurring events to create routines or develop habits.
						</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-extension"></i>
						<p>
							Split larger tasks into smaller tasks to organise
							individually.
						</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-filter-alt"></i>
						<p>Filter and drag tasks using the interactable calendar.</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-customize"></i>
						<p>Keep track of random ideas and notes on custom lists.</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-purchase-tag"></i>
						<p>Group and filter tasks and lists with custom tags.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
