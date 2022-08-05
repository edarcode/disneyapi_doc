import css from "./style.module.css";

export default function Films() {
	return (
		<div className={`${css.films} view`}>
			<article className="article">
				<h1>Películas / Series</h1>
				<p>En total hay 8 películas</p>
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
							<td>INTEGER</td>
							<td>Identificador único para cada pelicula / serie </td>
						</tr>
						<tr>
							<td>title</td>
							<td>STRING</td>
							<td>Nombre de cada pelicula / serie</td>
						</tr>
						<tr>
							<td>creationDate</td>
							<td>ONLYDATE</td>
							<td>Fecha de creación para cada pelicula / serie</td>
						</tr>
						<tr>
							<td>score</td>
							<td>REAL</td>
							<td>Calificación para cada pelicula / serie de 1 a 5</td>
						</tr>
						<tr>
							<td>img</td>
							<td>STRING</td>
							<td>Link para img de cada pelicula / serie</td>
						</tr>
						<tr>
							<td>type</td>
							<td>ENUM (&quot;movie&quot;,&quot;serie&quot;)</td>
							<td>Tipo de cada tupla (pelicula o serie).</td>
						</tr>
					</tbody>
				</table>
			</article>

			<article className="article">
				<h2>POST Film</h2>
				<p>Crear registro de una película o serie.</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/movies</p>
				<img src="/doc/create_film.png" alt="crear film" />
			</article>
			<article className="article">
				<h2>GET Films (Todas)</h2>
				<p>
					Consultar todas las películas o series, se entregan paginadas.
					Especifique un query &quot;page&quot; para indicar la página deseada,
					por defecto se entrega la página 0.
				</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/movies</p>
				<ul>
					<li>
						<span>pageCount: Cantidad de páginas.</span>
					</li>
					<li>
						<span>
							filmsPerPage: Cantidad de películas / series que se muestran por
							página.
						</span>
					</li>
					<li>
						<span>
							filmsCount: Cantidad de películas / series que coinciden con la
							búsqueda.
						</span>
					</li>

					<li>
						<span>page: Página actual.</span>
					</li>

					<li>
						<span>films: Información de cada tupla (película / serie).</span>
					</li>
				</ul>
				<img src="/doc/get_all_films.png" alt="consultar todas las films" />
				<p>
					Opcional se puede enviar querys para filtrar u ordenar (type=tipoFilm,
					name=nombre, genre=idGenero, order=ASC|DESC )
				</p>
				<img
					src="/doc/querys_get_all_films.png"
					alt="filtros y ordenado de films"
				/>
				<p>
					Combine tanto como desee, tenga presente que si ninguna tupla coincide
					con la búsqueda la key films será un [ ].
				</p>
			</article>
			<article className="article">
				<h2>GET Film (detalle)</h2>
				<p>
					Consultar detalle de una película o serie junto a los personajes
					asociados. Se tomará como parámetro (idFilm) el valor espeficado al
					final.
				</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/movies/1</p>
				<img
					src="/doc/get_detail_film.png"
					alt="consultar detalle de una film"
				/>
			</article>
			<article className="article">
				<h2>PUT Film</h2>
				<p>
					Actualizar uno o varios campos de película / serie. El id especifica
					la tupla a eliminar, opcionalmente puede enviar por body cualquiera de
					los datos vistos en la captura siguiente (linea 3-7).
				</p>
				<p className="endpoint">https://disneyapi2022.herokuapp.com/movies</p>
				<img src="/doc/update_film.png" alt="actualizar una tupla de film" />
			</article>
			<article className="article">
				<h2>DELETE Film</h2>
				<p>Destruir una película / serie</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/movies?id=1
				</p>
				<img src="/doc/destroy_film.png" alt="eliminar una film" />
			</article>
		</div>
	);
}
