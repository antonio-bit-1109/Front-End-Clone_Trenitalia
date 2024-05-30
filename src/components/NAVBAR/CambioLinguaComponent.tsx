import { Col, Dropdown } from "react-bootstrap";
import ItalyFlag from "/svgs/ItalyFlag.svg";
import UkFlag from "/svgs/flag_UK.svg";
import spainFlag from "/svgs/spainFlag.png";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../interfaces/Interfaces";
import { AppDispatch } from "../../redux/store/store";
import { setCurrentFlag, setCurrentLanguage, setInitialFlagMatrix } from "../../redux/reducers/firstReducer";

const flagsMatrix = [
    [ItalyFlag, "it"],
    [UkFlag, "en"],
    [spainFlag, "esp"],
];

const InitialState = [
    [UkFlag, "en"],
    [spainFlag, "esp"],
];

const CambioLinguaComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { i18n } = useTranslation();

    const { currentFlag, currentLanguage, InitialFlagMatrix } = useSelector((store: rootState) => store.main);

    const nowFlag = useRef<string | undefined>("");
    const nowLanguage = useRef<string | undefined>("");

    nowFlag.current = currentFlag;
    nowLanguage.current = currentLanguage;

    useEffect(() => {
        if (!currentFlag && !currentLanguage && !InitialFlagMatrix) {
            dispatch(setInitialFlagMatrix(InitialState));
            dispatch(setCurrentFlag(flagsMatrix[0][0]));
            dispatch(setCurrentLanguage(flagsMatrix[0][1]));
        }
    }, []);

    useEffect(() => {
        if (InitialFlagMatrix) {
            const newFlagsMatrix = InitialFlagMatrix.filter(
                (flag) => !(flag[0] === currentFlag && flag[1] === currentLanguage)
            );

            setInitialFlagMatrix(newFlagsMatrix);

            i18n.changeLanguage(currentLanguage);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFlag, currentLanguage]);

    const reassignedFlag = (clickedFlag: string[]) => {
        dispatch(setCurrentFlag(clickedFlag[0]));
        dispatch(setCurrentLanguage(clickedFlag[1]));

        let MatrixCopy: string[][] = flagsMatrix;

        if (nowFlag.current !== undefined && nowLanguage.current !== undefined) {
            MatrixCopy = [...MatrixCopy, [nowFlag.current, nowLanguage.current]];
        }

        console.log(MatrixCopy);

        if (currentFlag === undefined) {
            console.error("currentFlag è undefined");
            return;
        }

        if (currentLanguage === undefined) {
            console.error("currentLanguage è undefined");
            return;
        }

        const filteredMatrix = controlloValoriDuplicati(MatrixCopy, currentFlag, currentLanguage);
        dispatch(setInitialFlagMatrix(filteredMatrix));
    };

    // sistema elliminazione di uno dei valori duplicati
    const controlloValoriDuplicati = (matrix: string[][], currentFlag: string, currentLanguage: string) => {
        for (let i = 0; i < matrix.length; i++) {
            const array = matrix[i];

            if (array[0] === currentFlag && array[1] === currentLanguage) {
                matrix.splice(i, 1);
                break;
            }
        }
        return matrix;
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
