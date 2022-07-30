import Head from "next/head";
import Script from "next/script";

import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";

import contactStyles from "../styles/contact.module.css";
import buttonStyles from "../styles/form/button.module.css";

function Contact() {
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
				<link
					rel="stylesheet"
					href="https://s.pageclip.co/v1/pageclip.css"
					media="screen"
				/>
			</Head>
			<div className={"container-full " + contactStyles["container-full"]}>
				<div
					className={
						"container-partial " + contactStyles["container-partial"]
					}
				>
					<h1>Contact</h1>
					<Script
						src="https://s.pageclip.co/v1/pageclip.js"
						charset="utf-8"
					/>
					<form
						action="https://send.pageclip.co/tRZk9KV8VnRfjrFiDI6s2h7xHc6onB8a/Contact"
						method={"POST"}
						className="pageclip-form"
					>
						<input type="hidden" name="form-name" value="Contact" />
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
							<button
								type={"submit"}
								className={
									buttonStyles["button"] + " pageclip-form__submit"
								}
							>
								<span>Send Message</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
