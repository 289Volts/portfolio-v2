import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
	.object({
		name: yup.string().required("Please provide a name"),
		email: yup
			.string()
			.email()
			.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email")
			.required("Email is required"),
		phone: yup.string().required("Phone number is required"),
		subject: yup.string().required("Please enter the subject of your message"),
		message: yup.string().required("Please leave a message"),
	})
	.required();

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<form action="" className="flex flex-col gap-4 rounded-md" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
					<label htmlFor="name" className="">
						Name
					</label>
					<input {...register("name")} className="" />
					<span className="error-msg">{errors.name?.message}</span>
				</div>
				<div className="form-control">
					<label htmlFor="email" className="">
						Email
					</label>
					<input {...register("email")} className="" />
					<span className="error-msg">{errors.email?.message}</span>
				</div>
				<div className="form-control">
					<label htmlFor="phone" className="">
						Phone
					</label>
					<input {...register("phone")} type="tel" className="" />
					<span className="error-msg">{errors.phone?.message}</span>
				</div>
				<div className="form-control">
					<label htmlFor="subject" className="">
						Subject
					</label>
					<input {...register("subject")} className="" />
					<span className="error-msg">{errors.subject?.message}</span>
				</div>

				<div className="form-control">
					<label htmlFor="message" className="">
						Message
					</label>
					<textarea {...register("message")} rows="7" className="resize-none w-full" />
					<span className="error-msg">{errors.message?.message}</span>
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
