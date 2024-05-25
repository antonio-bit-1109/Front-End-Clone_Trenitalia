import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cover1 from "/imgs/cover1.webp";
import cover2 from "/imgs/cover2.webp";
import cover3 from "/imgs/cover3.webp";
import cover4 from "/imgs/cover4.webp";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CarouselComponent = () => {
    const [arrayImgs, setArrayImgs] = useState<null | string[]>(null);

    useEffect(() => {
        setArrayImgs([cover1, cover2, cover3, cover4]);
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <div>
                            <Swiper
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                draggable="true"
                                loop={true}
                                autoplay={true}
                            >
                                {arrayImgs &&
                                    arrayImgs.map((img, i) => (
                                        <SwiperSlide key={`ciao-${i}`}>
                                            <div>
                                                <img
                                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                                    src={img}
                                                    alt="esercizio"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CarouselComponent;
