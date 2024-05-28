import { Button, Col, Dropdown, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ItalyFlag from "/svgs/ItalyFlag.svg";
import UkFlag from "/svgs/flag_UK.svg";
import spainFlag from "/svgs/spainFlag.png";
import { useEffect, useState } from "react";

const NavbarCompUP = () => {
    const [currentLanguageFlag, setCurrentLanguageFlag] = useState<undefined | string>("");

    useEffect(() => {
        setCurrentLanguageFlag(ItalyFlag);
    }, []);

    const changeLanguage = () => {};

    return (
        <div className="d-none d-xxl-block">
            {" "}
            <Row>
                <div className="bg-grey w-100">
                    <Col>
                        <section className="d-flex justify-content-center align-items-center flex-wrap">
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Siti del gruppo</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Whistleblowing-segnalazioni</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Trenitalia for Business</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Cerca il biglietto</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Assistenza</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">Area Riservata</p>
                            </Button>

                            <div className="d-flex">
                                <Button variant="transparent" className="size-tiny fw-bold p-0">
                                    <Search size={25} className="me-2" />
                                </Button>{" "}
                                <img src={currentLanguageFlag} alt="bandiera italiana" />
                                <Dropdown drop="down-centered">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic"></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={changeLanguage} className="d-flex align-items-center">
                                            ENG
                                            <img className="ms-2" src={UkFlag} alt="bandiera UK" />
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center">
                                            SPAN
                                            <img className="ms-2 imgSize" src={spainFlag} alt="bandiera spagnola" />
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </section>
                    </Col>
                </div>
            </Row>
        </div>
    );
};

export default NavbarCompUP;
