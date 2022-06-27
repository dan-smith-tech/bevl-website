import { useState } from "react";

import FormInput from "./form/Input";
import FormButton from "./form/Button";
import Modal from "./Modal";

import ctaStyles from "../styles/cta.module.css";

import { isEmail } from "../lib/helpers";
import sendFetchRequest from "../lib/fetch";

export default function CTA({ independent }) {
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email1
			? e.target.email1.value
			: e.target.email2.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest(
				"/api/newsletter/subscribe?optInStage=1&bevlAnnouncements=true",
				"POST",
				{
					email,
				}
			);
			e.target.email1
				? (e.target.email1.value = null)
				: (e.target.email2.value = null);
		}
	}

	if (!independent)
		return (
			<div>
				<form
					onSubmit={handleSubmit}
					className={ctaStyles["container-form"]}
				>
					<div className={ctaStyles["container-form-input"]}>
						<FormInput
							type={"text"}
							name={"email1"}
							placeholder="Enter email..."
							required={true}
						/>
					</div>
					<div className={ctaStyles["container-form-button"]}>
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
				<small>
					Bevl is launching soon! Sign up to the announcements newsletter
					to get an exclusive deal at launch.
				</small>
			</div>
		);
	else
		return (
			<div className={"container-full " + ctaStyles["container-full"]}>
				<div
					className={"container-partial " + ctaStyles["container-partial"]}
				>
					<h1 className={ctaStyles["heading"]}>
						Up Your Productivity Game With Bevl
					</h1>
					<form
						onSubmit={handleSubmit}
						className={ctaStyles["container-form"]}
					>
						<div
							className={
								ctaStyles["container-form-input"] +
								" " +
								ctaStyles["container-form-input-light"]
							}
						>
							<FormInput
								type={"text"}
								name={"email2"}
								placeholder="Enter email..."
								required={true}
							/>
						</div>
						<div className={ctaStyles["container-form-button"]}>
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
					<small>
						Bevl is launching soon! Sign up to the announcements
						newsletter to get an exclusive deal at launch.
					</small>
				</div>
			</div>
		);
}
