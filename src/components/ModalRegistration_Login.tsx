import { Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store/store";
import { setShowModalAreaprivata } from "../redux/reducers/utenteReducer";
import LoginFormComponent from "./LOG-IN/LoginFormComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ModalRegistration_Login = () => {
    const navigate = useNavigate();
    const { showModalAreaPrivata } = useSelector((store: AppState) => store.utente);
    const dispatch: AppDispatch = useDispatch();
    // const [show, setShow] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(setShowModalAreaprivata(false));
        };
    }, [dispatch]);

    const handleClose = () => dispatch(setShowModalAreaprivata(false));

    return (
        <Row>
            <Modal className="mt-5" show={showModalAreaPrivata} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex m-auto">AREA RISERVATA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginFormComponent />

                    <div className="my-2">
                        <p
                            onClick={() => {
                                navigate("registrazione");
                                dispatch(setShowModalAreaprivata(false));
                            }}
                            className=" text-decoration-underline pointer"
                        >
                            registrati
                        </p>
                        <p
                            onClick={() => {
                                navigate("/recuperaPassword");
                                dispatch(setShowModalAreaprivata(false));
                            }}
                            className=" text-decoration-underline pointer"
                        >
                            recupera password
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </Row>
    );
};

export default ModalRegistration_Login;
