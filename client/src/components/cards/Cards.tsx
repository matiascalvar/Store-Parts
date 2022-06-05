import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParts } from "../../actions";
import Card from "../card/Card";
import style from "./Cards.module.css";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
	const dispatch = useDispatch();

	const parts = useSelector((state: any) => state.partsToFilter);

	useEffect(() => {
		dispatch(getParts("") as any);
	}, []);

	if (parts[0] === "empty") {
		return (
			<div className={style.container}>
				<h2>Not found.</h2>
			</div>
		);
	} else if (!parts.length) {
		return (
			<div className={style.container}>
				<h2>Loading</h2>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<div className={style.headers}>
				<p>Name</p>
				<p>Type</p>
				<p>Price</p>
			</div>
			{parts?.map(
				(
					part: { name: string; price: string; type: string },
					index: number
				) => (
					<Card
						key={index}
						price={part.price}
						name={part.name}
						type={part.type}
					/>
				)
			)}
		</div>
	);
};

export default Cards;
