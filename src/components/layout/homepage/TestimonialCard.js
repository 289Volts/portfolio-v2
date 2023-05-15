import Image from "next/image";

const TestimonialCard = ({ quoteSrc, personSrc }) => {
	return (
		<div className="p-4 rounded-[1rem] relative ">
			<Image src={quoteSrc} alt="quotes" className="absolute" />
			<p className="">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at reprehenderit quod nemo debitis dolorum
				ex enim assumenda deleniti sed.
			</p>
			<div className="flex gap-4">
				<Image src={personSrc} alt="quotes" className="rounded-full" />
				<div className="">
					<h3 className="text-sm">Person's Name</h3>
					<p className="text-xs">Title/Company</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
