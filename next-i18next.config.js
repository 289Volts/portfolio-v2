const path = require("path");

module.exports = {
	i18n: {
		locales: ["en", "fr", "es", "de"],
		defaultLocale: "en",
		// localePath: path.resolve("./public/locales"),
		localeDetection: false,
		localeExtension: "json",
		reloadOnPrerender: true,
		defaultNs: ["common"],
	},
};
