// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { TokenState_Interface } from "../../interfaces/Interfaces";

const initialState: TokenState_Interface = {
    token: null,
    decriptedToken: null,
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },

        setDecriptedToken: (state, action) => {
            state.decriptedToken = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setToken, setDecriptedToken } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
