import { Button, Col, Dropdown, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ItalyFlag from "/svgs/ItalyFlag.svg";
import UkFlag from "/svgs/flag_UK.svg";
import spainFlag from "/svgs/spainFlag.png";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const flagsMatrix = [
    [ItalyFlag, "ITA"],
    [UkFlag, "ENG"],
    [spainFlag, "SPA"],
];

const NavbarCompUP = () => {
    // hook importato da i18n per le traduzioni
    const { t } = useTranslation();

    const [InitialflagMatrix, setInitialFlagMatrix] = useState(flagsMatrix);
    const [currentFlag, setCurrentFlag] = useState(flagsMatrix[0][0]);
    const [currenteLanguage, setCurrentLanguage] = useState(flagsMatrix[0][1]);
    const nowFlag = useRef<string | undefined>("");
    const nowLanguage = useRef<string | undefined>("");

    nowFlag.current = currentFlag;
    nowLanguage.current = currenteLanguage;

    useEffect(() => {
        const newFlagsMatrix = InitialflagMatrix.filter(
            (flag) => !(flag[0] === currentFlag && flag[1] === currenteLanguage)
        );
        setInitialFlagMatrix(newFlagsMatrix);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFlag, currenteLanguage]);

    const reassignedFlag = (clickedFlag: string[]) => {
        setCurrentFlag(clickedFlag[0]);
        setCurrentLanguage(clickedFlag[1]);
        setInitialFlagMatrix((prev: string[][]) => {
            if (nowFlag.current !== undefined && nowLanguage.current !== undefined) {
                return [...prev, [nowFlag.current, nowLanguage.current]];
            } else {
                return prev;
            }
        });
    };

    return (
        <div className="d-none d-xxl-block">
            <Row>
                <div className="bg-grey w-100">
                    <Col>
                        <section className="d-flex justify-content-center align-items-center flex-wrap">
                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp1")}</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp2")}</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp3")}</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp4")}</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp5")}</p>
                            </Button>

                            <Button variant="transparent" className="size-tiny fw-bold">
                                <p className="m-0">{t("navUp6")}</p>
                            </Button>

                            <div className="d-flex">
                                <Button variant="transparent" className="size-tiny fw-bold p-0">
                                    <Search size={25} className="me-2" />
                                </Button>{" "}
                                <Dropdown drop="down-centered">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                        <span className="me-2">{currenteLanguage}</span>
                                        <img style={{ width: "30px" }} src={currentFlag} alt="bandiera selezionata " />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {InitialflagMatrix.map((flagInfo, i) => (
                                            <Dropdown.Item
                                                key={`my-beautiful-key-${i}`}
                                                onClick={() => {
                                                    console.log(flagInfo);
                                                    reassignedFlag(flagInfo);
                                                }}
                                                className="d-flex align-items-center"
                                            >
                                                <Col xs="3"> {flagInfo[1]}</Col>
                                                <Col>
                                                    <img
                                                        style={{ width: "30px" }}
                                                        className="ms-2"
                                                        src={flagInfo[0]}
                                                        alt="bandiera"
                                                    />
                                                </Col>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </section>
                    </Col>
                </div>
            </Row>
        </div>
    );
};

export default NavbarCompUP;
