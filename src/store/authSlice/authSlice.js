import { createSlice } from "@reduxjs/toolkit";
import { postLogin, postRequestAuth } from "../../auth/api";

const initialState = {
	auth: false,
	token: "",
	isLoading: false,
	error: null,
	Message: "",
	userId: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postRequestAuth.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(postRequestAuth.fulfilled, (state, { payload }) => {
				localStorage.setItem("auth", "true");
				const token = payload.token;
				console.log(token);
				localStorage.setItem("token", token);

				state.token = payload.token;
				state.isLoading = false;
				state.auth = true;
			})
			.addCase(postRequestAuth.rejected, (state, { payload }) => {
				state.error = payload;
				state.isLoading = false;
			})

			.addCase(postLogin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(postLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.token = payload.data.token;
			})
			.addCase(postLogin.rejected, (state, { payload }) => {
				state.error = payload.message;
				state.isLoading = false;
			});
	},
});
export default authSlice.reducer;
