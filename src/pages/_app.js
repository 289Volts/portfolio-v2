import Layout from "@/components/layout/Layout";
import { Oswald } from "@next/font/google";
import localFont from "@next/font/local";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";

const oswald = Oswald({ subsets: ["latin"] });

const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/Satoshi/Satoshi-Regular.woff2",
			weight: "400",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Medium.woff2",
			weight: "500",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Bold.woff2",
			weight: "700",
		},
	],
});
const App = ({ Component, pageProps }) => {
	return (
		<Layout oswald={oswald.className} satoshi={satoshi.className}>
			<Component {...pageProps} />
		</Layout>
	);
};
export default appWithTranslation(App);
