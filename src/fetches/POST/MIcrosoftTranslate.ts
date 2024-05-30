// import { setDataTraducedInEn, setDataTraducedInEs } from "../../redux/reducers/firstReducer";
// import { AppDispatch } from "../../redux/store/store";

// const mutateData = (data: string[]) => {
//     return data.map((string) => ({ Text: string }));
// };

// export const postFetchTRanslate = (dataTotraduce: string[]) => async (dispatch: AppDispatch) => {
//     try {
//         const url1 =
//             "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=it&to=es&to=en&textType=plain&profanityAction=NoAction";
//         const url2 =
//             "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&from=it&to=en&textType=plain&profanityAction=NoAction";

//         const options = {
//             method: "POST",
//             headers: {
//                 "x-rapidapi-key": import.meta.env.VITE_API_KEY_MICROSOFT_TRANSLATE,
//                 "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
//                 "Content-Type": "application/json",
//             },
//         };

//         const mutedDataFormat = mutateData(dataTotraduce);

//         const TranslateToEs = await fetch(url1, {
//             ...options,
//             body: JSON.stringify(mutedDataFormat),
//             // body: {
//             //     "0": {
//             //         Text: "I would really like to drive your car around the block a few times.",
//             //     },
//             // },
//         });

//         if (!TranslateToEs.ok) {
//             throw new Error("qualcosa non funziona");
//         }

//         if (TranslateToEs.ok) {
//             const result = await TranslateToEs.json();
//             dispatch(setDataTraducedInEs(result));

//             const TranslateToEn = await fetch(url2, { ...options, body: JSON.stringify(mutedDataFormat) });

//             if (!TranslateToEn.ok) {
//                 throw new Error("qualcosa non funziona");
//             }

//             if (TranslateToEn.ok) {
//                 const result2 = await TranslateToEn.json();
//                 dispatch(setDataTraducedInEn(result2));
//             }
//         }
//     } catch (err) {
//         console.error(err);
//     }
// };
