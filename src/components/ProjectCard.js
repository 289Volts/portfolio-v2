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
		<div className="border-black border dark:border-white rounded-[1rem] overflow-hidden">
			<div className="flex justify-center p-4 bg-black dark:bg-white">
				<Image src={imgSrc} alt={imgTitle} width={300} height={300} className="projectCard-img" />
			</div>
			<div className="p-4 space-y-3">
				<div className="flex gap-2 items-end">
					<h3 className="text-[1.3rem] font-medium leading-[1]">{title[locale]}</h3>
					<Link
						href={`/projects/${projectSlug}`}
						className="text-[0.8rem] text-primaryLight dark:text-primaryDark flex gap-1"
					>
						<span className="border-b border-b-black dark:border-b-white">View</span>
						<LinkArr />
					</Link>
				</div>
				<p className="text-s font-medium">{description[locale]}</p>
				<div className="space-x-3">
					{technologies.map((tech) => (
						<span className="">{tech}</span>
					))}
				</div>
				<div className="flex gap-4">
					<Link
						href={github}
						target="_blank"
						className="border-b border-b-black dark:border-b-white text-primaryLight dark:text-primaryDark flex gap-1"
					>
						<span className="border-b border-b-black dark:border-b-white">Code</span>
						<LinkArr />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="border-b border-b-black dark:border-b-white text-primaryLight dark:text-primaryDark flex gap-1"
					>
						<span className="border-b border-b-black dark:border-b-white">Preview</span>
						<LinkArr />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
