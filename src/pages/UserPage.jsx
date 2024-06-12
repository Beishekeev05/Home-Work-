import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const local = localStorage.getItem("auth");
		console.log(local, "userPage");
		if (local !== "true") {
			navigate("/userPage");
		}
	}, []);

	return <div>UserPage</div>;
};

export default UserPage;
