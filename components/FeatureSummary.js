import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "boxicons/css/boxicons.min.css";
import featureSummaryStyles from "../styles/featureSummary.module.css";

export default function FeatureSummary({
	heading,
	description,
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
			<p>{description}</p>
			<Link href={link}>
				<a className={featureSummaryStyles["button"]}>
					Explore <i className="bx bxs-chevron-right"></i>
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
		if (!intersection)
			return featureSummaryStyles["content-container-graphic"];
		return (
			featureSummaryStyles["content-container-graphic"] +
			" " +
			featureSummaryStyles["image-animation"]
		);
	};

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
					<div className={getImageStyles()} ref={intersectionDetectorRef}>
						{children}
						<div className={featureSummaryStyles["container-shape"]}>
							<Image
								src={"/images/graphics/Feature-Container.svg"}
								alt={"Container Shape"}
								layout="fill"
								className={featureSummaryStyles["shape"]}
								draggable="false"
								quality={50}
							/>
						</div>
					</div>
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
					<div className={getImageStyles()} ref={intersectionDetectorRef}>
						{children}
						<div
							className={
								featureSummaryStyles["container-shape"] +
								" " +
								featureSummaryStyles["container-shape-rotate"]
							}
						>
							<Image
								src={"/images/graphics/Feature-Container.svg"}
								alt={"Container Shape"}
								layout="fill"
								className={featureSummaryStyles["shape"]}
								draggable="false"
								quality={50}
							/>
						</div>
					</div>
					{textElement}
				</div>
			</div>
		);
}
