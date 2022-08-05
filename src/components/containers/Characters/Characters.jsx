import css from "./style.module.css";

export default function Characters() {
	return (
		<div className={`${css.films} view`}>
			<article className="article">
				<h1>Personajes</h1>
				<p>En total hay 8 personajes</p>
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
							<td>Identificador único para cada personaje </td>
						</tr>
						<tr>
							<td>name</td>
							<td>STRING</td>
							<td>Nombre de cada personaje</td>
						</tr>
						<tr>
							<td>age</td>
							<td>INTEGER</td>
							<td>Edad de cada personaje</td>
						</tr>
						<tr>
							<td>weight</td>
							<td>REAL</td>
							<td>Peso de cada personaje</td>
						</tr>
						<tr>
							<td>history</td>
							<td>TEXT</td>
							<td>Historia de cada personaje</td>
						</tr>
						<tr>
							<td>img</td>
							<td>STRING</td>
							<td>Link para img de c/personaje</td>
						</tr>
					</tbody>
				</table>
			</article>

			<article className="article">
				<h2>POST Character</h2>
				<p>Crear registro de un personaje.</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/characters
				</p>
				<img src="/doc/create_character.png" alt="crear un character" />
			</article>
			<article className="article">
				<h2>GET Characters (Todos)</h2>
				<p>
					Consultar todos los personajes, se entregan paginados. Especifique un
					query &quot;page&quot; para indicar la página deseada, por defecto se
					entrega la página 0.
				</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/characters
				</p>
				<ul className={css.films__list}>
					<li>
						<span>pageCount: Cantidad de páginas.</span>
					</li>
					<li>
						<span>
							charactersPerPage: Cantidad de personajes que se muestran por
							página.
						</span>
					</li>
					<li>
						<span>
							charactersCount: Cantidad de personajes que coinciden con la
							búsqueda.
						</span>
					</li>

					<li>
						<span>page: Página actual.</span>
					</li>

					<li>
						<span>characters: Información de cada tupla (personaje).</span>
					</li>
				</ul>
				<img
					src="/doc/get_all_characters.png"
					alt="consultar todas los characters con filtros y ordenado"
				/>
				<p>
					Opcional se puede enviar querys para filtrar (name=nombre, age=edad,
					weight=peso, movie=idPelicula | idSerie )
				</p>
				<img
					src="/doc/query_get_all_characters.png"
					alt="filtros y ordenado de films"
				/>
				<p>
					Combine tanto como desee, tenga presente que si ninguna tupla coincide
					con la búsqueda la key characters será un [ ].
				</p>
			</article>
			<article className="article">
				<h2>GET Character (detalle)</h2>
				<p>
					Consultar detalle de un personaje junto a las películas / series
					asociadas. Se tomará como parámetro (idCharacter) el valor espeficado
					al final.
				</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/characters/1
				</p>
				<img
					src="/doc/get_detail_character.png"
					alt="consultar detalle de un character"
				/>
			</article>
			<article className="article">
				<h2>PUT Character</h2>
				<p>
					Actualizar uno o varios campos de un personaje. El id especifica la
					tupla a eliminar, opcionalmente puede enviar por body cualquiera de
					los datos vistos en la captura siguiente (linea 3-7).
				</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/characters
				</p>
				<img src="/doc/update_character.png" alt="actualizar un character" />
			</article>
			<article className="article">
				<h2>DELETE Characters</h2>
				<p>Destruir un personaje</p>
				<p className="endpoint">
					https://disneyapi2022.herokuapp.com/characters?id=1
				</p>
				<img src="/doc/destroy_character.png" alt="eliminar un character" />
			</article>
		</div>
	);
}
