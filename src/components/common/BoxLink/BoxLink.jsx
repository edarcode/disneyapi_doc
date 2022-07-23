import { NavLink } from "react-router-dom";
import { isActiveLink } from "../../../utils/isActiveLink";
import css from "./style.module.css";

export default function BoxLink({ to, text }) {
	return (
		<NavLink
			className={css.link}
			to={to}
			style={({ isActive }) => isActiveLink({ isActive })}
		>
			{text}
		</NavLink>
	);
}
