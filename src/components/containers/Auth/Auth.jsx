import css from "./style.module.css";

export default function Auth() {
	return (
		<div className="view">
			<article className="article">
				<h1>Auth</h1>
				<p>
					Para hacer uso de la api es necesario un{" "}
					<a className={`${css.auth__quote} quote`} href="#register">
						registro
					</a>{" "}
					por email , se enviará un correo anunciando el exito del registro.
					Luego para obtener el token debe hacer un{" "}
					<a className={`${css.auth__quote} quote`} href="#login">
						login
					</a>
					. Recuerde enviar el token por headers.
				</p>
			</article>

			<article className="article">
				<h2>Modelo</h2>
				<table className={css.auth__table}>
					<thead>
						<tr>
							<th>Llave (pk)</th>
							<th>Tipo</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>id</td>
							<td>int</td>
							<td>Identificador único para cada usuario </td>
						</tr>
						<tr>
							<td>email</td>
							<td>string (email)</td>
							<td>Email único de cada usuario</td>
						</tr>
						<tr>
							<td>password</td>
							<td>string</td>
							<td>Contraseña encriptada de cada usuario</td>
						</tr>
					</tbody>
				</table>
			</article>

			<article className="article">
				<h2 id="register">POST Register</h2>
				<p>Crear registro de usuario.</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/auth/register
				</p>
				<img src="/doc/register.png" alt="register" />
			</article>
			<article className="article">
				<h2 id="login">POST Login</h2>
				<p>Crear token valido por 24h.</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/auth/login
				</p>
				<img src="/doc/login.png" alt="register" />
			</article>
		</div>
	);
}
