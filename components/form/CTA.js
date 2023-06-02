import { useState } from "react";

import FormInput from "./Input";
import FormButton from "./Button";
import Modal from "./Modal";

import ctaStyles from "../../styles/form/cta.module.css";

import { isEmail } from "../../lib/helpers";
import sendFetchRequest from "../../lib/fetch";
import DrawingsGraphic from "../graphics/Drawings";

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
			<form onSubmit={handleSubmit} className={ctaStyles["container-form"]}>
				<div className={ctaStyles["container-form-input"]}>
					<FormInput
						type={"text"}
						name={"email1"}
						placeholder="Enter email address..."
						required={true}
					/>
					<small>Get a special offer at launch by signing up now.</small>
				</div>
				<div className={ctaStyles["container-form-button"]}>
					<FormButton type={"submit"} light={true}>
						Sign Up
					</FormButton>
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
		);
	else
		return (
			<div className={"container-full " + ctaStyles["container-full"]}>
				<div
					className={"container-partial " + ctaStyles["container-partial"]}
				>
					<div className={ctaStyles["container-content"]}>
						<div className={ctaStyles["container-info"]}>
							<h2 className={ctaStyles["heading"]}>
								Up Your Productivity Game With Bevl
							</h2>
							<form
								onSubmit={handleSubmit}
								className={ctaStyles["container-form"]}
							>
								<div className={ctaStyles["container-form-input"]}>
									<FormInput
										type={"text"}
										name={"email1"}
										placeholder="Enter email address..."
										required={true}
										secondary={true}
									/>
									<small>
										Get a special offer at launch by signing up now.
									</small>
								</div>
								<div className={ctaStyles["container-form-button"]}>
									<FormButton type={"submit"} secondary={true}>
										Sign Up
									</FormButton>
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
						<div className={ctaStyles["container-graphic"]}>
							<DrawingsGraphic />
						</div>
					</div>
				</div>
			</div>
		);
}
