import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/mainPage/Main";
import Parts from "./components/parts/Parts";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/parts/:name" element={<Parts />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
