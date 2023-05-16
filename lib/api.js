export const sendForm = async (data) => {
	fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => {
			if (res.status === 200) {
				res.json();
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
