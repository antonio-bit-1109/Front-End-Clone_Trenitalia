import { Button, Col, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";
import { ArrowRight, CarFrontFill, InfoCircleFill, Search, ZoomIn } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { GoArrowSwitch } from "react-icons/go";
import { IoPerson } from "react-icons/io5";

const InputTrovaViaggio = () => {
    const { widthWindow } = useSelector((store: rootState) => store.main);

    return (
        <>
            <div
                className={` ${
                    widthWindow < 1100 ? "d-none" : "d-flex"
                } absolute d-flex flex-column w-100 align-items-center`}
            >
                <Row>
                    <Col xs="12">
                        <div className="d-flex my-3 column-gap-5">
                            <div className="d-flex align-items-center gap-2">
                                <InfoCircleFill /> <p>Principali soluzioni</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                {" "}
                                <ZoomIn />
                                <p>Ricerca Avanzata</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label="Andata e Ritorno"
                                    />
                                </Form>{" "}
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <p>Acquisto Rapido</p> <ArrowRight />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* // div inputs  */}
                        <div className="d-flex gap-4">
                            <div>
                                <InputGroup className="mb-3 position-relative">
                                    <p className="text-danger fs-5 absolute1">Da</p>
                                    <Form.Control aria-label="First name" />
                                    <Form.Control aria-label="Last name" />
                                    <GoArrowSwitch className="absolute2 text-danger" />
                                    <p className="text-danger fs-5 absolute3">a</p>
                                </InputGroup>
                            </div>
                            <div className="d-flex">
                                <InputGroup className="mb-3">
                                    <Form.Control type="datetime-local" aria-label="Last name" />
                                </InputGroup>
                            </div>
                            <div>
                                <InputGroup>
                                    <Form.Control
                                        type="number"
                                        aria-label="numero passeggeri"
                                        className="position-relative rounded-end-2 cut"
                                    />
                                    <IoPerson className="absolute4" />
                                </InputGroup>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* last row */}
                <Row>
                    <Col xs="12">
                        <div className="d-flex w-100 gap-3">
                            <div className="d-flex  align-items-center justify-content-center me-3">
                                <Search />
                                <p className="ms-2">Ultime Ricerche</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center me-5">
                                <CarFrontFill /> <p>Completa il tuo viaggio</p>
                            </div>
                            <div>
                                <Button className="px-5" variant="danger">
                                    CERCA
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default InputTrovaViaggio;
