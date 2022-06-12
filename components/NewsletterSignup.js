import React, { useState } from "react";

import FormInput from "./form/Input";
import FormButton from "./form/Button";

import Modal from "./Modal";

import newsletterSignupStyles from "../styles/newsletterSignupStyles.module.css";

import sendFetchRequest from "../lib/fetch";
import isEmail from "../lib/helpers";

export default function NewsletterSignup() {
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest("/api/email?productivityTips=true", "POST", { email: email });
			e.target.email.value = null;
		}
	}

	return (
		<div className={"container-full " + newsletterSignupStyles["container-full"]}>
			<div className={"container-partial " + newsletterSignupStyles["container-partial"]}>
				<div className={newsletterSignupStyles["container-info"]}>
					<h1 className={newsletterSignupStyles["container-info-title"]}>Get Exclusive Productivity Tips, Straight To Your Inbox</h1>
					<p className={newsletterSignupStyles["container-info-summary"]}>
						Bevl's <em>Productive Learning</em> is a no-nonsense, genuine newsletter for productivity enthusiasts.
					</p>
				</div>
				<form onSubmit={handleSubmit} className={newsletterSignupStyles["container-form"]}>
					<div className={newsletterSignupStyles["container-form-input"]}>
						<FormInput type={"text"} name={"email"} placeholder="Enter email..." required={"true"} />
						<small>No spam. Unsubscribe at any time.</small>
					</div>
					<div className={newsletterSignupStyles["container-form-button"]}>
						<FormButton type={"submit"} value="Sign Up" />
						<Modal show={showModal} onClose={() => setShowModal(false)} heading={"Confirm Subscription"} body={"Go to your email and confirm stuff..."} buttonValue={"I've Confirmed My Email"} />
					</div>
				</form>
			</div>
		</div>
	);
}
