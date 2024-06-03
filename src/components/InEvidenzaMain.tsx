import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";
import { LocalHostPath } from "../functions/localHostPath";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const InEvidenzaMain = () => {
    const { imagesObjs } = useSelector((store: rootState) => store.main);
    const { widthWindow } = useSelector((store: rootState) => store.main);
    const [cardPerWiew, setCardPerView] = useState<undefined | number | "auto">(1);
    const { t } = useTranslation();

    useEffect(() => {
        changeSwiperCardVisibility(widthWindow);
    }, [widthWindow]);

    const changeSwiperCardVisibility = (widthWindow: number) => {
        if (widthWindow < 780) {
            setCardPerView(1);
            return;
        }
        if (widthWindow >= 720 && widthWindow < 1400) {
            setCardPerView(2);
            return;
        }
        if (widthWindow > 1400) {
            setCardPerView(3);
        }
        // setCardPerView(3);
        return;
    };

    return (
        <>
            <Container className="p-0">
                <Row>
                    <Col className="offset-2">
                        <div className="my-3 fs-5 fw-bold">
                            <p>{t("inEvid1")}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="mb-end-mdd-2">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="10" md="10" lg="8">
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
                                    imagesObjs.slice(9, 12).map((obj, i) => (
                                        <SwiperSlide key={`my-image-key-${i}`}>
                                            <div className="d-flex justify-content-center mt-2 ">
                                                {" "}
                                                <img
                                                    className="rounded-4 mx-2 position-relative img-size"
                                                    src={`${LocalHostPath}/imgs/${obj.image}`}
                                                    alt="immagine"
                                                />
                                                <div className="positioning text-center">
                                                    <p className="fw-bolder">
                                                        {" "}
                                                        {t(`off_servSlide${i + 9}`).toUpperCase()}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default InEvidenzaMain;
