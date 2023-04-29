import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ oswald, satoshi, children }) => {
	return (
		<>
			<Header className={satoshi} />
			<main className={`${satoshi} text-white`}>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
