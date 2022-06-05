import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParts, getTypes, order, search } from "../../actions";
import style from "./Nav.module.css";

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");
	const types = useSelector((state: any) => state.types);

	function handleChange(e: any) {
		setInput(e.target.value);
		dispatch(search(e.target.value));
	}

	function handleFilter(e: any) {
		dispatch(getParts(e.target.value) as any);
	}

	const [defaultValue, setDefaultValue] = useState("Desc");
	function handleOrder(e: any) {
		e.preventDefault();
		dispatch(order(e.target.value));
		e.target.value === "Asc" ? setDefaultValue("Desc") : setDefaultValue("Asc");
	}

	useEffect(() => {
		dispatch(getTypes() as any);
	}, [dispatch]);

	return (
		<div className={style.nav}>
			<input
				className={style.search}
				type="text"
				placeholder="  Search"
				value={input}
				onChange={handleChange}
			/>

			<select
				className={style.select}
				name="types"
				id="types"
				onChange={handleFilter}
			>
				<option value="">All Types</option>
				{types.map((type: string, index: number) => (
					<option key={index} value={type}>
						{type}
					</option>
				))}
			</select>

			<button
				className={style.button}
				value={defaultValue}
				type="button"
				onClick={handleOrder}
			>
				{defaultValue} Order
			</button>
		</div>
	);
};

export default Nav;
