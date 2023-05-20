import Image from "next/image";
import Quote from "public/assets/icons/Quote";

const TestimonialCard = ({ theme, personSrc, currentTheme }) => {
	return (
		<div
			className={`card p-4 py-6 rounded-[1rem] relative flex flex-col gap-4 text-black dark:text-white bg-[#111111] border-[#333] border `}
		>
			<div className="absolute top-[-32px] left-[8px]">
				<Quote fill={currentTheme ? "#111111" : "#fff"} />
			</div>
			<p className="">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at reprehenderit quod nemo debitis dolorum
				ex enim assumenda deleniti sed.
			</p>
			<div className="flex gap-4">
				<Image src={personSrc} alt="reviewer" className="rounded-full" />
				<div className="font-medium">
					<h3 className="text-[1.125rem]">Person's Name</h3>
					<p className="text-sm">Title/Company</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
