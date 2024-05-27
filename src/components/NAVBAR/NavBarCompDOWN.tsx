import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import LogoTrenitalia from "/svgs/logo-trenitalia.svg";
import { PersonFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { rootState } from "../../interfaces/Interfaces";
import { List } from "react-bootstrap-icons";
import { useState } from "react";

const NavBarCompDOWN = () => {
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
            <Row>
                <Col xxl="8" className="offset-xxl-3">
                    {" "}
                    <section className="d-flex w-100 align-items-center justify-content-between my-3">
                        <div className="d-flex align-items-end justify-content-between justify-content-xxl-start flex-wrap w-100">
                            <img
                                className="px-3 p-xxl-0"
                                style={{ width: `${handleImageReSize()}`, marginInlineEnd: "10px" }}
                                src={LogoTrenitalia}
                                alt="logo trenitalia"
                            />
                            <div className="d-none d-xxl-flex gap-3 size-small fw-bold flex-wrap">
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    CHI SIAMO
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    FRECCE
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    INTERCITY E INTERNAZIONALI
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    REGIONALE
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    OFFERTE
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    SERVIZI
                                </Button>
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    CARTARECCIA E X-GO
                                </Button>{" "}
                                <Button variant="transparent" className="p-0 hoverEffect size-tiny">
                                    INFO
                                </Button>
                            </div>
                            <div className="d-flex align-items-center d-xxl-none me-5">
                                <div>
                                    {" "}
                                    <Button variant="white border border-1 border-black px-4 py-1">
                                        {" "}
                                        Cerca Biglietto{" "}
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
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default NavBarCompDOWN;
