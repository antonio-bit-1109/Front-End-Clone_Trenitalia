import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";
import { LocalHostPath } from "../functions/localHostPath";
import { useEffect, useState } from "react";

const InEvidenzaMain = () => {
    const { imagesObjs } = useSelector((store: rootState) => store.main);
    const { widthWindow } = useSelector((store: rootState) => store.main);
    const [cardPerWiew, setCardPerView] = useState<undefined | number | "auto">(1);

    useEffect(() => {
        changeSwiperCardVisibility(widthWindow);
    }, [widthWindow]);

    const changeSwiperCardVisibility = (widthWindow: number) => {
        if (widthWindow < 780) {
            setCardPerView(1);
            return;
        }
        if (widthWindow < 1200) {
            setCardPerView(2);
            return;
        }
        setCardPerView(3);
        return;
    };

    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <Col>
                        <div className="my-3 fs-5 fw-bold d-flex justify-content-center">IN EVIDENZA</div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={cardPerWiew}
                            navigation={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={true}
                            autoplay={{ delay: 6000 }}
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        >
                            {imagesObjs &&
                                imagesObjs.slice(0, 3).map((obj, i) => (
                                    <SwiperSlide key={`my-image-key-${i}`}>
                                        <div className="d-flex justify-content-center mt-2 ">
                                            {" "}
                                            <img
                                                className="rounded-4 mx-2 position-relative"
                                                src={`${LocalHostPath}/imgs/${obj.image}`}
                                                alt="immagine"
                                            />
                                            <div className="positioning text-center">
                                                <p className="fw-bolder">{obj.title.toUpperCase()}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InEvidenzaMain;
