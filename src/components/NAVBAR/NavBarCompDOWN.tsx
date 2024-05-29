import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import LogoTrenitalia from "/svgs/logo-trenitalia.svg";
import { PersonFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { rootState } from "../../interfaces/Interfaces";
import { List } from "react-bootstrap-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CambioLinguaComponent from "./CambioLinguaComponent";

const NavBarCompDOWN = () => {
    const { t } = useTranslation();

    const { widthWindow } = useSelector((store: rootState) => store.main);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImageReSize = (): string => {
        if (widthWindow > 400 && widthWindow < 600) {
            return "185px";
        }

        if (widthWindow >= 600 && widthWindow < 800) {
            return "195px";
        }

        if (widthWindow > 800 && widthWindow < 1400) {
            return "220px";
        }

        if (widthWindow > 1399) {
            return "175px";
        }

        return "175px";
    };

    return (
        <>
            {" "}
            <Row className="w-100">
                <Col>
                    {" "}
                    <div className=" d-flex align-items-end justify-content-between justify-content-xxl-center my-2">
                        <img
                            className="px-3 p-xxl-0 mx-xxl-2"
                            style={{ width: `${handleImageReSize()}` }}
                            src={LogoTrenitalia}
                            alt="logo trenitalia"
                        />
                        <div className="d-none d-xxl-flex gap-3 size-small fw-bold flex-wrap">
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown1")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown2")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown3")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown4")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown5")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown6")}
                            </Button>
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown7")}
                            </Button>{" "}
                            <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                {t("navDown8")}
                            </Button>
                        </div>
                        <div className="d-flex align-items-center d-xxl-none">
                            <div>
                                {" "}
                                <Button variant="white border border-1 border-black px-4 py-1">
                                    {" "}
                                    {t("biglietto")}
                                </Button>
                            </div>{" "}
                            <div>
                                <Button variant="white ">
                                    {" "}
                                    <PersonFill />
                                </Button>{" "}
                            </div>
                            <div>
                                <List onClick={handleShow} size={40} />
                                <Offcanvas placement="end" show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Some text as placeholder. In real life you can have the elements you have
                                        chosen. Like, text, images, lists, etc.
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </div>
                    </div>
                    {widthWindow < 1400 ? <CambioLinguaComponent /> : null}
                </Col>
            </Row>
        </>
    );
};

export default NavBarCompDOWN;
