import { mailOptions, transporter } from "config/nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
			res.status(422).json({ message: "No Input" });
			return;
		}
		console.log(req.body);
		try {
			await transporter.sendMail({
				...mailOptions,
				subject: data.subject,
				text: data.message + "\n\n" + data.name + "\n" + data.email + "\n" + data.phone,
				html: `<p>${data.message}</p><br/><p>${data.name}</p><p>${data.email}</p><p>${data.phone}</p>`,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	}
	res.status(500).json({ message: "Error sending message" });
}
