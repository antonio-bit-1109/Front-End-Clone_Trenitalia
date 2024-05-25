import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";

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
                        autoplay={{ delay: 6000 }}
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={`ciao-${i}`}>
                                <img className="imgStyle" src={img} alt="esercizio" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </Container>
    );
};

export default CarouselComponent;
