import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./Parts.module.css";

interface PartsProps {}

const Parts: FunctionComponent<PartsProps> = () => {
	let { name } = useParams();
	const part = useSelector((state: any) =>
		state.partsToFilter.filter((e: any) => e.name === name)
	);

	return (
		<div className={style.card}>
			<h2>Description</h2>
			<div>
				<p>Name: {part[0].name}</p>
				<p>Type: {part[0].type}</p>
				<p>Price: {part[0].price}</p>
			</div>
			<Link style={{ textDecoration: "none", color: "white" }} to="/">
				<button className={style.button}>To Home</button>
			</Link>
		</div>
	);
};

export default Parts;
