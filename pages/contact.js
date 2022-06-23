import FormInput from "../components/form/Input";
import FormButton from "../components/form/Button";

import contactStyles from "../styles/contact.module.css";

function Contact() {
	return (
		<>
			<div className={"container-full " + contactStyles["container-full"]}>
				<div className={"container-partial " + contactStyles["container-partial"]}>
					<h1>Contact</h1>
					<form
						method={"POST"}
						name={"Contact"}
						netlify={true}
						data-netlify={true}
						netlify-honeypot={"bot-field"}
					>
						<input type="hidden" name="form-name" value="Contact" />
						<div className={contactStyles["form-row"]}>
							<div className={contactStyles["form-element"]}>
								<label htmlFor="name">Name*</label>
								<FormInput type="text" name="name" placeholder="Enter your name..." required={true} />
							</div>
							<div className={contactStyles["form-element"]}>
								<label htmlFor="email">Email*</label>
								<FormInput type="text" name="email" placeholder="Enter your email..." required={true} />
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
							<FormButton type="submit" primary={true} value="Send Message" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
