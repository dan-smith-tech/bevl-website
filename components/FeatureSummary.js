import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "boxicons/css/boxicons.min.css";
import featureSummaryStyles from "../styles/featureSummary.module.css";

export default function FeatureSummary({
	heading,
	children,
	link,
	image,
	imageFirst,
}) {
	const [intersection, setIntersection] = useState();
	const intersectionDetectorRef = useRef();

	const getTextStyles = () => {
		if (!intersection) return featureSummaryStyles["content-container-text"];
		return (
			featureSummaryStyles["content-container-text"] +
			" " +
			featureSummaryStyles["text-animation"]
		);
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
				<a className={featureSummaryStyles["button"]}>
					Explore <i class="bx bxs-chevron-right"></i>
				</a>
			</Link>
		</div>
	) : (
		<div className={getTextStyles()}>
			<h2>{heading}</h2>
			{children}
		</div>
	);

	const getImageStyles = () => {
		if (!intersection) return featureSummaryStyles["content-container-image"];
		return (
			featureSummaryStyles["content-container-image"] +
			" " +
			featureSummaryStyles["image-animation"]
		);
	};

	const imageElement = (
		<div className={getImageStyles()} ref={intersectionDetectorRef}>
			<Image
				src={image}
				alt={heading + " Demo"}
				layout="fill"
				className={featureSummaryStyles["content-image"]}
				draggable="false"
				quality={50}
				loading={"eager"}
				blurDataURL={
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP85xNfDwAGIwIqqYhd4AAAAABJRU5ErkJggg=="
				}
				placeholder={"blur"}
			/>
		</div>
	);

	if (!imageFirst)
		return (
			<div
				className={
					"container-full " +
					featureSummaryStyles["container-full-content"]
				}
			>
				<div
					className={
						"container-partial " +
						featureSummaryStyles["container-partial-content"]
					}
				>
					{textElement}
					{imageElement}
				</div>
			</div>
		);
	else if (imageFirst)
		return (
			<div
				className={
					"container-full " +
					featureSummaryStyles["container-full-content"]
				}
			>
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
}
