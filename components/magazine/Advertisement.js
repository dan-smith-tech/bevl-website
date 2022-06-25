import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import FormInput from "../form/Input";
import FormButton from "../form/Button";

import Modal from "../Modal";

import advertisementStyles from "../../styles/magazine/advertisement.module.css";

import sendFetchRequest from "../../lib/fetch";
import { isEmail } from "../../lib/helpers";

export default function Advertisement() {
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value;
		if (email.length > 0 && isEmail(email)) {
			setShowModal(true);
			sendFetchRequest("/api/email?bevlAnnouncements=true", "POST", {
				email: email,
			});
			e.target.email.value = null;
		}
	}

	return (
		<div className={advertisementStyles["container"]}>
			<div className={advertisementStyles["container-info"]}>
				<h1 className={advertisementStyles["info-title"]}>
					Up Your Productivity Game
				</h1>
				<p className={advertisementStyles["info-summary"]}>
					With Bevl, don't just set deadlines, plan when you'll do them.
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className={advertisementStyles["container-form"]}
			>
				<div className={advertisementStyles["container-form-input"]}>
					<FormInput
						type={"text"}
						name={"email"}
						placeholder="Enter email..."
						required={true}
					/>
				</div>
				<div className={advertisementStyles["container-form-button"]}>
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
			<small>
				Bevl is launching soon! Sign up to the announcements newsletter to
				get an exclusive deal at launch.
			</small>
			<div className={advertisementStyles["container-image"]}>
				<Link href={"/"}>
					<Image
						src={"/images/logo-complete.svg"}
						layout="fill"
						className={advertisementStyles["image"]}
						draggable="false"
					/>
				</Link>
			</div>
		</div>
	);
}
