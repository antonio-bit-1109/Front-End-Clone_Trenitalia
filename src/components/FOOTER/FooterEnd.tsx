import { Col, Container, Row } from "react-bootstrap";

const FooterEnd = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="offset-1">
                        <div className="d-flex justify-content-around py-2" id="last-piece">
                            <p>Gruppo Italiano 2023</p>
                            <p>Contatti</p>
                            <p> Note Legali</p>
                            <p>Partita Iva 373827364373</p>
                            <p>Protezione dati personali</p>
                            <p>Accessibilità</p>
                            <p>Mappa</p>
                            <p>Gestione Preferenze</p>
                            <p>Informativa sui Cookie</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FooterEnd;
