import Link from "next/link";
import { useRouter } from "next/router";
import hamburger from "../../../public/assets/icons/layout/hamburger.svg";
import close from "../../../public/assets/icons/layout/close.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";

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
	{
		name: "Instagram",
		path: "https://instagram.com/_289volts",
	},
	{
		name: "LinkedIn",
		path: "https://linkedin.com/in/joshuaroland",
	},
	{
		name: "GitHub",
		path: "https://github.com/289volts",
	},
];

const localAbrrv = ["ENG", "FRA", "ESP", "GER"];

const Header = ({ satoshi }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const showNav = () => {
		setIsMenuOpen(true);
		console.log("show");
	};

	const hide = () => {
		setIsMenuOpen(false);
		console.log("hide");
	};

	const { locale, locales } = useRouter();
	const { t: translate } = useTranslation("header");
	return (
		<header className={`${satoshi}`}>
			<div className="mobile-wrapper relative overflow-x-clip">
				<div className="p-4 flex items-center justify-between">
					<Link href="/" locale={locale} className="text-[1.5rem]">
						289Volts
					</Link>
					<button
						aria-controls="mobile-menu"
						aria-expanded={`${isMenuOpen ? "true" : "false"}`}
						onClick={showNav}
						className=""
					>
						<Image src={hamburger} alt="hamburger" className={`${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
					</button>
				</div>
				{/* Nav Menu */}
				<div
					className={`absolute inset-0 h-[100dvh] transition duration-[400ms] bg-secondary p-5 pl-6  ${
						!isMenuOpen ? "translate-x-[100%] " : "translate-x-0 "
					}`}
				>
					<div className="flex justify-between items-center">
						<Link onClick={hide} href="/" locale={locale} className="text-[1.5rem]">
							289Volts
						</Link>
						<button
							onClick={hide}
							aria-controls="mobile-menu"
							aria-expanded={`${isMenuOpen ? "true" : "false"} `}
							className="bg-white rounded-full w-[40px] aspect-square flex items-center justify-center"
						>
							<Image src={close} alt="close" />
						</button>
					</div>
					<div className="flex flex-col ">
						<div className="nav-top-section">
							<nav className="mt-[3.5rem]">
								<ul className="flex flex-col gap-2">
									{navLinks.map((link) => (
										<li className="" key={link.name}>
											<Link
												onClick={hide}
												href={link.path}
												locale={locale}
												className="nav-link text-[1.4rem] uppercase"
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
								className="block mt-4 px-[14px] py-2 bg-white text-black font-medium w-fit rounded-[5px] text-[1.2rem]"
							>
								{translate("resume")}
							</Link>
						</div>
						{/* This part contains the options to change languages and social links */}
						<div className="nav-bottom-section absolute bottom-[2rem] space-y-7 font-medium">
							<div className="space-y-2">
								<p className="text-sm ">Connect with me</p>
								<div className="grid grid-cols-2 gap-2 gap-y-2">
									{socialLinks.map((link) => (
										<Link
											href={link.path}
											key={link.name}
											className="uppercase border-b-white border-b-2 w-fit"
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
										<Link href="/" locale={locale} key={locale} className="border-b-white border-b-2">
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
