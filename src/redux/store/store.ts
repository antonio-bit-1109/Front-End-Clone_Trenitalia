import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FirstReducer from "../reducers/firstReducer";
import utenteReducer from "../reducers/utenteReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
    transforms: [],
};

const rootReducer = combineReducers({
    main: FirstReducer,
    utente: utenteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
