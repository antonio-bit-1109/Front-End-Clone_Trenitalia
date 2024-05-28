import { Col, Container, Row } from "react-bootstrap";
import logoBiancoTreni from "/imgs/logo-trenitalia-bianco.png";
import fb from "/svgs/facebook.svg";
import insta from "/svgs/instagram.svg";
import linkedin from "/svgs/linkedin.svg";
import twitter from "/svgs/twitter.png";
import yt from "/svgs/youtube.svg";

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

                <Row>
                    <Col className="offset-1">
                        <div id="first" className="text-light">
                            <p className="font20 mt-4 fw-bold">Contatti e assistenza</p>
                            <p>Call senter 892021</p>
                            <p>Chat Online</p>
                            <p>Guida all'acquisto</p>
                            <p>FAQ</p>
                            <p>Per le persone a mobilità ridotta</p>
                            <p>Reclami</p>
                            <p>Richesta di indennizzo </p>
                            <p>Agenzia di Viaggio</p>
                            <p className="font20 mt-4 fw-bold">Condizioni di trasporto</p>
                            <p className="font20 mt-4 fw-bold">Info utenti IC/ICN e Regionali</p>
                        </div>
                    </Col>
                    <Col>
                        <div id="second" className="text-light">
                            <p className="font20 mt-4 fw-bold">Chi siamo </p>
                            <p className="font20 mt-4 fw-bold">La sostenibilità</p>
                            <p className="font20 mt-4 fw-bold">Trenitalia for Business</p>
                            <p className="font20 mt-4 fw-bold">Infomobilità</p>
                            <p>In caso di sciopero</p>
                            <p>Viaggiatreno</p>
                            <p>Sicurezza in treno e in stazione </p>
                            <p className="font20 mt-4 fw-bold">Carriere</p>
                            <p className="font20 mt-4 fw-bold">La freccia Mag</p>
                        </div>
                    </Col>
                    <Col>
                        <div id="third" className="text-light">
                            <p className="font20 mt-4 fw-bold">Seguici su</p>
                            <div className="d-flex column-gap-2">
                                <img src={fb} alt="facebook logo" />
                                <img src={insta} alt="instagram logo" />
                                <img src={twitter} alt="twitter logo" />
                                <img src={linkedin} alt="linkedin logo" />
                                <img src={yt} alt="youtube logo" />
                            </div>
                            <p className="font20 mt-4 fw-bold">Scarica la nostra App</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponent;
