import { useEffect, useRef, useState } from "react";

import faqCardStyles from "../../styles/faq/card.module.css";

export default function faqCard({ question, children }) {
	const [toggle, setToggle] = useState(false);
	const cardRef = useRef();
	const questionHeight = 85;
	const answerRef = useRef();

	function setTabIndex(i) {
		if (answerRef.current.querySelector("a"))
			answerRef.current.querySelector("a").tabIndex = i;
	}

	function activateToggle() {
		setToggle(!toggle);

		if (toggle) {
			cardRef.current.style.height = questionHeight + "px";
			setTabIndex(-1);
		} else {
			cardRef.current.style.height =
				questionHeight +
				answerRef.current.offsetHeight +
				parseFloat(
					window.getComputedStyle(answerRef.current)["marginBottom"]
				) +
				"px";
			setTabIndex(0);
		}
	}

	useEffect(() => {
		setTabIndex(-1);
	}, [answerRef]);

	const getCardStyles = () => {
		if (!toggle) return faqCardStyles["discussion"];
		return (
			faqCardStyles["discussion"] + " " + faqCardStyles["discussion-toggled"]
		);
	};

	return (
		<div
			className={getCardStyles()}
			ref={cardRef}
			style={{ height: questionHeight + "px" }}
		>
			<h3
				className={faqCardStyles["question"]}
				onClick={activateToggle}
				style={{ height: questionHeight + "px" }}
			>
				<i className="bx bx-plus-circle" />
				<span>{question}</span>
			</h3>
			<p className={faqCardStyles["answer"]} ref={answerRef}>
				{children}
			</p>
		</div>
	);
}
