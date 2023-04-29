import Link from "next/link";
import { useRouter } from "next/router";
import hamburger from "../../../public/assets/icons/layout/hamburger.svg";
import close from "../../../public/assets/icons/layout/close.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const navLinks = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "about",
		path: "/about",
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

const localAbrrv = ["ENG", "FRA", "ESP", "GER"];

const Header = ({ satoshi }) => {
	const { locale, locales } = useRouter();
	const { t: translate } = useTranslation("header");
	return (
		<header className={`${satoshi}`}>
			<div className="mobile-wrapper relative">
				<div className="p-4 flex items-center justify-between">
					<Link href="/" locale={locale} className="text-[1.5rem]">
						289Volts
					</Link>
					<button className="">
						<Image src={hamburger} alt="hamburger" />
					</button>
				</div>
				{/* Nav Menu Overlay*/}
				<div className="absolute inset-0 h-[100dvh]">
					{/* Nav Menu */}
					<div className="bg-secondary w-[70%] h-full p-5 px-6 relative flex flex-col justify-between">
						<button className="bg-white rounded-full w-[40px] aspect-square flex items-center justify-center absolute right-[-1.2rem]">
							<Image src={close} alt="close" />
						</button>
						<div className="nav-top-section">
							<Link href="/" locale={locale} className="text-[1.5rem]">
								289Volts
							</Link>
							<nav className="mt-5">
								<ul className="flex flex-col gap-5">
									
									{navLinks.map((link) => (
										<li className="">
											<Link href={link.path} locale={locale} className="block">
												{translate(link.name)}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<Link
								href=""
								locale={locale}
								className="block mt-5 px-[14px] py-2 bg-white text-black font-medium w-fit rounded-[5px]"
							>
								{translate("resume")}
							</Link>
						</div>
						{/* This part contains the options to change languages and social links */}
						<div className="nav-bottom-section">
							<div className="space-y-2">
								<p className="text-sm font-medium">Change language</p>
								<div className="flex items-center gap-4">
									{locales.map((locale) => (
										<Link href="/" locale={locale} key={locale} className="border-b-white border-b-2 font-medium">
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
