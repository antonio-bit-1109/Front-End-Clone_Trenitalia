import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";
import { InfoCircleFill, ZoomIn, ArrowRight, CarFrontFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const longImages = ["/imgs/cover1Long.webp", "/imgs/cover2Long.webp", "/imgs/cover3Long.webp", "/imgs/cover4Long.webp"];
const shortImages = [
    "/imgs/cover1Short.webp",
    "/imgs/cover2Short.webp",
    "/imgs/cover3Short.webp",
    "/imgs/cover4Short.webp",
];

const CarouselComponent = () => {
    const { widthWindow } = useSelector((store: rootState) => store.main);

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        setImages(widthWindow < 1100 ? shortImages : longImages);
    }, [widthWindow]);

    return (
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                        // autoplay={{ delay: 6000 }}
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={`ciao-${i}`}>
                                <div className="position-relative d-flex flex-column justify-content-center">
                                    {" "}
                                    <img className="imgStyle" src={img} alt="esercizio" />
                                    {/* //div tasti superiore */}
                                    <div className="absolute d-flex flex-column w-100 align-items-center">
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
                                                        <InputGroup className="mb-3">
                                                            <Form.Control aria-label="First name" />
                                                            <Form.Control aria-label="Last name" />
                                                        </InputGroup>
                                                    </div>
                                                    <div className="d-flex">
                                                        <InputGroup className="mb-3">
                                                            <Form.Control
                                                                type="datetime-local"
                                                                aria-label="Last name"
                                                            />
                                                        </InputGroup>
                                                    </div>
                                                    <div>
                                                        <InputGroup>
                                                            <Form.Control
                                                                style={{ width: "100px" }}
                                                                type="number"
                                                                aria-label="numero passeggeri"
                                                            />
                                                        </InputGroup>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <div className="d-flex w-100">
                                                    <div className="d-flex gap-3 align-items-center">
                                                        <CarFrontFill /> <p>Completa il tuo viaggio</p>
                                                    </div>
                                                    <div>
                                                        <Button variant="danger">Completa il tuo viaggio</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </Container>
    );
};

export default CarouselComponent;
