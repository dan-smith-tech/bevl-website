import React, { useState } from "react";

import FormInput from "./form/Input";
import FormButton from "./form/Button";

import Modal from "./Modal";

import newsletterSignupStyles from "../styles/ProductivityTipsSignupStyles.module.css";

import sendFetchRequest from "../lib/fetch";
import { isEmail } from "../lib/helpers";

export default function ProductivityTipsSignup() {
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest("/api/newsletter/subscribe?optInStage=1&productivityTips=true", "POST", {
				email,
			});
			e.target.email.value = null;
		}
	}

	return (
		<div className={"container-full " + newsletterSignupStyles["container-full"]}>
			<div className={"container-partial " + newsletterSignupStyles["container-partial"]}>
				<div className={newsletterSignupStyles["container-info"]}>
					<h2 className={newsletterSignupStyles["container-info-heading"]}>
						Get Exclusive Productivity Tips, Straight To Your Inbox
					</h2>
					<p className={newsletterSignupStyles["container-info-summary"]}>
						Bevl's <em>Productive Learning</em> is a no-nonsense, genuine newsletter for productivity
						enthusiasts.
					</p>
				</div>
				<form onSubmit={handleSubmit} className={newsletterSignupStyles["container-form"]}>
					<div className={newsletterSignupStyles["container-form-input"]}>
						<FormInput type={"text"} name={"email"} placeholder="Enter email..." required={"true"} />
						<small>No spam. Unsubscribe at any time.</small>
					</div>
					<div className={newsletterSignupStyles["container-form-button"]}>
						<FormButton type={"submit"} value="Sign Up" />
						<Modal
							show={showModal}
							onClose={() => setShowModal(false)}
							heading={"Confirm Subscription"}
							body={
								"Thank you for signing up to the newsletter! Please confirm your subscription through the email you have been sent."
							}
							buttonValue={"I've Confirmed My Email"}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
