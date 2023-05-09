import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import success from "../../successful.json";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const font = Inter({ subsets: ["latin"] });

export default function Home() {
	const { t: translate } = useTranslation("home");
	const { locale, locales } = useRouter();
	const elementRef = useRef(null);

	useEffect(() => {
		const element = elementRef.current;

		// 	gsap.fromTo(
		// 		element,
		// 		{ opacity: 0, y: 100 },
		// 		{
		// 			opacity: 1,
		// 			y: 0,
		// 			duration: 1,
		// 			ease: "power2.out",
		// 			scrollTrigger: {
		// 				trigger: element,
		// 				start: "top 80%",
		// 				end: "bottom 20%",
		// 				scrub: true,
		// 			},
		// 		}
		// 	);
	}, []);

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
					<div className="flex flex-col md:flex-row items-center gap-4 font-bold uppercase text-sm">
						<Link
							className="w-full md:w-fit text-center transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-3 rounded-3xl lg:dark:hover:bg-red-500 text-white"
							href="/#contact"
						>
							{translate("heroCta1")}
						</Link>
						<Link
							className="w-full md:w-fit text-center transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-3 rounded-3xl lg:dark:hover:bg-red-500 text-white"
							href="/#value"
						>
							{translate("heroCta2")}
						</Link>
					</div>
				</div>
			</section>

			<section className="h-[75dvh]">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<h2 className={`${font.className} text-[1.5rem] font-semibold`}>{translate("valuePropositionHeading")}</h2>
					<div className="">
						<div className="">
							<p className="">{translate("valuePropositionSubtitle1")}</p>
							<p className="">{translate("valuePropositionSubtitle2")}</p>
							<p className="">{translate("valuePropositionSubtitle3")}</p>
						</div>
						<div className="flex">
							<Link
								className="text-center transition duration-[400ms] dark:bg-[#9393F9] lg:hover:bg-[#9393F9] bg-red-600 px-4 py-3 rounded-3xl lg:dark:hover:bg-red-500 text-white"
								href="/#contact"
							>
								{translate("valuePropositionCta")}
							</Link>
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
