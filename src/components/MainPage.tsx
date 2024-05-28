// import { useSelector } from "react-redux";
import CarouselComponent from "./CarouselComponent";
import InEvidenzaMain from "./InEvidenzaMain";
import InputTrovaViaggioSmall from "./InputTrovaViaggioSmall";
import OfferteEServiziComponent from "./OfferteEServiziComponent";
import ServiziADisposizioneComponent from "./ServiziADisposizioneComponent";
// import { rootState } from "../interfaces/Interfaces";

const MainPage = () => {
    // const { widthWindow } = useSelector((store: rootState) => store.main);

    return (
        <>
            <CarouselComponent />
            <InputTrovaViaggioSmall />
            <OfferteEServiziComponent />
            <ServiziADisposizioneComponent />
            <InEvidenzaMain />
        </>
    );
};

export default MainPage;
