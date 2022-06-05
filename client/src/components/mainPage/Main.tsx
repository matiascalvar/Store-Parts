import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
	return (
		<div>
			<h1>Store Parts</h1>
			<Nav />
			<Cards />
			<Footer />
		</div>
	);
};

export default Main;
