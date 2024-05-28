import { LocalHostPath } from "../../functions/localHostPath";
import { setCaroselloData, setImagesNews } from "../../redux/reducers/firstReducer";
import { AppDispatch } from "../../redux/store/store";

export const getImages = () => async (dispatch: AppDispatch) => {
    try {
        const request = await fetch(LocalHostPath + "/HomePage/getImmagini", {
            method: "GET",
        });

        if (!request.ok) {
            throw new Error("qualcosa non funziona.");
        }

        const response = await request.json();
        dispatch(setImagesNews(response));
    } catch (err) {
        console.error(err);
    }
};

export const getCaroselloData = () => async (dispatch: AppDispatch) => {
    try {
        const request = await fetch(LocalHostPath + "/HomePage/getDataCarosello", {
            method: "GET",
        });

        if (!request.ok) {
            if (request.status >= 400 && request.status < 500) {
                throw new Error("hai formulato una brutta richiesta. Bambino cattivo!");
            }

            if (request.status > 500) {
                throw new Error("errore interno al server! Vai a dare un occhio!");
            }
        }

        const goodResponse = await request.json();
        dispatch(setCaroselloData(goodResponse));
    } catch (err) {
        console.error(err);
    }
};
