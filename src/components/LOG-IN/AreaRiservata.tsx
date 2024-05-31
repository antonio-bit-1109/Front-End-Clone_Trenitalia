// import { Col, Container, Row } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// import { PostUtenteDTO } from "../../interfaces/Interfaces";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/store/store";
// import { postUtenteRegistrazione } from "../../fetches/POST/PostUtente";
import RegistrationFormComponent from "./RegistrationFormComponent";
import LoginFormComponent from "./LoginFormComponent";
import { Container, Row } from "react-bootstrap";

const AreaRiservata = () => {
    // const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <Container>
                <div className="my-5">
                    <Row>
                        <RegistrationFormComponent />
                        <LoginFormComponent />
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default AreaRiservata;
