// import { useSelector } from "react-redux";
import CarouselComponent from "./CarouselComponent";
import InputTrovaViaggioSmall from "./InputTrovaViaggioSmall";
import OfferteEServiziComponent from "./OfferteEServiziComponent";
// import { rootState } from "../interfaces/Interfaces";

const MainPage = () => {
    // const { widthWindow } = useSelector((store: rootState) => store.main);

    return (
        <>
            <CarouselComponent />
            <InputTrovaViaggioSmall />
            <OfferteEServiziComponent />
        </>
    );
};

export default MainPage;
