import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { client } from "lib/client";
import Head from "next/head";

const Projects = ({ fetchedProjects }) => {
	const { t: otherTranslate } = useTranslation("common");
	const { t: translate } = useTranslation("projects");
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

			<section className="">
				<div className="">
					<div className="">
						<h1 className="">{translate("projectHeading")}</h1>
						<p className="">{translate("projectSubHeading")}</p>
					</div>
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
