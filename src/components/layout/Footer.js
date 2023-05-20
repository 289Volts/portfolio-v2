import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
	const router = useRouter();
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
		{
			name: "Email",
			path: "mailto:289volts@gmail.com",
		},
  ];
  
  const year = new Date().getFullYear();
	return (
		<footer className="mt-[4rem] bg-black text-white py-[3rem]">
			<div className="w-[90%] lg:w-[80%] mx-auto text-center space-y-6">
				<div className="">
					<Link href="/" locale={router.locale} className="text-[1.5rem] font-medium">
						289Volt<span className="text-sm">⚡</span>
					</Link>
				</div>
				<div className="">
					<p className="font-medium mb-1">Connect with me</p>
					<div className="flex gap-4 justify-center">
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
        <p className="">&copy; {year} | All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
