const path = require("path");

module.exports = {
	i18n: {
		locales: ["en", "fr", "es", "de"],
		defaultLocale: "en",
		localeDetection: false,
		// localePath: path.resolve("./public/locales"),
		// localeExtension: "json",
		// reloadOnPrerender: true,
		// defaultNs: ["common"],
	},
};
