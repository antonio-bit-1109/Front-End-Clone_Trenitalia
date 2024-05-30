import { Col, Container, Row } from "react-bootstrap";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { getCaroselloData } from "../fetches/GET/getFetches";
import { rootState } from "../interfaces/Interfaces";
import { LocalHostPath } from "../functions/localHostPath";
import { useTranslation } from "react-i18next";

const ServiziADisposizioneComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { t } = useTranslation();
    const { caroselloData } = useSelector((store: rootState) => store.main);
    const { widthWindow } = useSelector((store: rootState) => store.main);
    const [slidesVisible, setSLidesVisible] = useState<"auto" | number | undefined>(1);

    useEffect(() => {
        dispatch(getCaroselloData());
    }, [dispatch]);

    const handleSlidesVisibleSwiper = useCallback(() => {
        if (widthWindow < 550) {
            setSLidesVisible(2);
            return;
        }

        if (widthWindow < 950) {
            setSLidesVisible(3);
            return;
        }

        if (widthWindow < 992) {
            setSLidesVisible(4);
            return;
        }
        setSLidesVisible(5);
    }, [widthWindow]);

    useEffect(() => {
        handleSlidesVisibleSwiper();
    }, [handleSlidesVisibleSwiper]);

    return (
        <div className="mb-end-mdd-1 bg-grey">
            <Container className="p-0">
                <Row>
                    <Col className="offset-1">
                        <div className="my-4 fs-5 fw-bold  ">{t("serv_disp1")}</div>
                    </Col>
                </Row>
            </Container>
            <Container>
                {caroselloData && (
                    <Row>
                        <Col>
                            <div className="pb-end-mdd-1">
                                <Swiper
                                    slidesPerView={slidesVisible}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    loop={true}
                                    autoplay={{ delay: 6000 }}
                                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                >
                                    {caroselloData.map((obj, i) => (
                                        <SwiperSlide key={`my-image-key-${i}`}>
                                            <div className="d-flex justify-content-center align-items-center flex-column mt-2 ">
                                                {" "}
                                                <img
                                                    style={{ maxWidth: "120" }}
                                                    src={`${LocalHostPath}/img-carosello-main/${obj.image}`}
                                                    alt="immagine"
                                                />
                                                <div>
                                                    <p className="fw-bolder">{t(`servDisp_${i}`).toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default ServiziADisposizioneComponent;
