import { useState } from "react";
import Head from "next/head";

import { isEmail } from "../../lib/helpers";
import sendFetchRequest from "../../lib/fetch";

import FormInput from "../../components/form/Input";
import FormButton from "../../components/form/Button";
import Modal from "../../components/form/Modal";

import newsletterStyles from "../../styles/newsletter.module.css";
import detailStyles from "../../styles/partials/detail.module.css";

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
					newsletterStyles["container-full-content"] +
					" " +
					detailStyles["container-detail"]
				}
			>
				<div
					className={
						"container-partial " + newsletterStyles["container-partial"]
					}
				>
					<div className={newsletterStyles["container-info"]}>
						<h1>Stay in the loop</h1>
						<p>
							While you wait for Bevl to launch (soon!), why not sign up
							to the newsletter to stay up to date with all the
							development news - and to get a special offer at launch!
						</p>
						<p>
							Bevl's Announcements newsletter reveals sneak previews of
							the newest features coming to Bevl, and offers exclusive
							promotions.
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
								placeholder="Enter email address..."
								required={true}
							/>
							<small>
								Get a special offer at launch by signing up now.
							</small>
						</div>
						<div className={newsletterStyles["container-form-button"]}>
							<FormButton type={"submit"}>Sign Up</FormButton>
							<Modal
								show={showModal}
								onClose={() => setShowModal(false)}
								heading={"Almost there..."}
								body={
									"Thank you for signing up to the newsletter! Please confirm your subscription through the email you have been sent."
								}
								buttonValue={"Okay!"}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
