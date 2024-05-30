// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { MainState_Interface } from "../../interfaces/Interfaces";
// import {  } from "../../interfaces/MainStateInterface";

const initialState: MainState_Interface = {
    widthWindow: window.innerWidth,
    imagesObjs: null,
    caroselloData: null,
    currentFlag: undefined,
    currentLanguage: undefined,
    InitialFlagMatrix: undefined,
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

        setCurrentFlag: (state, action) => {
            state.currentFlag = action.payload;
        },
        setCurrentLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
        setInitialFlagMatrix: (state, action) => {
            state.InitialFlagMatrix = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const {
    setWidthWindow,
    setImagesNews,
    setCaroselloData,
    setCurrentFlag,
    setCurrentLanguage,
    setInitialFlagMatrix,
} = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
