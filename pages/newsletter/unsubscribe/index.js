import { useRouter } from "next/router";

import FormButton from "../../../components/form/Button";

import { encryptEmail } from "../../../lib/crypto";
import { isEmail } from "../../../lib/helpers";

import newsletterStyles from "../../../styles/newsletter.module.css";

export async function getServerSideProps(context) {
	const email = context.query.email ? context.query.email : null;
	const id = encryptEmail(email);

	const bevlAnnouncements = context.query.bevlAnnouncements == "true" ? true : false;
	const productivityTips = context.query.productivityTips == "true" ? true : false;

	return { props: { id, email, bevlAnnouncements, productivityTips, absoluteUrl: process.env.ABSOLUTE_URL } };
}

function NewsletterUnsubscribe(props) {
	const { id, email, bevlAnnouncements, productivityTips, absoluteUrl } = props;
	const router = useRouter();

	if (isEmail(email)) {
		function handleSubmit(e) {
			e.preventDefault();
			var link =
				absoluteUrl +
				"/newsletter/unsubscribe/" +
				id +
				"?bevlAnnouncements=" +
				bevlAnnouncements +
				"&productivityTips=" +
				productivityTips;

			router.push(link);
		}

		return (
			<div className={"container-full " + newsletterStyles["container-full"]}>
				<div className={"container-partial " + newsletterStyles["container-partial"]}>
					<h1>Confirm Unsubscription</h1>
					<p>Click below to confirm your unsubscription.</p>
					<form onSubmit={handleSubmit}>
						<div className={newsletterStyles["container-form-button"]}>
							<FormButton type={"submit"} value="Unsubscribe" light={true} />
						</div>
					</form>
				</div>
			</div>
		);
	} else {
		return (
			<div className={"container-full " + newsletterStyles["container-full"]}>
				<div className={"container-partial " + newsletterStyles["container-partial"]}>
					<h1>Error</h1>
					<p>Please use a valid email address.</p>
				</div>
			</div>
		);
	}
}

export default NewsletterUnsubscribe;
