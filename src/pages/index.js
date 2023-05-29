import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import TinyCollapse from "react-tiny-collapse";
import chevron from "../../public/assets/icons/chevron.svg";
import blackChevron from "../../public/assets/icons/blackChev.svg";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
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
import { client } from "lib/client";
import LinkArr from "../../public/assets/icons/LinkArr";
import ProjectCard from "@/components/ProjectCard";
const font = Inter({ subsets: ["latin"] });

export default function Home({ fetchedProjects }) {
	const { t: translate } = useTranslation("home");
	const { t: otherTranslate } = useTranslation("common");
	const [isOpen, setIsOpen] = useState([]);
	const { theme } = useTheme();
	const [isThemeLight, setIsThemeLight] = useState(theme === "light" ? true : false);
	const [screenWidth, setScreenWidth] = useState(1);
	const valueRef = useRef(null);
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const router = useRouter();
	// console.log(fetchedProjects);
	useEffect(() => {
		setIsThemeLight(theme === "light" ? true : false);
	}, [theme]);

	useEffect(() => {
		if (window.innerWidth >= 768) {
			setScreenWidth(2);
		} else if (window.innerWidth >= 1300) {
			setScreenWidth(3);
		}
	}, []);

	// const [translations, setTranslations] = useState(null);

	// useEffect(() => {
	//   const fetchTranslationsAsync = async () => {
	// 	const translations = await fetchTranslations();
	// 	setTranslations(translations);
	//   };

	//   fetchTranslationsAsync();
	// }, [router.locale]);

	// console.log(fetchedProjects);
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

	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop - 72,
			behavior: "smooth",
		});
	};

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
			<section className="pt-[7rem] mb-[4rem flex flex-col lg:h-[60vh]">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="md:w-[75%] space-y-[2.2rem]">
						<div className="space-y-2">
							<h1 className={`${font.className} capitalize text-[2.2rem] font-extrabold leading-[1.25]`}>
								{translate("heroHeading")}{" "}
							</h1>
							<p className="font-medium text-[1.2rem] leading-[1.5]">{translate("heroSubtitle")}</p>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-4 font-bold uppercase">
							<button
								aria-label="navigation-button"
								onClick={() => handleScroll(contactRef)}
								className="w-full font-medium md:w-fit text-center transition duration-[350ms] dark:bg-primaryDark lg:hover:bg-red-700 bg-primaryLight px-4 md:px-6 py-[14px] rounded-[1rem] lg:dark:hover:bg-primaryLight text-white"
							>
								{otherTranslate("cta")}
							</button>
							<button
								aria-label="navigation-button"
								onClick={() => handleScroll(valueRef)}
								className="w-full font-medium md:w-fit text-center transition duration-[350ms] border-2 border-primaryLight dark:border-2 lg:hover:border-2 lg:hover:border-bg-red-500 dark:border-primaryDark px-4 md:px-6 py-[14px] md:py-[12.5px] rounded-[1rem] lg:dark:hover:border-2 lg:dark:hover:border-red-500 dark:text-white"
							>
								{translate("heroCta2")}
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="value" className="" ref={valueRef}>
				<div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-[2rem] lg:flex-row md:justify-between">
					<div className="lg:w-[53%]">
						<h2 className={`${font.className}`}>{translate("valuePropositionHeading")}</h2>
						<div className="mt-2 text-[1.17rem]">
							<div className="space-y-3">
								<p className="">{translate("valuePropositionSubtitle1")}</p>
								<p className="">{translate("valuePropositionSubtitle2")}</p>
								<p className="">{translate("valuePropositionSubtitle3")}</p>
							</div>
							<div className="flex mt-4 gap-4 items-center">
								<Link
									className="text-center uppercase transition duration-[350ms] dark:bg-primaryDark lg:hover:bg-primaryDark bg-primaryLight px-4 py-[15px] rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
									href="/#contact"
								>
									{otherTranslate("cta")}
								</Link>
								<Link
									target="_blank"
									href="https://bit.ly/41YYvoS"
									locale={router.locale}
									className="uppercase font-medium text-center border-2 border-red-500 dark:border-2 lg:hover:border-2 lg:hover:border-primary dark:border-primaryDark px-8 py-[13px] rounded-[1rem] lg:dark:hover:border-2 lg:dark:hover:border-red-500 dark:text-white"
								>
									{translate("resume")}
								</Link>
							</div>
						</div>
					</div>

					<div className="lg:w-[45%]">
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
											} stroke-black dark:stroke-white transition duration-500 w-auto h-auto`}
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
			</section>

			<section className="my-[4rem">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="">
						<h2 className={`${font.className}`}>{translate("testimonialHeading")}</h2>
						<p className="text-[1.17rem]">{translate("testimonialSubtitle")}</p>
					</div>
					<Swiper
						// autoplay={{
						// 	delay: 3000,
						// 	disableOnInteraction: false,
						// }}
						slidesPerView={screenWidth}
						spaceBetween={30}
						centeredSlides={true}
						pagination={{ clickable: true }}
						loop={true}
						modules={[Pagination, Autoplay]}
						className="mySwiper px-8"
					>
						<SwiperSlide>
							<TestimonialCard theme={theme} currentTheme={isThemeLight} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} currentTheme={isThemeLight} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} currentTheme={isThemeLight} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} currentTheme={isThemeLight} />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard theme={theme} currentTheme={isThemeLight} />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<section id="about" className="" ref={aboutRef}>
				<div className="w-[90%] lg:w-[80%] mx-auto lg:flex justify-between gap-10">
					<div className="mb-[1.5rem] lg:w-[50%] xl:w-[49%]">
						<h2 className={`${font.className} mb-2`}>{translate("aboutHeading")}</h2>
						<p className="text-[1.17rem]">{translate("aboutCopy")} </p>
						<div className="flex mt-4 gap-4 items-center">
							<Link
								className="text-center uppercase transition duration-[350ms] dark:bg-primary lg:hover:bg-primary bg-red-600 px-4 py-[15px] rounded-[1rem] lg:dark:hover:bg-red-500 text-white"
								href="/#contact"
							>
								{otherTranslate("cta")}
							</Link>
							<Link
								target="_blank"
								href="https://bit.ly/41YYvoS"
								locale={router.locale}
								className="uppercase font-medium text-center border-2 border-red-500 dark:border-2 lg:hover:border-2 lg:hover:border-primary dark:border-primary px-8 py-[14px] rounded-[1rem] lg:dark:hover:border-2 lg:dark:hover:border-red-500 dark:text-white"
							>
								{translate("resume")}
							</Link>
						</div>
					</div>
					<div className="mt-[2rem] lg:mt-0 lg:w-[45%]">
						<h2 className={`${font.className} mb-4`}>{translate("skills")}</h2>

						<div className="flex flex-wrap justify-between gap-2 gap-y-[1.5rem] md:gap-[2rem] lg:gap-4 md:flex-nowrap lg:flex-wrap">
							{skills.map(({ name, img }, index) => (
								<div
									key={index}
									className="flex flex-col items-center gap-[6px] w-[30%] md:w-[12%] lg:w-[25%] text-center"
								>
									<Image
										src={img}
										alt={name}
										width={90}
										height={60}
										className="rounded-[1rem] p-3 outline-2 outline outline-black/40 dark:outline-transparent bg-white"
									/>
									<p className="font-semibold">{name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="">
				<div className="w-[90%] lg:w-[80%] mx-auto">
					<div className="mb-[2rem]">
						<h2 className={`${font.className}`}>{otherTranslate("projectsHeading")}</h2>
						<p className="text-[1.17rem] leading-[1.5]">{otherTranslate("projectsSubHeading")}</p>
					</div>

					<div className="">
						{fetchedProjects.map((project, index) => (
							<article key={index} className="">
								<ProjectCard project={project} locale={router.locale} />
							</article>
						))}
					</div>
					<Link href="/projects" className="flex gap-1 w-fit mx-auto mt-5">
						<span className="">See all projects</span>
						<LinkArr />
					</Link>
				</div>
			</section>
			<section id="contact" className="mt-[4rem" ref={contactRef}>
				<div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
					<div className="md:flex gap-8 justify-between">
						<div className="mb-[1.5rem] md:mt-9">
							<h2 className={`${font.className} md:text-[3rem] xl:text-[4rem] leading-[1.2] font-black`}>
								{otherTranslate("contactHeading")}
							</h2>
							<p className="text-[1.17rem] md:text-[1.3rem] lg:text-[1.5rem]">{otherTranslate("contactSubHeading")} </p>
						</div>
						<ContactForm />
					</div>
				</div>
			</section>
			{/* {translate("testimonialSubtitle")} */}
		</>
	);
}

// export async function getStaticProps({ locale, defaultLocale }) {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "home", "header", "footer"])),
// 		},
// 	};
// }

export const getServerSideProps = async ({ locale, defaultLocale }) => {
	const query = `*[_type == "projects"]`;
	const fetchedProjects = await client.fetch(query);

	return {
		props: {
			fetchedProjects,
			...(await serverSideTranslations(locale ?? defaultLocale, ["common", "home", "header", "footer"])),
		},
	};
};
