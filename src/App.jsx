import React from "react";
import AppRoutes from "./router/AppRoutes";
import { useSelector } from "react-redux";

function App() {
	const { Message } = useSelector((state) => state.auth);
	console.log(Message);

	return <AppRoutes />;
}

export default App;
