// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { MainState_Interface } from "../../interfaces/Interfaces";
// import {  } from "../../interfaces/MainStateInterface";

const initialState: MainState_Interface = {
    widthWindow: window.innerWidth,
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setWidthWindow: (state, action) => {
            state.widthWindow = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setWidthWindow } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
