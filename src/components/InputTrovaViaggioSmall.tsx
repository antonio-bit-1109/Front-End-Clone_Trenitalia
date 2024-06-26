import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";
import { Button, Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { InfoCircle, ZoomIn } from "react-bootstrap-icons";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { GoArrowSwitch } from "react-icons/go";
import { useTranslation } from "react-i18next";

// import { Button, Col, InputGroup, Row } from "react-bootstrap";
// import { ArrowRight, CarFrontFill, InfoCircleFill, Search, ZoomIn } from "react-bootstrap-icons";
// import { Form } from "react-bootstrap";
// import { IoPerson } from "react-icons/io5";
// import { GoArrowSwitch } from "react-icons/go";

const InputTrovaViaggioSmall = () => {
    const { widthWindow } = useSelector((store: rootState) => store.main);
    const { t } = useTranslation();

    return (
        <div className={`  ${widthWindow > 1100 && "d-none"}`}>
            <Container fluid>
                <section className="my-4">
                    {/* principali soluzioni */}
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Dropdown>
                                        <InfoCircle />
                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                            {t("carousFormSm1")}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="d-flex align-items-end">
                                    {" "}
                                    <div className="mb-1 me-1">
                                        {" "}
                                        <ZoomIn />
                                    </div>
                                    <p>{t("carousFormSm2")}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* DA -- A */}
                    <Row>
                        <Col>
                            <div className="p-1 border border-2 rounded-3 mt-3 position-relative">
                                {" "}
                                <GoArrowSwitch className="absolute7 text-danger" />
                                <p className="text-danger fs-5 absolute6">{t("carousFormSm4")}</p>
                                <div>
                                    {" "}
                                    <p className="text-danger fs-5 absolute5">{t("carousFormSm3")}</p>
                                </div>
                                <InputGroup className="d-flex justify-content-center">
                                    <Form.Control
                                        className="border border-0 max-width"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <hr className="max-width m-auto my-1" />
                                <InputGroup className="d-flex justify-content-center">
                                    <Form.Control
                                        className="border border-0 max-width"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col>
                            <div className="d-flex align-items-center my-2 gap-2">
                                <Form>
                                    <Form.Check
                                        className="fs-5"
                                        // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label={t("carousFormSm5")}
                                    />
                                </Form>{" "}
                            </div>
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col xs="7">
                            {" "}
                            <div>
                                {" "}
                                <InputGroup className="">
                                    <Form.Control type="datetime-local" aria-label="Last name" />
                                </InputGroup>{" "}
                                <InputGroup className="mb-3">
                                    <Form.Control type="datetime-local" aria-label="Last name" />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs="5">
                            {" "}
                            <InputGroup className="">
                                <Form.Control type="number" aria-label="Last name" />
                            </InputGroup>{" "}
                            <InputGroup className="mb-3">
                                <Form.Control type="number" aria-label="Last name" />
                            </InputGroup>
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col>
                            <div className="d-flex ">
                                <Button variant="danger" className="w-100">
                                    {t("carousFormSm6")}
                                </Button>
                            </div>
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col>
                            <div className="w-100 mt-3">
                                {" "}
                                <Button variant="transparent border border-1 border-black custom-width size-custom">
                                    <div className="size-custom">{t("carousFormSm7")}</div>
                                </Button>
                                <Button variant="transparent border border-1 border-black custom-width">
                                    <div className="size-custom">{t("carousFormSm8")}</div>
                                </Button>
                                <Button variant="transparent border border-1 border-black custom-width">
                                    <div className="size-custom">{t("carousFormSm9")}</div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
};

export default InputTrovaViaggioSmall;
