// import { useSelector } from "react-redux";
// import { Button, Modal, Row } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import FooterComponent from "./FOOTER/FooterComponent";
import FooterEnd from "./FOOTER/FooterEnd";
import InEvidenzaMain from "./InEvidenzaMain";
import InputTrovaViaggioSmall from "./InputTrovaViaggioSmall";
import JumbotronMainCompo from "./JumbotronMainCompo";
import LavoriProgrammatiComponent from "./LavoriProgrammatiComponent";
import OfferteEServiziComponent from "./OfferteEServiziComponent";
import ServiziADisposizioneComponent from "./ServiziADisposizioneComponent";
// import { AppDispatch, AppState } from "../redux/store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { setShowModalAreaprivata } from "../redux/reducers/utenteReducer";
// import { rootState } from "../interfaces/Interfaces";

const MainPage = () => {
    return (
        <>
            <CarouselComponent />
            <InputTrovaViaggioSmall />
            <OfferteEServiziComponent />
            <ServiziADisposizioneComponent />
            <InEvidenzaMain />
            <JumbotronMainCompo />
            <LavoriProgrammatiComponent />
            <FooterComponent />
            <FooterEnd />
        </>
    );
};

export default MainPage;
