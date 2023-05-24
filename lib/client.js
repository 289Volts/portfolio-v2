import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const config = {
	projectId: process.env.NEXT_PUBLIC_PRODUCT_ID,
	dataset: process.env.NEXT_PUBLIC_DATASET || "production",
	apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	ignoreBrowserTokenWarning: true,
};
export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source).url({ useCdn: false });
};
