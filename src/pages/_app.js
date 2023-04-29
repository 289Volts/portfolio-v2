import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};
export default appWithTranslation(App);
