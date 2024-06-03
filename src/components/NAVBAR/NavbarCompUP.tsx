import { Button, Col, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import CambioLinguaComponent from "./CambioLinguaComponent";
import { FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { jwtDecode } from "jwt-decode";
// import { decriptedTokenStructure } from "../../interfaces/Interfaces";
import { setShowModalAreaprivata } from "../../redux/reducers/utenteReducer";
import LogOutComponent from "../LOG-OUT/LogOutComponent";
import { setDecriptedToken } from "../../redux/reducers/tokenReducer";
const NavbarCompUP = () => {
    const dispatch: AppDispatch = useDispatch();
    // const navigate = useNavigate();
    const { token, decriptedToken } = useSelector((store: AppState) => store.token);
    // const [decriptedToken, setDecriptedToken] = useState<decriptedTokenStructure | null>(null);
    // hook importato da i18n per le traduzioni
    const { t } = useTranslation();

    useEffect(() => {
        if (token !== null) {
            dispatch(setDecriptedToken(jwtDecode(token)));
            console.log(decriptedToken);
            return;
        }

        if (!token) {
            dispatch(setDecriptedToken(null));
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div className="d-none d-xxl-block">
            <Row>
                <div className="bg-grey w-100">
                    <Col>
                        <section className="d-flex justify-content-center align-items-center flex-wrap">
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp1")}</p>
                            </Button>
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp2")}</p>
                            </Button>
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp3")}</p>
                            </Button>
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp4")}</p>
                            </Button>
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp5")}</p>
                            </Button>
                            <Button
                                onClick={() => {
                                    // navigate("/areaRiservata");
                                    dispatch(setShowModalAreaprivata(true));
                                }}
                                variant="transparent"
                                className="size-tiny fw-bold d-flex align-items-center"
                            >
                                <FaUser size={15} className="me-2" />
                                <p className="m-0">{decriptedToken ? decriptedToken.unique_name : t("navUp6")}</p>
                            </Button>
                            <Button variant="transparent" className="size-tiny fw-bold p-0">
                                <Search size={25} className="me-2" />
                            </Button>{" "}
                            {/* //div cambio lingua */}
                            <CambioLinguaComponent />
                            {decriptedToken && <LogOutComponent />}
                        </section>
                    </Col>
                </div>
            </Row>
        </div>
    );
};

export default NavbarCompUP;
