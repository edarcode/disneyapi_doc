import css from "./style.module.css";

export default function Genres() {
	return (
		<div className="view">
			<article className="article">
				<h1>Géneros</h1>
				<p>En total hay 4 genres</p>
			</article>
			<article className="article">
				<h2>Modelo</h2>
				<table className={css.genres__table}>
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
							<td>Identificador único para cada género </td>
						</tr>
						<tr>
							<td>name</td>
							<td>string</td>
							<td>Nombre de cada género</td>
						</tr>
						<tr>
							<td>img</td>
							<td>string (url)</td>
							<td>Link para img de c/género</td>
						</tr>
					</tbody>
				</table>
			</article>

			<article className="article">
				<h2>POST Genre</h2>
				<p>
					Crear un género enviando por body &quot;name&quot; e &quot;img&quot;.
				</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/genres</p>
				<img src="/doc/post_genre.png" alt="register" />
			</article>
			<article className="article">
				<h2>GET Genres</h2>
				<p>Consultar todos los géneros.</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/genres</p>
				<img src="/doc/get_genres.png" alt="register" />
			</article>
		</div>
	);
}
