// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { UtenteState_Interface } from "../../interfaces/Interfaces";

const initialState: UtenteState_Interface = {
    newUtente: null,
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setNewUtente: (state, action) => {
            state.newUtente = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setNewUtente } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
