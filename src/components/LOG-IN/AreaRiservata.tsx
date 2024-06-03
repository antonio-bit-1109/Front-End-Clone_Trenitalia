// import { Col, Container, Row } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import { useForm } from "react-hook-form";
// import { PostUtenteDTO } from "../../interfaces/Interfaces";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/store/store";
// import { postUtenteRegistrazione } from "../../fetches/POST/PostUtente";
import { Container, Row } from "react-bootstrap";
import RegistrationFormComponent from "./RegistrationFormComponent";
import LoginFormComponent from "./LoginFormComponent";
// import { Button, Container, Form, Row } from "react-bootstrap";
import LogOutComponent from "../LOG-OUT/LogOutComponent";
// import CampiAggiuntiviRegistrazione from "./CampiAggiuntiviRegistrazione";

const AreaRiservata = () => {
    // const dispatch: AppDispatch = useDispatch();

    return (
        <>
            <div className=" bg-grey">
                <Container fluid>
                    <Row>
                        {/* <Form onSubmit={handleSubmit(submitHandler)}> */}
                        <RegistrationFormComponent />
                        {/* <CampiAggiuntiviRegistrazione /> */}
                        <LoginFormComponent />
                        <LogOutComponent />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AreaRiservata;
