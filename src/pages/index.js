import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import TinyCollapse from "react-tiny-collapse";
import chevron from "../../public/assets/icons/chevron.svg";
import blackChevron from "../../public/assets/icons/blackChev.svg";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { t } from "i18next";
import { useTheme } from "next-themes";
import TestimonialCard from "@/components/homepage/TestimonialCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContactForm from "@/components/ContactForm";
import nextImg from "../../public/assets/images/skills/next.webp";
import nodejsImg from "../../public/assets/images/skills/nodejs.webp";
import tailwindcssImg from "../../public/assets/images/skills/tailwindcss.webp";
import framerImg from "../../public/assets/images/skills/framer.webp";
import firebaseImg from "../../public/assets/images/skills/firebase.webp";
import mongodbImg from "../../public/assets/images/skills/mongodb.webp";
const font = Inter({ subsets: ["latin"] });

export default function Home() {
	const { t: translate } = useTranslation("home");
	const { t: otherTranslate } = useTranslation("common");
	const [isOpen, setIsOpen] = useState([]);
	const { theme} = useTheme();
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

	const skills = [
		{
			name: "Next.js",
			img: nextImg,
		},
		{
			name: "Tailwind CSS",
			img: tailwindcssImg,
		},
		{
			name: "Node.js",
			img: nodejsImg,
		},

		{
			name: "Framer Motion",
			img: framerImg,
		},
		{
			name: "Firebase",
			img: firebaseImg,
		},
		{
			name: "MongoDB",
			img: mongodbImg,
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
					<div className="space-y-2">
						<h1 className={`${font.className} capitalize text-[2.2rem] font-extrabold leading-[1.25]`}>
							{translate("heroHeading")}{" "}
						</h1>
						<p className="font-medium text-[1.2rem] leading-[1.5]">{translate("heroSubtitle")}</p>
					</div>
					<div className="flex flex-col md:flex-row items-center gap-4 font-bold uppercase">
						<Link
							className="w-full font-medium md:w-[25%] lg:w-[20%] text-center transition duration-[350ms] dark:bg-primary lg:hover:bg-primary bg-red-600 px-4 py-[15px] rounded-[1rem] lg:dark:hover:bg-red-500 text-white "
							href="/#contact"
						>
							{otherTranslate("cta")}
						</Link>
						<Link
							className="w-full font-medium md:w-[23%] lg:w-[20%] text-center transition duration-[350ms] border-2 border-red-500 dark:border-2 lg:hover:border-2 lg:hover:border-primary dark:border-primary px-4 py-[14px] rounded-[1rem] lg:dark:hover:border-2 lg:dark:hover:border-red-500 dark:text-white"
							href="/#value"
						>
							{translate("heroCta2")}
						</Link>
					</div>
				</div>
			</section>

			<section id="value" className="">
				<div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-[2rem]">
					<div className="">
						<h2 className={`${font.className}`}>{translate("valuePropositionHeading")}</h2>
						<div className="mt-2">
							<div className="space-y-3">
								<p className="">{translate("valuePropositionSubtitle1")}</p>
								<p className="">{translate("valuePropositionSubtitle2")}</p>
								<p className="">{translate("valuePropositionSubtitle3")}</p>
							</div>
							<div className="flex mt-4">
								<Link
									className="text-center uppercase transition duration-[400ms] dark:bg-primary lg:hover:bg-primary bg-red-600 px-4 py-3 rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
									href="/#contact"
								>
									{otherTranslate("cta")}
								</Link>
							</div>
						</div>
					</div>

					<div className="">
						<h2 className={`${font.className}`}>{translate("benefitsHeading")}</h2>
						<div className="space-y-3 mt-2">
							{accordionContent.map(({ heading, subtitle }, index) => (
								<div
									onClick={() => openAccordion(index)}
									key={index}
									className="bg-text dark:bg-[#222] p-5 py-4 rounded-[1rem] cursor-pointer"
								>
									<div className="flex justify-between gap-[3rem]">
										<h3 className="font-semibold text-[1.125rem]">{translate(heading)}</h3>
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

			<section className="my-[4rem]">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="">
						<h2 className={`${font.className}`}>{translate("testimonialHeading")}</h2>
						<p className="">{translate("testimonialSubtitle")}</p>
					</div>
					<Swiper
						// autoplay={{
						// 	delay: 3000,
						// 	disableOnInteraction: false,
						// }}
						spaceBetween={50}
						centeredSlides={true}
						pagination={{ clickable: true }}
						loop={true}
						modules={[Pagination, Autoplay]}
						className="mySwiper px-8"
					>
						<SwiperSlide>
							<TestimonialCard theme={theme} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<section className="">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="mb-[1.5rem]">
						<h2 className={`${font.className} mb-2`}>{translate("aboutHeading")}</h2>
						<p className="text-[1.12rem]">{translate("aboutCopy")} </p>
						<Link
							className="text-center uppercase transition duration-[400ms] block w-fit mt-4 dark:bg-primary lg:hover:bg-primary bg-red-600 px-4 py-3 rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
							href="/#contact"
						>
							{otherTranslate("cta")}
						</Link>
					</div>
					<div className="mt-[2rem]">
						<h2 className={`${font.className} mb-4`}>{translate("skills")}</h2>

						<div className="flex flex-wrap justify-between gap-2 gap-y-[1.5rem]">
							{skills.map(({ name, img }, index) => (
								<div key={index} className="flex flex-col items-center gap-[6px] w-[48%] lg:w-[25%]">
									<Image
										src={img}
										alt={name}
										width={90}
										height={60}
										className="rounded-[1rem] p-3 outline-2 outline outline-black dark:outline-transparent bg-white"
									/>
									<p className="font-semibold">{name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section id="contact" className="mt-[4rem]">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="mb-[1.5rem]">
						<h2 className={`${font.className}`}>{otherTranslate("contactHeading")}</h2>
						<p className="text-[1.12rem]">{otherTranslate("contactSubHeading")} </p>
					</div>
					<ContactForm />
				</div>
			</section>
			{/* {translate("testimonialSubtitle")} */}
		</>
	);
}

export async function getStaticProps({ locale, defaultLocale }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "home", "header", "footer"])),
		},
	};
}
