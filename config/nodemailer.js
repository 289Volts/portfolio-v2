import { Email } from "emailTemplate/Email";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass,
	},
});

const emailHtml = render(<Email />);

export const mailOptions = {
	from: email,
	to: email,
	html: emailHtml,
};
