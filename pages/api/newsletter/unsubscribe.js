import { decryptEmail } from "../../../lib/crypto";
import sendinblue from "../../../lib/sendinblue";

export default async function emailHandler(req, res) {
	const { method } = req;
	const { email } = req.body;

	switch (method) {
		case "POST":
			try {
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

				var unlinkListIds = [];
				if (bevlAnnouncements) unlinkListIds.push(6);
				if (productivityTips) unlinkListIds.push(7);

				await sendinblue
					.updateContact(contact, [], unlinkListIds)
					.then((data) => {
						res.status(201).json({ success: true, data: { email } });
					});
			} catch (err) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
