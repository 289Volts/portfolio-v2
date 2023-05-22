import Layout from "@/components/layout/Layout";
import { Oswald, Alumni_Sans } from "@next/font/google";
import localFont from "@next/font/local";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { HeaderProvider } from "context/Header";

const alumni = Alumni_Sans({ subsets: ["latin"] });

const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/Satoshi/Satoshi-Regular.woff2",
			weight: "400",
		},
		{
			path: "../../public/fonts/Satoshi/Satoshi-Medium.otf",
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
		<HeaderProvider>
			<ThemeProvider attribute="class" themes={["light", "dark", "system"]}>
				<Layout alumni={alumni.className} satoshi={satoshi.className}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</HeaderProvider>
	);
};
export default appWithTranslation(App);
