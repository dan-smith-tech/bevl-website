import { useState } from "react";
import Head from "next/head";

import { isEmail } from "../../lib/helpers";
import sendFetchRequest from "../../lib/fetch";

import FormInput from "../../components/form/Input";
import FormButton from "../../components/form/Button";
import Modal from "../../components/form/Modal";

import newsletterStyles from "../../styles/newsletter.module.css";

export default function Newsletter() {
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
			<Head>
				<title>Bevl • Newsletter</title>
				<meta property="og:title" content="Bevl • Newsletter" />
				<meta
					name="description"
					content="Stay up to date with the latest productivity tips and exclusive offers."
				/>
				<meta
					property="og:description"
					content="Stay up to date with the latest productivity tips and exclusive offers."
				/>
			</Head>
			<div
				className={
					"container-full " +
					newsletterStyles["container-full"] +
					" " +
					newsletterStyles["container-full-content"]
				}
			>
				<div
					className={
						"container-partial " + newsletterStyles["container-partial"]
					}
				>
					<div className={newsletterStyles["container-info"]}>
						<h2 className={newsletterStyles["container-info-heading"]}>
							Get Special Offers, and Stay In The Loop
						</h2>
						<p className={newsletterStyles["container-info-summary"]}>
							Bevl's <em>Announcements </em> newsletter reveals sneak
							previews of the newest features coming to Bevl, and offers
							exclusive promotions.
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className={newsletterStyles["container-form"]}
					>
						<div className={newsletterStyles["container-form-input"]}>
							<FormInput
								type={"text"}
								name={"email"}
								placeholder="Enter email..."
								required={"true"}
							/>
							<small>No spam. Unsubscribe at any time.</small>
						</div>
						<div className={newsletterStyles["container-form-button"]}>
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
		</>
	);
}
