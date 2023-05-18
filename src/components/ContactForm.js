import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendForm } from "lib/api";
import { useState } from "react";

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup
			.string()
			.email()
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please leave an email i can reply to")
			.required(),
		phone: yup.string().required(),
		subject: yup.string().required(),
		message: yup.string().required(),
	})
	.required();

const ContactForm = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);
		console.log("data");
		reset();
		//     try {
		// 		setIsLoading(true);
		// 		 await sendForm(data);
		//
		// 		setIsSuccess(true);
		// 		setIsLoading(false);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
	};

	return (
		<div>
			<form action="" className="flex flex-col gap-3 rounded-md" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
					<label htmlFor="name" className="">
						Name
					</label>
					<input {...register("name")} className="" />
					<span className="error-msg">{errors.name && "Please leave a name"}</span>
				</div>
				<div className="form-control">
					<label htmlFor="email" className="">
						Email
					</label>
					<input {...register("email")} className="" />
					<span className="error-msg normal-case">{errors.email?.message.replace("email", "Email")}</span>
				</div>
				<div className="form-control">
					<label htmlFor="subject" className="">
						Subject
					</label>
					<input {...register("subject")} className="" />
					<span className="error-msg">{errors.subject && "Your message need a subject"}</span>
				</div>

				<div className="form-control">
					<label htmlFor="message" className="">
						Message
					</label>
					<textarea {...register("message")} rows="7" className="resize-none w-full" />
					<span className="error-msg">{errors.message && "Please leave a message"}</span>
				</div>
				<div className="">
					<button type="submit" className="px-6 py-2 rounded-md bg-red-500 dark:bg-primary font-medium text-white ">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
