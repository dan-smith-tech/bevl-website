export default function sendFetchRequest(route, method, data) {
	// Syntax error reveals server info if not passed in as an object ???
	return new Promise((resolve, reject) => {
		fetch(route, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				resolve(data);
			});
	});
}
