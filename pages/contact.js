import Head from "next/head";
import Script from "next/script";

import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";

import contactStyles from "../styles/contact.module.css";
import detailStyles from "../styles/partials/detail.module.css";

export default function Contact() {
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
					<form action="/api/contact" method={"POST"}>
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
							<FormButton type={"submit"}>Send</FormButton>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
