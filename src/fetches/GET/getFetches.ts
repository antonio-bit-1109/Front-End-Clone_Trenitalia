import { LocalHostPath } from "../../functions/localHostPath";
import { setImagesNews } from "../../redux/reducers/firstReducer";
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
