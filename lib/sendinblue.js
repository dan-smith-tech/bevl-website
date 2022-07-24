const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

module.exports = {
	sendEmail: function (to, data, templateId) {
		return new Promise(function (resolve, reject) {
			let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
			let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

			if (data.subject) sendSmtpEmail.subject = data.subject;
			sendSmtpEmail.templateId = templateId;
			sendSmtpEmail.sender = { name: "Bevl", email: "info@bevl.app" };
			sendSmtpEmail.to = [{ email: to }];
			sendSmtpEmail.replyTo = { name: "Bevl", email: "info@bevl.app" };
			sendSmtpEmail.params = data;

			apiInstance
				.sendTransacEmail(sendSmtpEmail)
				.then((data) => {
					resolve(data);
				})
				.catch((error) => {
					reject();
					console.error(error);
				});
		});
	},
	doesContactExist: function (email) {
		return new Promise((resolve, reject) => {
			let apiInstance = new SibApiV3Sdk.ContactsApi();

			apiInstance.getContactInfo(email).then(
				function (data) {
					resolve(true);
				},
				function (error) {
					if (error.status === 404) {
						resolve(false);
					} else {
						reject();
						console.error(error);
					}
				}
			);
		});
	},
	addContact: function (contact, addToLists) {
		return new Promise((resolve, reject) => {
			let apiInstance = new SibApiV3Sdk.ContactsApi();
			let createContact = new SibApiV3Sdk.CreateContact();

			createContact.email = contact.email;
			createContact.attributes = contact;
			createContact.listIds = addToLists;

			apiInstance
				.createContact(createContact)
				.then((data) => {
					resolve(data);
				})
				.catch((error) => {
					reject();
					console.error(error);
				});
		});
	},
	updateContact: function (contact, addToLists, removeFromLists) {
		return new Promise((resolve, reject) => {
			let apiInstance = new SibApiV3Sdk.ContactsApi();
			let updateContact = new SibApiV3Sdk.UpdateContact();

			updateContact.attributes = contact;
			updateContact.listIds = addToLists;
			updateContact.unlinkListIds = removeFromLists;

			apiInstance
				.updateContact(contact.email, updateContact)
				.then((data) => {
					resolve(data);
				})
				.catch((error) => {
					reject();
					console.error(error);
				});
		});
	},
};
