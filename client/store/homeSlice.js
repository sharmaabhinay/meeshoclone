import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "cart",
    initialState: {
        carrtValue: {},
        cartItems: [],
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.carrtValue = action.payload;
        },
        cartItems: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, cartItems } = homeSlice.actions;

export default homeSlice.reducer;
