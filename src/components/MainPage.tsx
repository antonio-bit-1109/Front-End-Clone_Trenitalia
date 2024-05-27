// import { useSelector } from "react-redux";
import CarouselComponent from "./CarouselComponent";
import OfferteEServiziComponent from "./OfferteEServiziComponent";
// import { rootState } from "../interfaces/Interfaces";

const MainPage = () => {
    // const { widthWindow } = useSelector((store: rootState) => store.main);

    return (
        <>
            <CarouselComponent />
            <OfferteEServiziComponent />
        </>
    );
};

export default MainPage;
