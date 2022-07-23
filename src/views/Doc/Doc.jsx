import { Outlet, useLocation } from "react-router-dom";
import css from "./style.module.css";

export default function Doc() {
	const { pathname } = useLocation();
	return (
		<main className={css.doc}>
			<p
				className={`${css.doc__quote} quote`}
				style={pathname === "/auth" ? { display: "none" } : {}}
			>
				Para realizar peticiones a los endpoints, el usuario necesitará un token
				y enviarlo por headers. Mas información en la sección Auth.
			</p>
			<article className={`${css.doc__intro} article`}>
				<p>
					Esta api fue hecha con fines educativos, de momento tiene poca data,
					sin embargo con el tiempo irá tomando forma.
				</p>

				<a
					className="endpoint"
					rel="noreferrer"
					target="_blank"
					href="https://github.com/edarcode/disneyapi"
				>
					github disneyapi
				</a>
			</article>
			<Outlet />
		</main>
	);
}
