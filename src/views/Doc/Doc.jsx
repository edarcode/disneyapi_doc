import { Outlet } from "react-router-dom";

export default function Doc() {
	return (
		<main>
			<div>
				Para realizar peticiones a los endpoints, el usuario deberá contar con
				un token y cual será pasado por headers. Mas información en la sección
				de auth presente en el menú.
			</div>
			<Outlet />
		</main>
	);
}
