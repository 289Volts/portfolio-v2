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
					<div className="">
						<h1 className="">{translate("projectHeading")}</h1>
						<p className="">{translate("projectSubHeading")}</p>
					</div>

					{/* <div className="">
						{fetchedProjects.map((project, index) => (
							<div key={project.name} className="grid grid-cols-4 gap-2">
								<p className="">{project.date}</p>
								<p className="">{project.title[locale]}</p>
								<p className="hidden lg:block">{project.description[locale]}</p>
								<div className="hidden lg:block">
									{project.technologies.map((tech) => (
										<span key={tech} className="">
											{tech}
										</span>
									))}
								</div>
								<div className="">
									<Link href={project.github} target="_blank" className="">
										<span className="">Code</span>
									</Link>
									<Link href={project.link} target="_blank" className="">
										<span className="">Preview</span>
									</Link>
								</div>
							</div>
						))}
					</div> */}

					<table className="text-left w-full">
						<thead className="">
							<tr className="">
								<th className="p-5 pl-0">Date</th>
								<th className="p-5 pl-0">Title</th>
								<th className="hidden md:table-cell p-5 pl-0">Description</th>
								<th className="hidden md:table-cell p-5">Technologies</th>
								<th className="hidden md:table-cell p-5">Links</th>
							</tr>
						</thead>
						<tbody>
							{fetchedProjects.map((project) => (
								<tr key={project.title}>
									<td className="pb-4 pl-0 pt-0 whitespace-nowrap align-top">{project.date}</td>
									<td className="pb-4 pl-0 pt-0 whitespace-nowrap align-top">
										<Link href={project.slug.current} target="_blank" className="flex gap-[4px] group">
											{project.title[locale]}
											<LinkArr hover="lg:group-hover:translate-y-[-0.2rem]  lg:group-hover:translate-x-[0.2rem]" />
										</Link>
									</td>
									<td className="hidden md:table-cell w-[40%] pb-4 pl-0 pt-0 align-top">
										{project.description[locale]}
									</td>

									<td className="hidden md:table-cell py-4 pt-0">{project.technologies.join(", ")}</td>
									<td className="hidden lg:table-cell pb-4">
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

					{/* <table className="border-spacing-x- border-separate text-left w-full">
						<thead className="">
							<tr className="">
								<th className="p-4 pl-0">Date</th>
								<th className="p-4 pl-0">Title</th>
								<th className="hidden md:table-cell p-4 pl-0">Description</th>
								<th className="hidden md:table-cell py-4">Technologies</th>
								<th className="hidden md:table-cell py-4">Links</th>
							</tr>
						</thead>
						<tbody className="">
							{fetchedProjects.map((project, index) => (
								<tr key={project.name} className="">
									<td className="pb-4 pl-0 pt-0 whitespace-nowrap align-top">{project.date}</td>
									<td className="pb-4 pl-0 pt-0 whitespace-nowrap align-top">
										<Link href={project.slug.current} target="_blank" className="flex gap-[4px] group">
											{project.title[locale]}
											<LinkArr hover="lg:group-hover:translate-y-[-0.2rem]  lg:group-hover:translate-x-[0.2rem]" />
										</Link>
									</td>
									<td className="hidden md:table-cell w-1/2 pb-4 pl-0 pt-0 align-top">
										{project.description[locale]}
									</td>

									<td className="hidden md:flex py-4 pt-0">{project.technologies.join(", ")}</td>
									<td className="hidden lg:flex gap-4 pb-4">
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
									</td>
								</tr>
							))}
						</tbody>
					</table> */}
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
