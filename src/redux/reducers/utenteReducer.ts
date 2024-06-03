// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { UtenteState_Interface } from "../../interfaces/Interfaces";

const initialState: UtenteState_Interface = {
    newUtente: null,
    showModalAreaPrivata: false,
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setNewUtente: (state, action) => {
            state.newUtente = action.payload;
        },

        setShowModalAreaprivata: (state, action) => {
            state.showModalAreaPrivata = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setNewUtente, setShowModalAreaprivata } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
