import React from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Forma from "../components/RegustrationPage";
import { useSelector } from "react-redux";
import LoginPage from "../components/LoginPage";
import UserPage from "../pages/UserPage";
import BaseLayout from "../layout/BaseLayout";

const AppRoutes = () => {
	const { auth } = useSelector((state) => state.auth);
	console.log(auth, "auth");

	const router = createBrowserRouter([
		{
			path: "/",
			element: <BaseLayout />,
			children: [
				{
					path: "userPage",
					element: auth ? <UserPage /> : <Navigate to="/registr" replace />,
				},
				{
					path: "registr",
					element: auth ? <Navigate to="/userPage" replace /> : <Forma />,
				},
				{
					path: "login",
					element: <LoginPage />,
				},
				{
					index: true,
					element: <Navigate to={auth ? "/userPage" : "/login"} replace />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRoutes;
