import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ alumni, satoshi, children }) => {
	return (
		<>
			<Header font={satoshi} />
			<main className={`${satoshi} dark:text-white space-y-[4rem] mb-[4rem]`}>{children}</main>
			<Footer font={satoshi} />
		</>
	);
};

export default Layout;
