import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../fetches/GET/getFetches";
import { AppDispatch } from "../redux/store/store";
import { rootState } from "../interfaces/Interfaces";
import { LocalHostPath } from "../functions/localHostPath";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const OfferteEServiziComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const { imagesObjs } = useSelector((store: rootState) => store.main);
    const { widthWindow } = useSelector((store: rootState) => store.main);

    const [cardPerWiew, setCardPerView] = useState<"auto" | number | undefined>(1);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

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
                        <div className="my-3 fs-5 fw-bold d-flex justify-content-center">OFFERTE E SERVIZI</div>
                    </Col>
                </Row>
            </Container>
            <div className="mb-end-xll-2">
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
                                                    className="rounded-4 mx-2 position-relative img-size"
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

                    <div className="mt-2">
                        <Row>
                            <Col>
                                <Swiper
                                    slidesPerView={cardPerWiew}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    loop={true}
                                    // autoplay={{ delay: 6000 }}
                                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                >
                                    {imagesObjs &&
                                        imagesObjs.slice(3, 6).map((obj, i) => (
                                            <SwiperSlide key={`my-image-key-${i}`}>
                                                <div className="d-flex justify-content-center mt-2 ">
                                                    {" "}
                                                    <img
                                                        className="rounded-4 mx-2 position-relative img-size"
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
                    </div>
                    <div className="mt-2">
                        <Row>
                            <Col>
                                <Swiper
                                    slidesPerView={cardPerWiew}
                                    slidesPerGroup={1}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    loop={true}
                                    // autoplay={{ delay: 6000 }}
                                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                >
                                    {imagesObjs &&
                                        imagesObjs.slice(6, 9).map((obj, i) => (
                                            <SwiperSlide key={`my-image-key-${i}`}>
                                                <div className="d-flex justify-content-center mt-2 ">
                                                    {" "}
                                                    <img
                                                        className="rounded-4 mx-2 position-relative img-size"
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
                    </div>
                </Container>
            </div>
        </>
    );
};

export default OfferteEServiziComponent;
