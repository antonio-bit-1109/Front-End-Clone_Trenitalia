import { toast } from "react-toastify";
import { LocalHostPath } from "../../functions/localHostPath";
import { DatiLogin, PostUtenteDTO, Utente, tokenResponse } from "../../interfaces/Interfaces";
import { setNewUtente, setShowModalAreaprivata } from "../../redux/reducers/utenteReducer";
import { AppDispatch } from "../../redux/store/store";
import { setToken } from "../../redux/reducers/tokenReducer";

export const postUtenteRegistrazione = (dataPost: PostUtenteDTO) => async (dispatch: AppDispatch) => {
    try {
        const request = await fetch(LocalHostPath + "/UserAutenticate_Autorize/PostDatiRegistrazione", {
            method: "POST",
            headers: {
                "Content-Type": "Application/Json",
            },
            body: JSON.stringify(dataPost),
        });

        if (!request.ok) {
            switch (request.status) {
                case 400:
                    throw new Error("Bad request");
                case 401:
                    throw new Error("Unauthorized");
                case 403:
                    throw new Error("Forbidden");
                case 404:
                    throw new Error("Not found");
                case 500:
                    throw new Error("Internal server error");
                // Add more cases as needed
                default:
                    throw new Error("An error occurred");
            }
        }

        if (request.ok) {
            const response: Utente = await request.json();
            console.log(response);
            toast.success(`Utente registrato con successo. Riceverai una mail con i dati d'accesso.`, {
                position: "top-center",
                autoClose: 4000,
            });
            dispatch(setNewUtente(response));
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            toast.error(err.message);
        } else {
            console.error(err);
        }
    }
};

export const LoginUtente = (dataLogin: DatiLogin) => async (dispatch: AppDispatch) => {
    try {
        const request = await fetch(LocalHostPath + "/UserAutenticate_Autorize/AutenticationUser/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/Json",
            },
            body: JSON.stringify(dataLogin),
        });

        if (!request.ok) {
            switch (request.status) {
                case 400:
                    throw new Error("Bad request");
                case 401:
                    throw new Error("Unauthorized");
                case 403:
                    throw new Error("Forbidden");
                case 404:
                    throw new Error("Not found");
                case 500:
                    throw new Error("Internal server error");
                // Add more cases as needed
                default:
                    throw new Error("An error occurred");
            }
        }

        if (request.ok) {
            const response: tokenResponse = await request.json();

            toast.success(`Accesso correttamente Effettuato.`, {
                position: "top-center",
                autoClose: 4000,
            });
            dispatch(setToken(response.token));
            dispatch(setShowModalAreaprivata(false));
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            toast.error(err.message);
        } else {
            console.error(err);
        }
    }
};
