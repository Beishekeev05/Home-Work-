import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../auth/api";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error } = useSelector((state) => state.auth);

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			email,
			password,
		};

		dispatch(postLogin({ data: newValue, navigate }));
	};

	return (
		<BoxMuiContainer onSubmit={submitHandler} component="form">
			<TextField
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				label="Enter your email"
			/>
			<TextField
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				label="Enter your password"
			/>
			{error && <Typography>{`${error}`}</Typography>}
			<Button type="submit" variant="outlined">
				Login
			</Button>
		</BoxMuiContainer>
	);
};

export default LoginPage;

const BoxMuiContainer = styled(Box)(() => {
	return {
		width: "450px",
		height: "350px",
		border: "1px solid black",
		margin: "50px auto",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: 20,
	};
});
