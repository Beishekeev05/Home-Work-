import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postRequestAuth = createAsyncThunk(
	"auth/postRequestAuth",
	async ({ data, navigate }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/api/auth/signUpForVendor`,
				data
			);
			navigate("/userPage");
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postLogin = createAsyncThunk(
	"auth/postLogin",
	async ({ data, navigate }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${BASE_URL}/api/auth/signIn`, data);
			navigate("/userPage");
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
