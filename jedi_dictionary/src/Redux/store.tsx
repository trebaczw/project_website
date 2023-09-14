import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
	name: "api",
	initialState: {
		id: 1,
		personData: {},
	},
	reducers: {
		setIdNumber: (state, action) => {
			state.id = action.payload;
		},
		setPersonData: (state, action) => {
			state.personData = action.payload;
		},
	},
});

export const { setIdNumber, setPersonData } = apiSlice.actions;

export const store = configureStore({
	reducer: { api: apiSlice.reducer },
});
