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
import { useTranslation } from "react-i18next";
// import { postFetchTRanslate } from "../fetches/POST/MIcrosoftTranslate";
// import { setDataToTraduce } from "../redux/reducers/firstReducer";

const OfferteEServiziComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { t } = useTranslation();
    const { imagesObjs, widthWindow } = useSelector((store: rootState) => store.main);
    const [cardPerWiew, setCardPerView] = useState<"auto" | number | undefined>(1);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    useEffect(() => {
        changeSwiperCardVisibility(widthWindow);
    }, [widthWindow]);

    // useEffect(() => {
    //     if (imagesObjs) {
    //         const tempArray: string[] = [];
    //         for (let i = 0; i < imagesObjs.length; i++) {
    //             const cardTitle = imagesObjs[i].title;
    //             tempArray.push(cardTitle);
    //         }
    //         dispatch(setDataToTraduce(tempArray));
    //     }
    // }, [imagesObjs, dispatch]);

    // useEffect(() => {
    //     if (dataToTraduce) {
    //         dispatch(postFetchTRanslate(dataToTraduce));
    //     }
    // }, [dataToTraduce, dispatch]);

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
                        <div className="my-3 fs-5 fw-bold">{t("off_e_serv1")}</div>
                    </Col>
                </Row>
            </Container>
            <div className="mb-end-xll-2">
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
                                                    <p className="fw-bolder"> {t(`off_servSlide${i}`).toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </Col>
                    </Row>

                    <div className="mt-2">
                        <Row className="justify-content-center">
                            <Col xs="10" md="10" lg="8">
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
                                                        <p className="fw-bolder">
                                                            {" "}
                                                            {t(`off_servSlide${i + 3}`).toUpperCase()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-2">
                        <Row className="justify-content-center">
                            <Col xs="10" md="10" lg="8">
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
                                                <div className="d-flex justify-content-center mt-2">
                                                    {" "}
                                                    <img
                                                        className="rounded-4 mx-2 position-relative img-size"
                                                        src={`${LocalHostPath}/imgs/${obj.image}`}
                                                        alt="immagine"
                                                    />
                                                    <div className="positioning text-center">
                                                        <p className="fw-bolder">
                                                            {t(`off_servSlide${i + 6}`).toUpperCase()}
                                                        </p>
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
