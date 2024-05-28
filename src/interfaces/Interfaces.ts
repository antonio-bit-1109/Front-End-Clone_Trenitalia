export interface MainState_Interface {
    widthWindow: number;
    imagesObjs: null | Image[];
    caroselloData: null | DataCarosello[];
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
