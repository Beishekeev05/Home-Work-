import { Box, Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRequestAuth } from "../auth/api";
import { useNavigate } from "react-router-dom";

const Forma = () => {
	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			firstName,
			lastName,
			phoneNumber,
			email,
			password,
		};
		dispatch(postRequestAuth({ data: newValue, navigate }));
	};
	return (
		<BoxMuiForma component="form" onSubmit={submitHandler}>
			<TextField
				onChange={(e) => setLastName(e.target.value)}
				label="Last Name"
				value={lastName}
			/>
			<TextField
				onChange={(e) => setFirstName(e.target.value)}
				label="First Name"
				value={firstName}
			/>
			<TextField
				onChange={(e) => setPhoneNumber(e.target.value)}
				label="Phone Number"
				type="text"
				value={phoneNumber}
			/>
			<TextField
				onChange={(e) => setEmail(e.target.value)}
				label="Email"
				type="email"
				value={email}
			/>
			<TextField
				onChange={(e) => setPassword(e.target.value)}
				label="Password"
				type="password"
				value={password}
			/>
			<Button variant="contained" type="submit">
				Submit
			</Button>
		</BoxMuiForma>
	);
};

export default Forma;

const BoxMuiForma = styled(Box)(() => {
	return {
		width: "25em",
		minHeight: "20em",
		border: "1px solid black",
		display: "flex",
		flexDirection: "column",
		gap: 20,
		padding: 20,
		borderRadius: 10,
		margin: "50px auto",
	};
});
