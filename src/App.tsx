import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./customClass.scss";
import "./index.scss";
import "./App.scss";
import MainPage from "./components/MainPage";
import NavBarComp from "./components/NAVBAR/NavBarComp";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBarComp />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
