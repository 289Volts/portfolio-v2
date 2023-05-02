import Link from "next/link";
import { useRouter } from "next/router";
import close from "../../../public/assets/icons/layout/close.svg";
import { Sun, Moon, Desktop } from "./assets";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import { useTheme } from "next-themes";

const navLinks = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "about",
		path: "/",
	},
	{
		name: "projects",
		path: "/projects",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

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

const localAbrrv = ["ENG", "FRA", "ESP", "GER"];

const Header = ({ satoshi }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { locale, locales } = useRouter();
	const { t: translate } = useTranslation("header");

	const showNav = () => {
		setIsMenuOpen(true);
		console.log("show");
	};
	const hide = () => {
		setIsMenuOpen(false);
		console.log("hide");
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

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<header className={`${satoshi}`}>
			<div className="mobile-wrapper fixed top-0 left-0 right-0 bg-white/[0.1] backdrop-blur-[2px] md:hidden">
				<div className="p-4 flex items-center justify-between">
					<Link href="/" locale={locale} className="text-[1.5rem] font-medium">
						289Volt<span className="text-sm">⚡</span>
					</Link>

					<div className="dark:bg-slate-800 bg-text duration-100 rounded">
						{options.map((option, index) => (
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
					className={`absolute inset-0 h-[100dvh] transition duration-[400ms] bg-[#FFFEFE] dark:bg-secondary p-5 pl-6  ${
						!isMenuOpen ? "translate-x-[100%] " : "translate-x-0 "
					} flex flex-col`}
				>
					<div className="flex justify-between items-center">
						<Link onClick={hide} href="/" locale={locale} className="text-[1.5rem]">
							289Volts
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
								<ul className="flex flex-col gap-2">
									{navLinks.map((link) => (
										<li className="" key={link.name}>
											<Link
												onClick={hide}
												href={link.path}
												locale={locale}
												className="nav-link text-[1.4rem] uppercase font-medium"
											>
												{translate(link.name)}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<Link
								href=""
								locale={locale}
								className="block mt-4 px-[16px] py-2 bg-black text-white dark:bg-white dark:text-black font-medium w-fit rounded-[5px] text-[1.2rem]"
							>
								{translate("resume")}
							</Link>
						</div>
						{/* This part contains the options to change languages and social links */}
						<div className="nav-bottom-section space-y-7 font-medium">
							<div className="space-y-2">
								<p className="text-sm ">{translate("connect")}</p>
								<div className="grid grid-cols-2 gap-2 gap-y-2">
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
							<div className="space-y-2">
								<p className="text-sm ">{translate("language")}</p>
								<div className="flex items-center gap-4">
									{locales.map((locale) => (
										<Link
											href="/"
											locale={locale}
											key={locale}
											className=" border-b-black dark:border-b-white border-b-2"
										>
											{localAbrrv[locales.indexOf(locale)]}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
