import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { client } from "lib/client";


const Projects = ({ fetchedProjects }) => {
  const { t: otherTranslate } = useTranslation("common");
  const { t: translate } = useTranslation("common");
	return <div>projects</div>;
};

export default Projects;

export const getServerSideProps = async ({ locale, defaultLocale }) => {
	const query = `*[_type == "projects"]`;
	const fetchedProjects = await client.fetch(query);

	return {
		props: {
			fetchedProjects,
			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "header", "footer"])),
		},
	};
};