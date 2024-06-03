import { FormEvent, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { RecuperaPasswordUtente } from "../../fetches/POST/PostUtente";

const RecuperaPassword = () => {
    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (email: string, e: FormEvent) => {
        e.preventDefault();
        console.log(email);
        dispatch(RecuperaPasswordUtente(email));
        setEmail("");
    };

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="text-center mt-5">
                            <p>Recupera Password Utente</p>
                        </div>
                    </Col>

                    <Col>
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
                            <div className="d-flex gap-3">
                                <div className="d-flex gap-3 mt-3">
                                    <CiCircleInfo />
                                    <p style={{ maxWidth: " 300px" }}>
                                        Inserisci la mail utilizzata in fase di registrazione. Se la mail è quella
                                        corretta, ti sarà reinviata una mail con la nuova password per fare il login.
                                    </p>
                                </div>
                                <div className="d-flex align-items-end">
                                    {" "}
                                    <Button type="submit"> INVIA RICHIESTA</Button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RecuperaPassword;
