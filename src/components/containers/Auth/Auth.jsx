import css from "./style.module.css";

export default function Auth() {
	return (
		<div className="view">
			<h1>Auth</h1>

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
							<td>Identificador único para cada tupla </td>
						</tr>
						<tr>
							<td>email</td>
							<td>string (email)</td>
							<td>Email de cada tupla</td>
						</tr>
						<tr>
							<td>password</td>
							<td>string</td>
							<td>Contraseña encriptada para cada tupla</td>
						</tr>
					</tbody>
				</table>
			</article>

			<article className="article">
				<h2>POST Register</h2>
				<p>Crear registro de usuario.</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/auth/register
				</p>
				<img src="/doc/register.png" alt="register" />
			</article>
			<article className="article">
				<h2>POST Login</h2>
				<p>Crear un token valido por 24h.</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/auth/login
				</p>
				<img src="/doc/login.png" alt="register" />
			</article>
		</div>
	);
}
