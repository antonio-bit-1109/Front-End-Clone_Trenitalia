import { Col, Dropdown } from "react-bootstrap";
import ItalyFlag from "/svgs/ItalyFlag.svg";
import UkFlag from "/svgs/flag_UK.svg";
import spainFlag from "/svgs/spainFlag.png";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const flagsMatrix = [
    [ItalyFlag, "it"],
    [UkFlag, "en"],
    [spainFlag, "esp"],
];

const CambioLinguaComponent = () => {
    const { i18n } = useTranslation();
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

        i18n.changeLanguage(currenteLanguage);
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
        <div>
            <Dropdown drop="down-centered">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    <span className="me-2">{currenteLanguage.toUpperCase()}</span>
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
                            <Col xs="3"> {flagInfo[1].toUpperCase()}</Col>
                            <Col>
                                <img style={{ width: "30px" }} className="ms-2" src={flagInfo[0]} alt="bandiera" />
                            </Col>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default CambioLinguaComponent;
