import Link from "next/link";
import { useRouter, Router } from "next/router";
import close from "../../../public/assets/icons/layout/close.svg";
import english from "../../../public/assets/icons/layout/english.svg";
import french from "../../../public/assets/icons/layout/french.svg";
import german from "../../../public/assets/icons/layout/german.svg";
import spanish from "../../../public/assets/icons/layout/spanish.svg";
import { Sun, Moon, Desktop } from "./assets";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import { useTheme } from "next-themes";

const socialLinks = [
	{
		name: "Twitter",
		path: "https://twitter.com/289volts",
	},
	,
	{
		name: "GitHub",
		path: "https://github.com/289volts",
	},
	,
	{
		name: "LinkedIn",
		path: "https://linkedin.com/in/joshuaroland",
	},
	{
		name: "Instagram",
		path: "https://instagram.com/_289volts",
	},
];

const localAbrrv = [
	{ lang: "English", image: english, abbrv: "en" },
	{ lang: "Français", image: french, abbrv: "fr" },
	{ lang: "Español", image: spanish, abbrv: "es" },
	{ lang: "Deutsch", image: german, abbrv: "de" },
];

const Header = ({ satoshi, font }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const router = useRouter();
	const { t: translate } = useTranslation("header");

	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);

	const showNav = () => {
		setIsMenuOpen(true);
		// document.body.classList.add("fixedBody");
	};
	const hide = () => {
		setIsMenuOpen(false);
		// document.body.classList.remove("fixedBody");
	};

	const options = [
		{
			icon: <Sun theme={theme} fill={"rgb(2 132 199)"} />,
			text: "light",
		},
		{
			icon: <Moon theme={theme} fill={"rgb(2 132 199)"} />,
			text: "dark",
		},
		{
			icon: <Desktop theme={theme} fill={"rgb(2 132 199)"} />,
			text: "system",
		},
	];

	const navLinks = [
		{
			name: "home",
			path: "/",
		},
		{
			name: "about",
			path: "/#about",
			ref: aboutRef,
		},
		{
			name: "projects",
			path: "/projects",
		},
		{
			name: "contact",
			path: "/#contact",
			ref: contactRef,
		},
	];

	const hideLang = () => {
		setIsLangOpen(false);
	};

	const showLang = () => {
		setIsLangOpen(true);
		if (isLangOpen) {
			hideLang();
		}
	};

	const handleScroll = (ref) => {
		// window.scrollTo({
		// 	top: ref.current.offsetTop - 72,
		// 	behavior: "smooth",
		// });
		document.getElementById(ref.current.id).scrollIntoView({ behavior: "smooth" });

		console.log(ref);
	};
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<header className={`${font} sticky top-0 left-0 z-[2] w-full`}>
			<div className="mobile-wrapper bg-white/[0.1] backdrop-blur-[8px] md:hidden">
				<div className="p-3 flex items-center justify-between">
					<Link href="/" locale={router.locale} className="text-[1.5rem] font-medium">
						289Volt<span className="text-sm">⚡</span>
					</Link>

					<div className="dark:bg-slate-800 bg-text duration-100 rounded-full px-1">
						{options.map((option) => (
							<button onClick={() => setTheme(option.text)} key={option.text} className="w-5 h-5 rounded-full m-2">
								{option.icon}
							</button>
						))}
					</div>
					<button
						aria-controls="mobile-menu"
						aria-expanded={`${isMenuOpen ? "true" : "false"}`}
						onClick={showNav}
						className=""
					>
						<Hamburger fill={"black"} theme={theme} />
					</button>
				</div>
				{/* Nav Menu */}
				<div
					id="nav-menu"
					className={`absolute z-[100] inset-0 h-[100dvh] transition duration-[400ms] p-5 pl-6  ${
						!isMenuOpen ? "translate-x-[-100%] " : "translate-x-0 "
					} flex flex-col`}
				>
					<div className="flex justify-between items-center">
						<Link onClick={hide} href="/" locale={router.locale} className="text-[1.5rem] font-medium">
							289Volt<span className="text-sm">⚡</span>
						</Link>
						<button
							onClick={hide}
							aria-controls="mobile-menu"
							aria-expanded={`${isMenuOpen ? "true" : "false"}`}
							className="bg-white rounded-full w-[40px] aspect-square flex items-center justify-center border-black border-[1.5px]"
						>
							<Image src={close} alt="close" />
						</button>
					</div>
					<div className="flex flex-col h-full justify-between">
						<div className="nav-top-section">
							<nav className="mt-[3.5rem]">
								<ul className="flex flex-col gap-6">
									{navLinks.map((link) => (
										<li className="" key={link.name}>
											<Link
												onClick={hide}
												href={link.path}
												locale={router.locale}
												className="nav-link text-[1.9rem] uppercase font-medium"
											>
												{translate(link.name)}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<Link
								href=""
								locale={router.locale}
								className="block mt-6 px-[16px] py-[14px] bg-black text-white dark:bg-white dark:text-black font-medium w-fit rounded-[5px] text-[1.5rem]"
							>
								{translate("resume")}
							</Link>
						</div>
						{/* This part contains the options to change languages and social links */}
						<div className="nav-bottom-section space-y-7 font-medium">
							<div className="space-y-2">
								<p className="text-sm font-medium">
									{translate("language")} : {localAbrrv[router.locales.indexOf(router.locale)].lang}
								</p>
								<div className="flex items-center gap-4">
									{router.locales.map((locale) => (
										<Link href="/" locale={locale} key={locale} className={`flex items-center `}>
											<Image
												src={
													locale === "en"
														? english
														: locale === "fr"
														? french
														: locale === "es"
														? spanish
														: locale === "de" && german
												}
												alt={locale}
												key={locale}
												className="w-7 "
											/>
										</Link>
									))}
								</div>
							</div>
							<div className="space-y-1">
								<p className="text-sm font-medium">{translate("connect")}</p>
								<div className="grid grid-cols-2 gap-2 gap-y-2 w-[60%]">
									{socialLinks.map((link) => (
										<Link
											href={link.path}
											key={link.name}
											className="uppercase border-b-black dark:border-b-white border-b-2 w-fit"
											target="_blank"
										>
											{link.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="desktop-wrapper bg-white/[0.1] backdrop-blur-[8px] hidden md:block">
				<div className="w-[90%] lg:w-[80%] mx-auto py-3 flex items-center justify-between transition duration-300">
					<Link href="/" locale={router.locale} className="text-[1.5rem] font-medium">
						289Volt<span className="text-sm">⚡</span>
					</Link>

					<div className="flex items-center gap-5 p-[10px] py-2 px-2 pr-[14px] dark:bg-white/[0.1] bg-[#f0eeee] rounded-full">
						<div className="dark:bg-slate-800 bg-[#e1dfdf] duration-100 rounded-full flex items-center">
							{options.map((option) => (
								<button
									title={`${option.text} theme`}
									onClick={() => setTheme(option.text)}
									key={option.text}
									className="w-5 h-5 rounded-full m-[7px]"
								>
									{option.icon}
								</button>
							))}
						</div>
						<nav className="">
							<ul className="flex gap-4 lg:gap-5">
								{navLinks.map((link) => (
									<li className="" key={link.name}>
										<Link
											href={link.path}
											locale={router.locale}
											className={`${
												router.asPath === link.path ? "border-b-[2px] border-b-black dark:border-b-white" : ""
											} uppercase font-medium relative before:w-full before:h-[1.5px] before:bg-black before:dark:bg-white before:absolute before:bottom-[-2px] before:left-0 before:transform before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 before:origin-left`}
										>
											{translate(link.name)}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className="relative">
							<button
								title="Change Language"
								id="languageChangeToggle"
								className="flex items-center"
								onClick={() => showLang()}
							>
								<Image
									src={
										router.locale === "en"
											? english
											: router.locale === "fr"
											? french
											: router.locale === "es"
											? spanish
											: router.locale === "de" && german
									}
									alt={router.locale}
									key={router.locale}
									className="w-7 "
								/>
							</button>
							<ul
								aria-labelledby="languageChangeToggle"
								className={`absolute top-[120%] right-0 bg-white w-[120px] px-3 py-2 space-y-3 border border-black rounded ${
									isLangOpen ? "visible" : "invisible"
								}`}
							>
								{router.locales.map(
									(locale) =>
										router.locale !== locale && (
											<li className="" key={locale}>
												<Link
													onClick={() => hideLang()}
													href="/"
													locale={locale}
													className="flex items-center gap-3  text-black font-medium"
												>
													<span className=""> {localAbrrv[router.locales.indexOf(locale)].lang}</span>
													<Image
														src={
															locale === "en"
																? english
																: locale === "fr"
																? french
																: locale === "es"
																? spanish
																: locale === "de" && german
														}
														alt={router.locale}
														key={router.locale}
														className="w-7 "
													/>
												</Link>
											</li>
										)
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
