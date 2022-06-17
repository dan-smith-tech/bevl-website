import { decryptEmail } from "../../../lib/crypto";
import { isEmail } from "../../../lib/helpers";
import sendFetchRequest from "../../../lib/fetch";

import newsletterStyles from "../../../styles/newsletter.module.css";

export async function getServerSideProps(context) {
	const { id } = context.query;

	const email = decryptEmail(id);

	const bevlAnnouncements = context.query.bevlAnnouncements == "true" ? true : false;
	const productivityTips = context.query.productivityTips == "true" ? true : false;

	return { props: { id, email, bevlAnnouncements, productivityTips, absoluteUrl: process.env.ABSOLUTE_URL } };
}

function NewsletterUnsubscribeConfirmation(props) {
	const { id, email, bevlAnnouncements, productivityTips, absoluteUrl } = props;

	if (isEmail(email)) {
		sendFetchRequest(
			absoluteUrl +
				"/api/newsletter/unsubscribe?bevlAnnouncements=" +
				bevlAnnouncements +
				"&productivityTips=" +
				productivityTips,
			"POST",
			{
				email: id,
			}
		);

		return (
			<div className={"container-full " + newsletterStyles["container-full"]}>
				<div className={"container-partial " + newsletterStyles["container-partial"]}>
					<h1>You're Unsubscribed</h1>
					<p>I'm sorry to see you go!</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className={"container-full " + newsletterStyles["container-full"]}>
				<div className={"container-partial " + newsletterStyles["container-partial"]}>
					<h1>Unsubscription Failed</h1>
					<p>Please use a valid email address.</p>
				</div>
			</div>
		);
	}
}

export default NewsletterUnsubscribeConfirmation;