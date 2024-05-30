export interface MainState_Interface {
    widthWindow: number;
    imagesObjs: null | Image[];
    caroselloData: null | DataCarosello[];
    currentFlag: undefined | string;
    currentLanguage: undefined | string;
    InitialFlagMatrix: undefined | string[][];
    // dataToTraduce: null | string[];
    // dataTraducedInEs: null | type_Microsoft_Translated_Type;
    // dataTraducedInEn: null | type_Microsoft_Translated_Type;
}

//ogni volta che richiamo useselector devo dirgli che deve far riferimento all interfaccia rootstate per accedere allo store redux
export interface rootState {
    main: MainState_Interface;
}

export interface Image {
    idNews: number;
    title: string;
    image: string;
}

export interface DataCarosello {
    idImgs: number;
    image: string;
    title: string;
}

// export interface type_Microsoft_Translated_Type {
//     translation: typeArray_translated[];
// }

// export interface typeArray_translated {
//     text: string;
//     to: string;
// }
