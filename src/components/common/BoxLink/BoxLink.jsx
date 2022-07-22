import { Link } from "react-router-dom";

export default function BoxLink(to, text) {
	return <Link to={to}>{text}</Link>;
}
