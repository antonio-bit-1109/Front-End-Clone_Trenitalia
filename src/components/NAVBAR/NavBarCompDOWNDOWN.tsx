import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { rootState } from "../../interfaces/Interfaces";
import { useEffect } from "react";

const NavBarCompDOWNDOWN = () => {
    const { widthWindow } = useSelector((store: rootState) => store.main);

    const handleFontSize = (): string => {
        if (widthWindow > 400 && widthWindow < 600) {
            return "size-tiny";
        }

        if (widthWindow >= 600 && widthWindow < 800) {
            return "size-small";
        }

        if (widthWindow >= 800 && widthWindow < 1000) {
            return "size-base";
        }

        if (widthWindow >= 1000 && widthWindow < 1390) {
            return "size-large";
        }

        if (widthWindow > 1390) {
            return "size-small";
        }

        return "size-base";
    };

    useEffect(() => {
        console.log(widthWindow);
    }, [widthWindow]);

    return (
        <>
            <Row>
                <Col xxl="8" className="offset-xxl-3">
                    <div className="px-3 d-flex gap-2 my-2 px-xxl-0">
                        {" "}
                        <p className={`${handleFontSize()} class1`}> INFOTRAFFICO</p>
                        <p className={`${handleFontSize()}`}> CIRCOLAZIONE REGOLARE </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default NavBarCompDOWNDOWN;
