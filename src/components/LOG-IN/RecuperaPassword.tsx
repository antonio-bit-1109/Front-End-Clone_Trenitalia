import { FormEvent, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { RecuperaPasswordUtente } from "../../fetches/POST/PostUtente";
import { toast } from "react-toastify";

const RecuperaPassword = () => {
    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [infoVisible, setInfoVisible] = useState<null | boolean>(null);
    const handleSubmit = (email: string, e: FormEvent) => {
        e.preventDefault();
        console.log(email);
        if (email === "") {
            toast.error("inserisci email per il recupero");
        } else {
            dispatch(RecuperaPasswordUtente(email));
            setEmail("");
        }
    };

    return (
        <div className="bg-grey altezza">
            <Container>
                <Row>
                    <div className="d-flex flex-column align-items-center bg-white mt-5 pb-3 mx-auto rounded-4 shadow-lg w-75">
                        <Col xs="10" md="6">
                            <div className="text-center mt-5 ">
                                <p className="fs-1">Recupera Password Utente</p>
                            </div>
                        </Col>

                        <Col xs="10" md="6">
                            <Form
                                onSubmit={(e) => {
                                    handleSubmit(email, e);
                                }}
                                className="my-3"
                            >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        value={email}
                                        type="email"
                                        placeholder="Inserisci email per il Recupero password"
                                    />
                                </Form.Group>
                                <div className="d-flex gap-3 align-items-baseline w-100">
                                    <div
                                        style={{ minWidth: "50px" }}
                                        onMouseOver={() => {
                                            setInfoVisible(true);
                                        }}
                                        onMouseLeave={() => {
                                            setInfoVisible(false);
                                        }}
                                    >
                                        <CiCircleInfo color="black" style={{ minWidth: "30px" }} />
                                    </div>

                                    <p
                                        className={`${infoVisible ? "d-block transition" : "d-none"}`}
                                        style={{ maxWidth: " 300px" }}
                                    >
                                        Inserisci la mail utilizzata in fase di registrazione. Se la mail è corretta,
                                        riceverai una nuova password casuale. Controlla tra lo spam.
                                    </p>

                                    <div className="d-flex align-items-end">
                                        {" "}
                                        <Button type="submit"> INVIA RICHIESTA</Button>
                                    </div>
                                </div>
                            </Form>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default RecuperaPassword;
