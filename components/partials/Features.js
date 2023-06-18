import { useEffect, useRef, useState } from "react";

import featureStyles from "../../styles/partials/features.module.css";

export default function Features() {
	const featuresIntersectionDetectorRef = useRef();
	const [featuresIntersection, setFeaturesIntersection] = useState();

	const getFeatureStyles = () => {
		if (!featuresIntersection)
			return "container-partial " + featureStyles["container-partial"];
		return (
			"container-partial " +
			featureStyles["container-partial"] +
			" " +
			featureStyles["animation"]
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
		<div className={"container-full " + featureStyles["container-full"]}>
			<div className={getFeatureStyles()}>
				<div
					className={featureStyles["intersection-dectector"]}
					ref={featuresIntersectionDetectorRef}
				></div>
				<h2>Simple, Personal, Powerful</h2>
				<div className={featureStyles["container-partial-list"]}>
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
							Split big tasks into smaller tasks to organise each
							individually.
						</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-customize"></i>
						<p>Keep track of random ideas and notes on custom lists.</p>
					</div>
					<div className={featureStyles["feature"]}>
						<i className="bx bxs-bookmark-alt"></i>
						<p>
							Group bookmarks for websites and external resources on
							lists.
						</p>
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
