const axios = require("axios").default;

const PARTS: string = "http://localhost:8081/store/parts";
const TYPES: string = "http://localhost:8081/store/part-types";

export const getParts = (query: string) => async (dispatch: any) => {
	const response = await axios.get(`${PARTS}?type=${query}`);
	dispatch({ type: "GET_PARTS", payload: response.data });
};

export const getTypes = () => async (dispatch: any) => {
	const response = await axios.get(TYPES);
	dispatch({ type: "GET_TYPES", payload: response.data });
};

export function search(option: string) {
	const upperCased = option.charAt(0).toUpperCase() + option.slice(1);
	return { type: "SEARCH", payload: upperCased };
}

export function order(option: string) {
	return { type: "ORDER", payload: option };
}
