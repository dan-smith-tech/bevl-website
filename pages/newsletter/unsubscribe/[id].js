import Head from "next/head";

import { decryptEmail } from "../../../lib/crypto";
import { isEmail } from "../../../lib/helpers";
import sendFetchRequest from "../../../lib/fetch";

import newsletterStyles from "../../../styles/newsletter.module.css";
import detailStyles from "../../../styles/partials/detail.module.css";

export async function getServerSideProps(context) {
	const { id } = context.query;
	const email = decryptEmail(id);

	const bevlAnnouncements =
		context.query.bevlAnnouncements == "true" ? true : false;
	const productivityTips =
		context.query.productivityTips == "true" ? true : false;

	return {
		props: {
			id,
			email,
			bevlAnnouncements,
			productivityTips,
			absoluteUrl: process.env.ABSOLUTE_URL,
		},
	};
}

export default function NewsletterUnsubscribeConfirmation(props) {
	const { id, email, bevlAnnouncements, productivityTips, absoluteUrl } =
		props;

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
			<>
				<Head>
					<title>Bevl • Newsletter Unsubscribe</title>
				</Head>
				<div
					className={
						"container-full " +
						newsletterStyles["container-full"] +
						" " +
						detailStyles["container-detail"]
					}
				>
					<div
						className={
							"container-partial " +
							newsletterStyles["container-partial"] +
							" " +
							newsletterStyles["container-confirm"]
						}
					>
						<h1>You're Unsubscribed</h1>
						<p>Sorry to see you go!</p>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<Head>
					<title>Bevl • Newsletter Unsubscribe</title>
				</Head>
				<div
					className={
						"container-full " + newsletterStyles["container-full"]
					}
				>
					<div
						className={
							"container-partial " +
							newsletterStyles["container-partial"]
						}
					>
						<h1>Unsubscription Failed</h1>
						<p>Please use a valid email address.</p>
					</div>
				</div>
			</>
		);
	}
}
