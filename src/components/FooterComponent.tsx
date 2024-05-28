import { Col, Container, Row } from "react-bootstrap";
import logoBiancoTreni from "/imgs/logo-trenitalia-bianco.png";

const FooterComponent = () => {
    return (
        <div className="container-linear-gradient">
            <Container>
                <Row>
                    <Col className="offset-1">
                        <div className="pb-start-mdd-1">
                            <img src={logoBiancoTreni} alt="" />{" "}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponent;
