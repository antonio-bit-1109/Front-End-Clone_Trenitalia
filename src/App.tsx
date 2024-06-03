import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./customClass.scss";
import "./index.scss";
import "./App.scss";
import MainPage from "./components/MainPage";
import NavBarComp from "./components/NAVBAR/NavBarComp";
// import AreaRiservata from "./components/LOG-IN/AreaRiservata";
import ToasterComponent from "./components/ToasterComponent";
import RegistrationFormComponent from "./components/LOG-IN/RegistrationFormComponent";
import RecuperaPassword from "./components/LOG-IN/RecuperaPassword";
import ModalRegistration_Login from "./components/ModalRegistration_Login";

function App() {
    return (
        <div className="position-relative">
            <BrowserRouter>
                <ToasterComponent />
                <NavBarComp />
                <ModalRegistration_Login />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    {/* <Route path="/areaRiservata" element={<AreaRiservata />} /> */}
                    <Route path="/registrazione" element={<RegistrationFormComponent />} />
                    <Route path="/recuperaPassword" element={<RecuperaPassword />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
