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

export async function fetchTranslations(languageCode) {
    const query = `*[_type == "projects"]`;
    const translations = await client.fetch(query);
    
    // Process the retrieved translations if needed (e.g., extract the translated values)
    // Return the translations in a usable format
    
    return translations;
  }