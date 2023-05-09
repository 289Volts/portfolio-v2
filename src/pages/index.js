import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import TinyCollapse from "react-tiny-collapse";
import chevron from "../../public/assets/icons/chevron.svg";
import blackChevron from "../../public/assets/icons/blackChev.svg";
import success from "../../successful.json";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { t } from "i18next";
import { useTheme } from "next-themes";
const font = Inter({ subsets: ["latin"] });

export default function Home() {
	const { t: translate } = useTranslation("home");
	const [isOpen, setIsOpen] = useState([]);
	const { theme, setTheme } = useTheme();
	// const { locale, locales } = useRouter();
	// const elementRef = useRef(null);

	// useEffect(() => {
	// 	const element = elementRef.current;

	// 	// 	gsap.fromTo(
	// 	// 		element,
	// 	// 		{ opacity: 0, y: 100 },
	// 	// 		{
	// 	// 			opacity: 1,
	// 	// 			y: 0,
	// 	// 			duration: 1,
	// 	// 			ease: "power2.out",
	// 	// 			scrollTrigger: {
	// 	// 				trigger: element,
	// 	// 				start: "top 80%",
	// 	// 				end: "bottom 20%",
	// 	// 				scrub: true,
	// 	// 			},
	// 	// 		}
	// 	// 	);
	// }, []);

	const openAccordion = (index) => {
		const isOpened = isOpen.includes(index);
		setIsOpen(isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]);
	};

	const accordionContent = [
		{
			heading: "benefit1Heading",
			subtitle: "benefit1Subtitle",
		},
		{
			heading: "benefit2Heading",
			subtitle: "benefit2Subtitle",
		},
		{
			heading: "benefit3Heading",
			subtitle: "benefit3Subtitle",
		},
	];

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="h-[100dvh] flex flex-col justify-center md:h-screen">
				<div className="w-[90%] lg:w-[80%] mx-auto space-y-[2.2rem]">
					<div className="space-y-1">
						<h1 className={`${font.className} uppercase text-[2.2rem] font-extrabold leading-[1.25]`}>
							{translate("heroHeading")}{" "}
						</h1>
						<p className="font-medium text-[1.2rem] leading-[1.5]">{translate("heroSubtitle")}</p>
					</div>
					<div className="flex flex-col md:flex-row items-center gap-4 font-bold uppercase">
						<Link
							className="w-full md:w-fit text-center transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-[14px] rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
							href="/#contact"
						>
							{translate("heroCta1")}
						</Link>
						<Link
							className="w-full md:w-fit text-center transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-[14px] rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
							href="/#value"
						>
							{translate("heroCta2")}
						</Link>
					</div>
				</div>
			</section>

			<section id="value" className="h-[75dvh]">
				<div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-[2rem]">
					<div className="">
						<h2 className={`${font.className} text-[1.5rem] font-semibold`}>{translate("valuePropositionHeading")}</h2>
						<div className="mt-2">
							<div className="space-y-2">
								<p className="">{translate("valuePropositionSubtitle1")}</p>
								<p className="">{translate("valuePropositionSubtitle2")}</p>
								<p className="">{translate("valuePropositionSubtitle3")}</p>
							</div>
							<div className="flex mt-3">
								<Link
									className="text-center uppercase transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-3 rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
									href="/#contact"
								>
									{translate("valuePropositionCta")}
								</Link>
							</div>
						</div>
					</div>

					<div className="">
						<h2 className={`${font.className} text-[1.5rem] font-semibold`}>{translate("benefitsHeading")}</h2>
						<div className="space-y-3 mt-2">
							{accordionContent.map(({ heading, subtitle }, index) => (
								<div
									onClick={() => openAccordion(index)}
									key={index}
									className="bg-text dark:bg-[#222] p-5 py-4 rounded-[1rem] cursor-pointer"
								>
									<div className="flex justify-between gap-[3rem]">
										<h3 className="font-semibold text-[1.25rem]">{translate(heading)}</h3>
										<Image
											src={theme !== "light" ? chevron : blackChevron}
											alt="chevron"
											className={`${
												isOpen.includes(index) ? "rotate-[90deg]" : null
											} stroke-black dark:stroke-white transition duration-500`}
										/>
									</div>
									<TinyCollapse isOpen={isOpen.includes(index)}>
										<div className="pt-3 mt-3 border-t border-t-black dark:border-t-white">{translate(subtitle)}</div>
									</TinyCollapse>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* <h1 className="">{translate("h1")} </h1> */}
			</section>
		</>
	);
}

export async function getStaticProps({ locale, defaultLocale }) {
	// console.log(locale);
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "home", "header", "footer"])),
		},
	};
}
