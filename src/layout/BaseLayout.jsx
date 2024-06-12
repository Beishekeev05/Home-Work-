import React from "react";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
	return (
		<div>hell
			<Outlet />
		</div>
	);
};

export default BaseLayout;
