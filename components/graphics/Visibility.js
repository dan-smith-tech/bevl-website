import { useEffect, useRef, useState } from "react";

import graphicStyles from "../../styles/partials/graphics.module.css";

export default function GraphicVisibility({ children }) {
	const intersectionDetectorRef = useRef();
	const [intersection, setIntersection] = useState(false);

	const getVisibility = () => {
		if (!intersection) return graphicStyles["visibility"];
		else
			return (
				graphicStyles["visibility"] +
				" " +
				graphicStyles["visibility-active"]
			);
	};

	useEffect(() => {
		// watch element to play animation when it loads into the viewport
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!intersection && entry.isIntersecting) {
				setIntersection(true);
				observer.disconnect();
			}
		});
		observer.observe(intersectionDetectorRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div className={getVisibility()}>
			<div
				style={{
					position: "absolute",
					top: "50%",
					visibility: "hidden",
				}}
				ref={intersectionDetectorRef}
			/>
			{children}
		</div>
	);
}
