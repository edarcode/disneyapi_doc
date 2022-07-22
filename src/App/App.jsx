import { Route, Routes } from "react-router-dom";
import Footer from "../components/containers/Footer/Footer";
import Genres from "../components/containers/Genres/Genres";
import Header from "../components/containers/Header/Header";
import Doc from "../views/Doc/Doc";
import NotFound from "../views/NotFound/NorFound";
import css from "./style.module.css";

function App() {
	return (
		<div className={css.App}>
			<Header />
			<Routes>
				<Route path="/" element={<Doc />}>
					<Route path="genres" element={<Genres />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
