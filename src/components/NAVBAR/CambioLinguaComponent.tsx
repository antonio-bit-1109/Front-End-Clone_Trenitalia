import { Col, Dropdown } from "react-bootstrap";
import ItalyFlag from "/svgs/ItalyFlag.svg";
import UkFlag from "/svgs/flag_UK.svg";
import spainFlag from "/svgs/spainFlag.png";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../interfaces/Interfaces";
import { setCurrentFlag, setCurrentLanguage, setInitialFlagMatrix } from "../../redux/reducers/firstReducer";
import { AppDispatch } from "../../redux/store/store";

const flagsMatrix = [
    [ItalyFlag, "it"],
    [UkFlag, "en"],
    [spainFlag, "esp"],
];

const CambioLinguaComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { i18n } = useTranslation();
    // const [InitialflagMatrix, setInitialFlagMatrix] = useState(flagsMatrix);
    // const [currentFlag, setCurrentFlag] = useState(flagsMatrix[0][0]);
    // const [currenteLanguage, setCurrentLanguage] = useState(flagsMatrix[0][1]);

    const { currentFlag, currentLanguage, InitialFlagMatrix } = useSelector((store: rootState) => store.main);

    const nowFlag = useRef<string | undefined>("");
    const nowLanguage = useRef<string | undefined>("");

    nowFlag.current = currentFlag;
    nowLanguage.current = currentLanguage;

    // useEffect(() => {
    //     dispatch(setInitialFlagMatrix(flagsMatrix));
    //     dispatch(setCurrentFlag(flagsMatrix[0][0]));
    //     dispatch(setCurrentLanguage(flagsMatrix[0][1]));
    // }, [dispatch]);

    useEffect(() => {
        dispatch(setInitialFlagMatrix(flagsMatrix));
        dispatch(setCurrentFlag(flagsMatrix[0][0]));
        dispatch(setCurrentLanguage(flagsMatrix[0][1]));

        let newFlagsMatrix;
        if (InitialFlagMatrix) {
            newFlagsMatrix = InitialFlagMatrix.filter(
                (flag) => !(flag[0] === currentFlag && flag[1] === currentLanguage)
            );
        }

        dispatch(setInitialFlagMatrix(newFlagsMatrix));

        // setInitialFlagMatrix(newFlagsMatrix);

        i18n.changeLanguage(currentLanguage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFlag, currentLanguage]);

    const reassignedFlag = (clickedFlag: string[]) => {
        dispatch(setCurrentFlag(clickedFlag[0]));
        dispatch(setCurrentLanguage(clickedFlag[1]));
        dispatch(
            setInitialFlagMatrix((prev: string[][]) => {
                if (nowFlag.current !== undefined && nowLanguage.current !== undefined) {
                    return [...prev, [nowFlag.current, nowLanguage.current]];
                } else {
                    return prev;
                }
            })
        );
    };

    return (
        <div>
            <Dropdown drop="down-centered">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    <span className="me-2">{currentLanguage && currentLanguage.toUpperCase()}</span>
                    <img style={{ width: "30px" }} src={currentFlag} alt="bandiera selezionata " />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {InitialFlagMatrix &&
                        InitialFlagMatrix.map((flagInfo, i) => (
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
