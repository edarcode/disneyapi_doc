import { Outlet, useLocation } from "react-router-dom";
import css from "./style.module.css";

export default function Doc() {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<main className={css.doc}>
			<p
				className={"quote"}
				style={pathname === "/auth" ? { display: "none" } : {}}
			>
				Para realizar peticiones a los endpoints, el usuario necesitará un token
				y enviarlo por headers. Mas información en la sección Auth.
			</p>
			<Outlet />
		</main>
	);
}
