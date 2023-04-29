import Link from "next/link";
import { useRouter } from "next/router";
import hamburger from "../../../public/assets/icons/layout/hamburger.svg";
import Image from "next/image";

const Header = ({ satoshi }) => {
	const { locale, locales } = useRouter();
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
        <div className="">
          <nav className=""></nav>
        </div>
      </div>
		</header>
	);
};

export default Header;
