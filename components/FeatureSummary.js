import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import featureSummaryStyles from "../styles/featureSummary.module.css";

export default function FeatureSummary({ heading, children, link, image, imageFirst, dark }) {
	const [intersection, setIntersection] = useState();
	const intersectionDetectorRef = useRef();

	const getTextStyles = () => {
		if (!intersection) return featureSummaryStyles["content-container-text"];
		return featureSummaryStyles["content-container-text"] + " " + featureSummaryStyles["text-animation"];
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!intersection && entry.isIntersecting) {
				setIntersection(true);
				observer.disconnect();
			}
		});
		observer.observe(intersectionDetectorRef.current);
	}, []);

	const textElement = link ? (
		<div className={getTextStyles()}>
			<h2>{heading}</h2>
			{children}
			<Link href={link}>
				<button>
					Learn More{" "}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path fill="#fe4c5f" fillOpacity="1" d="m19 12-7-6v5H6v2h6v5z"></path>
					</svg>
				</button>
			</Link>
		</div>
	) : (
		<div className={getTextStyles()}>
			<h2>{heading}</h2>
			<p>{children}</p>
		</div>
	);

	const getImageStyles = () => {
		if (!intersection) return featureSummaryStyles["content-container-image"];
		return featureSummaryStyles["content-container-image"] + " " + featureSummaryStyles["image-animation"];
	};

	const imageElement = (
		<div className={getImageStyles()} ref={intersectionDetectorRef}>
			<Image src={image} layout="fill" className={featureSummaryStyles["content-image"]} draggable="false" />
		</div>
	);

	if (!dark && !imageFirst)
		return (
			<div className={"container-full " + featureSummaryStyles["container-full-content"]}>
				<div className={"container-partial " + featureSummaryStyles["container-partial-content"]}>
					{textElement}
					{imageElement}
				</div>
			</div>
		);
	else if (!dark && imageFirst)
		return (
			<div className={"container-full " + featureSummaryStyles["container-full-content"]}>
				<div
					className={
						"container-partial " +
						featureSummaryStyles["container-partial-content"] +
						" " +
						featureSummaryStyles["container-partial-content-reorder"]
					}
				>
					{imageElement}
					{textElement}
				</div>
			</div>
		);
	else if (dark && !imageFirst)
		return (
			<div
				className={
					"container-full " +
					featureSummaryStyles["container-full-content"] +
					" " +
					featureSummaryStyles["container-full-content-dark"]
				}
			>
				<div
					className={
						"container-partial " +
						featureSummaryStyles["container-partial-content"] +
						" " +
						featureSummaryStyles["container-partial-content-dark"]
					}
				>
					{textElement}
					{imageElement}
				</div>
			</div>
		);
	else if (dark && imageFirst)
		return (
			<div
				className={
					"container-full " +
					featureSummaryStyles["container-full-content"] +
					" " +
					featureSummaryStyles["container-full-content-dark"]
				}
			>
				<div
					className={
						"container-partial " +
						featureSummaryStyles["container-partial-content"] +
						" " +
						featureSummaryStyles["container-partial-content-dark"] +
						" " +
						featureSummaryStyles["container-partial-content-reorder"]
					}
				>
					{imageElement}
					{textElement}
				</div>
			</div>
		);
}
