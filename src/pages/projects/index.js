import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { client } from "lib/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkArr from "public/assets/icons/LinkArr";

const Projects = ({ fetchedProjects }) => {
	const { t: otherTranslate } = useTranslation("common");
	const { t: translate } = useTranslation("projects");
	const router = useRouter();
	const { locale } = router;
	return (
		<>
			<Head>
				<title>289Volts | Frontend developer</title>
				<meta
					name="description"
					content="I am a frontend developer that can help you retain your customers and make more profit by building well optimized websites and web apps that are functional and accessible."
				/>
				<meta
					name="keywords"
					content="frontend developer, react developer, web developer, web development, web design, website design, website development, web app, web application"
				/>
				<meta name="author" content="289Volts" />
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="pt-[5rem]">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="space-y-2 mb-6">
						<h1 className="text-[2.5rem] font-bold leading-[1.3]">{translate("projectHeading")}</h1>
						<p className="text-[1.1rem]">{translate("projectSubHeading")}</p>
					</div>

					<table className="text-left w-full">
						<thead className="">
							<tr className="text-[1.2rem]">
								<th className="p-5 pl-0">Date</th>
								<th className="p-5 pl-0">Title</th>
								<th className="hidden md:table-cell p-5 pl-0">Description</th>
								<th className="hidden md:table-cell p-5 pl-0">Technologies</th>
								<th className="hidden lg:table-cell p-5 pl-0">Links</th>
							</tr>
						</thead>
						<tbody>
							{fetchedProjects.map((project) => (
								<tr key={project.title} className="align-top">
									<td className="p-5 pl-0 pt-0 whitespace-nowrap">{project.date}</td>
									<td className="p-5 pl-0 pt-0 whitespace-nowrap">
										<Link href={project.slug.current} target="_blank" className="flex lg:hidden gap-[4px] group">
											{project.title[locale]}
											<LinkArr hover="lg:group-hover:translate-y-[-0.2rem]  lg:group-hover:translate-x-[0.2rem]" />
										</Link>
										<p className="hidden lg:block">{project.title[locale]}</p>
									</td>
									<td className="hidden md:table-cell w-[40%] p-5 pl-0 pt-0">{project.description[locale]}</td>

									<td className="hidden md:table-cell p-5 pl-0 pt-0">{project.technologies.join(", ")}</td>
									<td className="hidden lg:table-cell pb-5 align-top">
										<div className="flex gap-4">
											{project.github && (
												<Link href={project.github} target="_blank" className="flex gap-[2px] group">
													<span className="">Code</span>
													<LinkArr hover="group-hover:translate-y-[-0.1rem]  group-hover:translate-x-[0.2rem]" />
												</Link>
											)}
											{project.link && (
												<Link href={project.link} target="_blank" className="flex gap-[2px] group   ">
													<span className="">Preview</span>
													<LinkArr hover="group-hover:translate-y-[-0.1rem]  group-hover:translate-x-[0.2rem]" />
												</Link>
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default Projects;

export const getServerSideProps = async ({ locale, defaultLocale }) => {
	const query = `*[_type == "projects"]`;
	const fetchedProjects = await client.fetch(query);

	return {
		props: {
			fetchedProjects,
			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "projects", "header", "footer"])),
		},
	};
};
