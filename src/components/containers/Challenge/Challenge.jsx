import css from "./style.module.css";
export default function Challenge() {
	return (
		<article className="article">
			<h1>Objetivo</h1>
			<p>
				Desarrollar una API para explorar el mundo de Disney, la cual permitirá
				conocer y modificar los personajes que lo componen y entender en qué
				películas estos participaron. Por otro lado, deberá exponer la
				información para que cualquier frontend pueda consumirla.
			</p>
			<ul>
				<li>Utilizar Nodejs y Express.</li>
				<li>No es necesario armar el Frontend.</li>
				<li>Las rutas deberán seguir el patrón REST.</li>
				<li>Utilizar la librería Sequelize</li>
			</ul>
			<h2 className={css.title}>Requerimientos técnicos 🧐</h2>
			<ol className="listOl">
				<li>
					<h3>Modelado de Base de Datos</h3>
					<ul>
						<li>
							<p>Personaje: deberá tener,</p>
							<ul>
								<li>Imagen.</li>
								<li>Nombre.</li>
								<li>Edad.</li>
								<li>Peso.</li>
								<li>Historia.</li>
								<li>Películas o series asociadas.</li>
							</ul>
						</li>
						<li>
							<p>Película o Serie: deberá tener,</p>
							<ul>
								<li>Imagen.</li>
								<li>Título.</li>
								<li>Fecha de creación.</li>
								<li>Calificación (del 1 al 5).</li>
								<li>Personajes asociados.</li>
							</ul>
						</li>
						<li>
							<p>Género: deberá tener,</p>
							<ul>
								<li>Nombre.</li>
								<li>Imagen.</li>
								<li>Películas o series asociadas.</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<h3>Autenticación de Usuarios</h3>
					<p>
						Para realizar peticiones a los endpoints subsiguientes el usuario
						deberá contar con un token que obtendrá al autenticarse. Para ello,
						deberán desarrollarse los endpoints de registro y login, que
						permitan obtener el token.
					</p>
					<p>Los endpoints encargados de la autenticación deberán ser:</p>
					<ul>
						<li>/auth/login</li>
						<li>/auth/register</li>
					</ul>
				</li>
				<li>
					<h3>Listado de Personajes</h3>
					<p>El listado deberá mostrar:</p>
					<ul>
						<li>Imagen.</li>
						<li>Nombre.</li>
					</ul>
					<p>El endpoint deberá ser:</p>
					<ul>
						<li>/characters</li>
					</ul>
				</li>
				<li>
					<h3>Creación, Edición y Eliminación de Personajes (CRUD)</h3>
					<p>
						Deberán existir las operaciones básicas de creación, edición y
						eliminación de personajes.
					</p>
				</li>
				<li>
					<h3>Detalle de Personaje</h3>
					<p>
						En el detalle deberán listarse todos los atributos del personaje,
						como así también sus películas o series relacionadas.
					</p>
				</li>
				<li>
					<h3>Búsqueda de Personajes</h3>
					<p>
						Deberá permitir buscar por nombre, y filtrar por edad, peso o
						películas/series en las que participó. Para especificar el término
						de búsqueda o filtros se deberán enviar como parámetros de query:
					</p>
					<ul>
						<li>GET /characters?name=nombre</li>
						<li>GET /characters?age=edad</li>
						<li>GET /characters?movies=idMovie</li>
					</ul>
				</li>
				<li>
					<h3>Listado de Películas</h3>
					<p>
						Deberá mostrar solamente los campos imagen, título y fecha de
						creación.
					</p>
					<p>El endpoint deberá ser:</p>
					<ul>
						<li>GET /movies</li>
					</ul>
				</li>
				<li>
					<h3>Detalle de Película / Serie con sus personajes</h3>
					<p>
						Devolverá todos los campos de la película o serie junto a los
						personajes asociados a la misma.
					</p>
				</li>
				<li>
					<h3>Creación, Edición y Eliminación de Película / Serie</h3>
					<p>
						Deberán existir las operaciones básicas de creación, edición y
						eliminación de películas o series.
					</p>
				</li>
				<li>
					<h3>Búsqueda de Películas o Series</h3>
					<p>
						Deberá permitir buscar por título, y filtrar por género. Además,
						permitir ordenar los resultados por fecha de creación de forma
						ascendiente o descendiente.
					</p>
					<p>
						El término de búsqueda, filtro u ordenación se deberán especificar
						como parámetros de query:
					</p>
					<ul>
						<li>GET /movies?name=nombre</li>
						<li>GET /movies?genre=idGenero</li>
						<li>GET /movies?order=ASC | DESC</li>
					</ul>
				</li>
				<li>
					<h3>Envío de emails</h3>
					<p>
						Al registrarse en el sitio, el usuario deberá recibir un email de
						bienvenida. Es recomendable, la utilización de algún servicio de
						terceros como SendGrid.
					</p>
				</li>
			</ol>
		</article>
	);
}
