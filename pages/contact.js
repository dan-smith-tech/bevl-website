import { useRef } from "react";
import Head from "next/head";

import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";

import sendFetchRequest from "../lib/fetch";

import contactStyles from "../styles/contact.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function Contact() {
	const contactFormElement = useRef();
	const contactFormLoaderElement = useRef();
	const contactFormMessageElement = useRef();

	function handleContactSubmit(e) {
		e.preventDefault();

		if (!e.target.do_not_check.checked) {
			contactFormElement.current.classList.add(contactStyles["form-sent"]);

			sendFetchRequest("/api/contact", "POST", {
				name: e.target.name.value,
				email: e.target.email.value,
				body: e.target.body.value,
			}).then((res) => {
				contactFormLoaderElement.current.classList.add(
					contactStyles["loading-hidden"]
				);
				contactFormMessageElement.current.innerHTML = res.message;
			});
		}
	}

	return (
		<>
			<Head>
				<title>Bevl • Contact</title>
				<meta property="og:title" content="Bevl • Contact" />
				<meta
					name="description"
					content="Get in contact with Bevl's developer."
				/>
				<meta
					property="og:description"
					content="Get in contact with Bevl's developer."
				/>
			</Head>
			<div
				className={
					"container-full " +
					contactStyles["container-full"] +
					" " +
					detailStyles["container-detail"]
				}
			>
				<div
					className={
						"container-partial " + contactStyles["container-partial"]
					}
				>
					<h1>Contact</h1>
					<form onSubmit={handleContactSubmit} ref={contactFormElement}>
						<div className={contactStyles["form-row"]}>
							<div className={contactStyles["form-element"]}>
								<label htmlFor="name">Name*</label>
								<FormInput
									type="text"
									name="name"
									placeholder="Enter your name..."
									required={true}
								/>
							</div>
							<div className={contactStyles["form-element"]}>
								<label htmlFor="email">Email*</label>
								<FormInput
									type="text"
									name="email"
									placeholder="Enter your email..."
									required={true}
								/>
							</div>
						</div>
						<div className={contactStyles["form-row"]}>
							<div className={contactStyles["form-element"]}>
								<label htmlFor="body">Message*</label>
								<FormInput
									type="textarea"
									name="body"
									placeholder="Enter your message..."
									required={true}
								/>
							</div>
						</div>
						<div className={contactStyles["form-row"]}>
							<input
								type="checkbox"
								name="do_not_check"
								className={"checkbox-hidden"}
								tabIndex={-1}
							/>
							<FormButton type={"submit"}>Send</FormButton>
						</div>
						<div className={contactStyles["form-response"]}>
							<p ref={contactFormMessageElement}></p>
							<div
								id="contact-form-button-loading"
								className={contactStyles["loading"]}
								ref={contactFormLoaderElement}
							>
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
