import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const LavoriProgrammatiComponent = () => {
    return (
        <div className="bg-grey mb-start-mdd-3">
            <Container>
                <Row>
                    <Col className="offset-1">
                        <div className="pt-5">
                            <h5 className="fs-5 fw-bold">LAVORI PROGRAMMATI</h5>
                            <p>Lavori/ritardi programmati. Per selezionare un particolare periodo inserire le date</p>
                        </div>
                    </Col>
                </Row>{" "}
                <Row>
                    <Col xs="10" xl="6" className="offset-1">
                        <div className="my-2">
                            <Form>
                                <InputGroup className="mb-3 d-flex gap-3 rounded-3">
                                    <Form.Control className="rounded-3" aria-label="First name" />
                                    <Form.Control className="rounded-3" aria-label="Last name" />
                                    <Button className="rounded-3 px-4" variant="danger">
                                        CERCA
                                    </Button>
                                </InputGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="offset-1">
                        <div>
                            <p className=" text-decoration-underline" style={{ fontSize: "13px" }}>
                                Treni con possibili variazioni di orario per lavori di manutenzione della linea
                            </p>
                        </div>
                        <div className="pb-3">
                            <p className=" text-decoration-underline" style={{ fontSize: "13px" }}>
                                Treni con possibili ritardi per attesa coincidenze
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LavoriProgrammatiComponent;
