import { useState } from "react";

import FormInput from "../../components/form/Input";
import FormButton from "../../components/form/Button";
import Modal from "../../components/Modal";
import ProductivityTipsSignup from "../../components/ProductivityTipsSignup";

import { isEmail } from "../../lib/helpers";
import sendFetchRequest from "../../lib/fetch";

import newsletterStyles from "../../styles/newsletter.module.css";
import newsletterSignupStyles from "../../styles/productivityTipsSignup.module.css";

function Newsletter() {
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest(
				"/api/newsletter/subscribe?optInStage=1&bevlAnnouncements=true",
				"POST",
				{
					email,
				}
			);
			e.target.email.value = null;
		}
	}

	return (
		<>
			<div
				className={
					"container-full " +
					newsletterSignupStyles["container-full"] +
					" " +
					newsletterStyles["container-full-content"]
				}
			>
				<div
					className={
						"container-partial " +
						newsletterSignupStyles["container-partial"]
					}
				>
					<div className={newsletterSignupStyles["container-info"]}>
						<h2
							className={
								newsletterSignupStyles["container-info-heading"]
							}
						>
							Get Special Offers, and Stay In The Loop
						</h2>
						<p
							className={
								newsletterSignupStyles["container-info-summary"]
							}
						>
							Bevl's <em>Announcements </em> newsletter reveals sneak
							previews of the newest features coming to Bevl, and offers
							exclusive promotions.
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className={newsletterSignupStyles["container-form"]}
					>
						<div
							className={newsletterSignupStyles["container-form-input"]}
						>
							<FormInput
								type={"text"}
								name={"email"}
								placeholder="Enter email..."
								required={"true"}
							/>
							<small>No spam. Unsubscribe at any time.</small>
						</div>
						<div
							className={newsletterSignupStyles["container-form-button"]}
						>
							<FormButton type={"submit"} value="Sign Up" light={true} />
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
			<ProductivityTipsSignup />
		</>
	);
}

export default Newsletter;
