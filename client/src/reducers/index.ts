var initialState = {
	parts: [],
	types: [],
	partsToFilter: [],
};

interface Parts {
	name: string;
	price: string;
	type: string;
}

export default function reducer(state = initialState, action: any) {
	switch (action.type) {
		case "GET_PARTS":
			let sortParts = action.payload.sort(function (a: Parts, b: Parts) {
				return parseInt(a.price) - parseInt(b.price);
			});
			return {
				...state,
				parts: sortParts,
				partsToFilter: sortParts,
			};
		case "GET_TYPES":
			return {
				...state,
				types: action.payload,
			};
		case "SEARCH":
			let result: any = [];
			result = state.parts.filter((part: any) =>
				part.name.includes(action.payload)
			);
			if (!result.length) {
				return {
					...state,
					partsToFilter: ["empty"],
				};
			} else {
				return {
					...state,
					partsToFilter: result,
				};
			}
		case "ORDER":
			let copyarr = JSON.parse(JSON.stringify(state.partsToFilter));
			if (action.payload === "Desc") {
				let descOrder = copyarr.sort(function (a: Parts, b: Parts) {
					return parseInt(b.price) - parseInt(a.price);
				});
				return {
					...state,
					partsToFilter: descOrder,
				};
			} else {
				let ascOrder = copyarr.sort(function (a: Parts, b: Parts) {
					return parseInt(a.price) - parseInt(b.price);
				});
				return {
					...state,
					partsToFilter: ascOrder,
				};
			}
		default:
			return { ...state };
	}
}
