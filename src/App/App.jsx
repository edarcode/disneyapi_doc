import { Route, Routes } from "react-router-dom";
import Auth from "../components/containers/Auth/Auth";
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
					<Route path="auth" element={<Auth />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
