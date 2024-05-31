// slice per il salvataggio del token utente
import { createSlice } from "@reduxjs/toolkit";
import { UtenteState_Interface } from "../../interfaces/Interfaces";

const initialState: UtenteState_Interface = {
    datiNewUtente: {
        nome: null,
        cognome: null,
        codiceFiscale: null,
        email: null,
        dataNascita: null,
        sesso: null,
        cellulare: null,
    },
};

const stateReducerSlice = createSlice({
    name: "firstReducer",
    initialState,
    reducers: {
        setDataRegistrazioneUtente: (state, action) => {
            state.datiNewUtente = action.payload;
        },
    },
});

// Esporto solo l'azione definita nello slice
export const { setDataRegistrazioneUtente } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
