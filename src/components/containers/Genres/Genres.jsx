export default function Genres() {
	return (
		<section>
			<h1>Genres</h1>
			<p>En total hay 4 genres</p>
			<h2>Modelo</h2>
			<table>
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
						<td>name</td>
						<td>string</td>
						<td>Nombre de cada tupla</td>
					</tr>
					<tr>
						<td>img</td>
						<td>string (url)</td>
						<td>Link para img de c/tupla</td>
					</tr>
				</tbody>
			</table>
			<article>
				<h2>POST Genre</h2>
				<p>
					Crear un género enviando por body &quot;name&quot; e &quot;img&quot;.
				</p>
				<p>https://disneyapi2022.herokuapp.com/auth/register</p>
				<img src="/doc/post_genre.png" alt="register" />
			</article>
			<article>
				<h2>GET Genre</h2>
				<p>Consultar todos los géneros.</p>
				<p>https://disneyapi2022.herokuapp.com/genres</p>
				<img src="/doc/get_genres.png" alt="register" />
			</article>
		</section>
	);
}
