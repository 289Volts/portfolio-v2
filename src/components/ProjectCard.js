import { urlFor } from "lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({project, locale}) => {
    const { bannerImg, description, title, technologies, github, link, slug } = project

    const imgSrc = urlFor(bannerImg)
    const imgTitle = title
    const projectSlug = slug.current
	return (
		<div className="">
			<Image src={imgSrc} alt={imgTitle} width={300} height={300} className="projectCard-img" />
			<div className="">
				<div className="flex items-center justify-between">
					<h3 className="">{title[locale]}</h3>
					<Link href={`/projects/${projectSlug}`} className="">
						View
					</Link>
				</div>
				<p className="">{description[locale]}</p>
				<div className="space-x-3">
					{technologies.map((tech) => (
						<span className="">{tech}</span>
					))}
				</div>
				<div className="flex items-center justify-between">
					<Link href={github} target="_blank">
						Code
					</Link>
					<Link href={link} target="_blank">
						Preview
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
