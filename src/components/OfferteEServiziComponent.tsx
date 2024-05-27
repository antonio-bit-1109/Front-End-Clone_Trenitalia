import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../fetches/GET/getFetches";
import { AppDispatch } from "../redux/store/store";
import { rootState } from "../interfaces/Interfaces";
import { LocalHostPath } from "../functions/localHostPath";

const OfferteEServiziComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const { imagesObjs } = useSelector((store: rootState) => store.main);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    return (
        <>
            <Container>
                <div className="text-center d-flex flex-column align-items-center">
                    <Row>
                        <Col>
                            <div className="my-3 fs-4 fw-bold">OFFERTE E SERVIZI</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex my-3">
                                {imagesObjs &&
                                    imagesObjs.slice(0, 3).map((obj, i) => (
                                        <div className="position-relative mx-2" key={`my-image-key-${i}`}>
                                            <img
                                                className="rounded-4"
                                                src={`${LocalHostPath}/imgs/${obj.image}`}
                                                alt="immagine"
                                            />
                                            <p className="position-absolute bottom-0 fw-bolder text-light text-center primo-testo">
                                                {obj.title.toUpperCase()}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex mb-3">
                                {imagesObjs &&
                                    imagesObjs.slice(3, 6).map((obj, i) => (
                                        <div className="position-relative mx-2" key={`my-image-key-${i}`}>
                                            <img
                                                className="rounded-4"
                                                src={`${LocalHostPath}/imgs/${obj.image}`}
                                                alt="immagine"
                                            />
                                            <p className="position-absolute bottom-0 fw-bolder text-light text-center primo-testo">
                                                {obj.title.toUpperCase()}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex">
                                {imagesObjs &&
                                    imagesObjs.slice(6).map((obj, i) => (
                                        <div className="position-relative mx-2" key={`my-image-key-${i}`}>
                                            <img
                                                className="rounded-4"
                                                src={`${LocalHostPath}/imgs/${obj.image}`}
                                                alt="immagine"
                                            />
                                            <p className="position-absolute bottom-0 fw-bolder text-light primo-testo">
                                                {obj.title.toUpperCase()}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default OfferteEServiziComponent;
