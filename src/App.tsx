import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./customClass.scss";
import "./index.scss";
import "./App.scss";
import MainPage from "./components/MainPage";
import NavBarComp from "./components/NAVBAR/NavBarComp";
import AreaRiservata from "./components/LOG-IN/AreaRiservata";
import ToasterComponent from "./components/ToasterComponent";

function App() {
    return (
        <>
            <BrowserRouter>
                <ToasterComponent />
                <NavBarComp />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/areaRiservata" element={<AreaRiservata />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
