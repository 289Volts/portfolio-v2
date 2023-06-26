import { urlFor } from "lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkArr from "../../public/assets/icons/LinkArr";

const ProjectCard = ({ project, locale }) => {
	const { bannerImg, description, title, technologies, github, link, slug } = project;

	const imgSrc = urlFor(bannerImg);
	const imgTitle = title;
	const projectSlug = slug.current;
	return (
		<div
			className="border-black border dark:border-white rounded-tr-[1rem] rounded-tl-[1rem] overflow-hidden"
		>
			<div className="flex justify-center p-2 bg-black dark:bg-white">
				<Image
					src={imgSrc}
					alt={imgTitle}
					width={300}
					height={300}
					className="projectCard-img rounded-tr-[1rem] rounded-tl-[1rem]"
				/>
			</div>
			<div className="p-4 py-7 flex flex-col gap-3 font-medium">
				<div className="flex gap-2 items-end">
					<Link
						href={`/projects/${projectSlug}`}
						className="text-[1.3rem] text-primaryLight dark:text-primaryDark leading-[1.3] flex gap-1"
					>
						{title[locale]}
					</Link>
				</div>
				<p className="">{description[locale]}</p>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<span key={tech} className="bg-black dark:bg-white p-2 py-1 rounded-full text-sm text-white dark:text-black font-medium">
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-4 mt-5">
					<Link
						href={github}
						target="_blank"
						className="text-primaryLight dark:text-primaryDark leading-[1.3] flex gap-1"
					>
						<span className="border-b-2 border-b-black dark:border-b-white">Code</span>
						<LinkArr />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="text-primaryLight dark:text-primaryDark leading-[1.3] flex gap-1"
					>
						<span className="border-b-2 border-b-black dark:border-b-white">Preview</span>
						<LinkArr />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
