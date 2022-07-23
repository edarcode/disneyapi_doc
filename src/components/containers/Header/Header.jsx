import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<nav className={css.header__nav}>
				<BoxLink to="/" text="Home" />
				<BoxLink to="/auth" text="Auth" />
				<BoxLink to="/genres" text="Genres" />
				<BoxLink to="/films" text="Films" />
				<BoxLink to="/characters" text="Characters" />
			</nav>
		</header>
	);
}
