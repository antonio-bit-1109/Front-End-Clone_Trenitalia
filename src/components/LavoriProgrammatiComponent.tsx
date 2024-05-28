import { Col, Container, Row } from "react-bootstrap";

const LavoriProgrammatiComponent = () => {
    return (
        <div className="bg-grey">
            <Container>
                <Row>
                    <Col className="offset-1">
                        <div className="pt-5">
                            <h5 className="fs-5 fw-bold">LAVORI PROGRAMMATI</h5>
                            <p>Lavori/ritardi programmati. Per selezionare un particolare periodo inserire le date</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LavoriProgrammatiComponent;
