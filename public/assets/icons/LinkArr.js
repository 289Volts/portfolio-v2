const LinkArr = ({ hover }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2.5}
			// stroke="currentColor"
			width="15"
			className={`w-3 h-3 stroke-black dark:stroke-white ${hover} transition duration-300 translate-y-[-0.1rem]`}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	);
};

export default LinkArr;
