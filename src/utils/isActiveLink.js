export const isActiveLink = ({ isActive }) => {
	const activeStyle = {
		textDecoration: "underline var(--pink)",
		textUnderlineOffset: "5px",
		textDecorationThickness: "3px"
	};
	if (!isActive) return undefined;
	return activeStyle;
};
