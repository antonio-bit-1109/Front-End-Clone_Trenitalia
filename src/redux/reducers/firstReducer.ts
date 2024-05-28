// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { MainState_Interface } from "../../interfaces/Interfaces";
// import {  } from "../../interfaces/MainStateInterface";

const initialState: MainState_Interface = {
    widthWindow: window.innerWidth,
    imagesObjs: null,
    caroselloData: null,
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setWidthWindow: (state, action) => {
            state.widthWindow = action.payload;
        },

        setImagesNews: (state, action) => {
            state.imagesObjs = action.payload;
        },

        setCaroselloData: (state, action) => {
            state.caroselloData = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setWidthWindow, setImagesNews, setCaroselloData } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
