const Hamburger = ({ fill, theme }) => {
	return (
		<svg width="53" height="42" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11 13.25H55V17.6667H11V13.25ZM22 24.2917H55V28.7083H22V24.2917ZM35.75 35.3333H55V39.75H35.75V35.3333Z"
				fill={theme === "system" ? "white" : theme === "light" ? fill : "currentColor"}
			/>
		</svg>
	);
};

export default Hamburger;
