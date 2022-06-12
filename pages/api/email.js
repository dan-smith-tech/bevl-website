const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

export default async function emailHandler(req, res) {
	const { method } = req;
	const { email } = req.body;

	if (req.query.hasOwnProperty("productivityTips") && req.query["productivityTips"] == "true") {
		switch (method) {
			case "POST":
				try {
					let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
					let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

					sendSmtpEmail.templateId = 6;
					sendSmtpEmail.sender = { name: "Bevl", email: "info@bevl.app" };
					sendSmtpEmail.to = [{ email: email }];
					sendSmtpEmail.replyTo = { email: "info@bevl.app", name: "Bevl" };
					sendSmtpEmail.params = { link: "https://open.bevl.app/" + email + "/email?subscribedFromEmail=true&productivityTips=true" };

					apiInstance.sendTransacEmail(sendSmtpEmail).catch((error) => {
						console.error(error);
					});

					res.status(201).json({ success: true, data: { email } });
				} catch (err) {
					console.log(err);
					res.status(400).json({ success: false });
				}
				break;
			default:
				res.status(400).json({ success: false });
				break;
		}
	} else if (req.query.hasOwnProperty("bevlAnnouncements") && req.query["bevlAnnouncements"] == "true") {
		switch (method) {
			case "POST":
				try {
					let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
					let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

					sendSmtpEmail.templateId = 6;
					sendSmtpEmail.sender = { name: "Bevl", email: "info@bevl.app" };
					sendSmtpEmail.to = [{ email: email }];
					sendSmtpEmail.replyTo = { email: "info@bevl.app", name: "Bevl" };
					sendSmtpEmail.params = { link: "https://open.bevl.app/" + email + "/email?subscribedFromEmail=true&bevlAnnouncements=true" };

					apiInstance.sendTransacEmail(sendSmtpEmail).catch((error) => {
						console.error(error);
					});

					res.status(201).json({ success: true, data: { email } });
				} catch (err) {
					console.log(err);
					res.status(400).json({ success: false });
				}
				break;
			default:
				res.status(400).json({ success: false });
				break;
		}
	} else {
		res.status(400).json({ success: false });
	}
}
