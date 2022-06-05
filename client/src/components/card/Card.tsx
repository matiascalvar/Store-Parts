import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

interface CardProps {
	price?: string;
	name?: string;
	type?: string;
}

const Card: FunctionComponent<CardProps> = ({ price, name, type }) => {
	return (
		<Link style={{ textDecoration: "none" }} to={`/parts/${name}`}>
			<div className={style.card}>
				<p className={style.element}>{name}</p>
				<p className={style.element}>{type}</p>
				<p className={style.element}>{price}</p>
			</div>
		</Link>
	);
};

export default Card;
