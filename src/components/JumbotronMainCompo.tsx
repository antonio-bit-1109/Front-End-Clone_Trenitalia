import { Col, Container, Row } from "react-bootstrap";
import longImg from "/imgs/jumbotronLong.webp";
import ShortImg from "/imgs/jumbotronShort.webp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../interfaces/Interfaces";

const JumbotronMainCompo = () => {
    const { widthWindow } = useSelector((store: rootState) => store.main);
    const [img, setImg] = useState<undefined | string>("");

    useEffect(() => {
        widthWindow < 1100 ? setImg(ShortImg) : setImg(longImg);
    }, [widthWindow]);

    return (
        <div className="mb-mdd-3">
            <Container fluid className="p-0">
                <Row>
                    <Col>
                        <div>
                            <img className="w-100" src={img} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default JumbotronMainCompo;
