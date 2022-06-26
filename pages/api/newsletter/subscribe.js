import { encryptEmail, decryptEmail } from "../../../lib/crypto";
import sendinblue from "../../../lib/sendinblue";

export default async function emailHandler(req, res) {
	const { method } = req;
	const { email } = req.body;

	switch (method) {
		case "POST":
			try {
				if (
					req.query.hasOwnProperty("optInStage") &&
					req.query["optInStage"] == "1"
				) {
					var link =
						process.env.ABSOLUTE_URL +
						"/newsletter/subscribe/" +
						encryptEmail(email) +
						"?";

					if (
						req.query.hasOwnProperty("bevlAnnouncements") &&
						req.query["bevlAnnouncements"] == "true"
					)
						link += "bevlAnnouncements=true&";
					if (
						req.query.hasOwnProperty("productivityTips") &&
						req.query["productivityTips"] == "true"
					)
						link += "productivityTips=true&";

					sendinblue.sendEmail(email, { link }, 6);

					res.status(201).json({ success: true, data: { email } });
				} else if (
					req.query.hasOwnProperty("optInStage") &&
					req.query["optInStage"] == "2"
				) {
					var bevlAnnouncements =
						req.query.hasOwnProperty("bevlAnnouncements") &&
						req.query["bevlAnnouncements"] == "true"
							? true
							: false;
					var productivityTips =
						req.query.hasOwnProperty("productivityTips") &&
						req.query["productivityTips"] == "true"
							? true
							: false;

					var contact = {
						email: decryptEmail(email),
					};

					var listIds = [];
					if (bevlAnnouncements) listIds.push(6);
					if (productivityTips) listIds.push(7);

					sendinblue.doesContactExist(contact.email, (exists) => {
						if (!exists) sendinblue.addContact(contact, listIds);
						else sendinblue.updateContact(contact, listIds, []);
					});

					res.status(201).json({ success: true, data: { email } });
				}
			} catch (err) {
				console.log(err);
				res.status(400).json({ success: false, message: err });
			}
			break;
		default:
			res.status(400).json({
				success: false,
				message: "Incorrect request method: " + method,
			});
			break;
	}
}
