import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useState } from "react";
import { DatiLogin } from "../../interfaces/Interfaces";
import { LoginUtente } from "../../fetches/POST/PostUtente";

const LoginFormComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const [datiLogin, setDatiLogin] = useState<DatiLogin>({
        nomeUtente: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent, data: DatiLogin) => {
        e.preventDefault();
        console.log(data);
        dispatch(LoginUtente(data));
        // setDatiLogin({ nomeUtente: "", password: "" });
    };

    return (
        <Col>
            <div className="border border-2">
                <p className="text-center">Login</p>
                <Form
                    onSubmit={(e) => {
                        handleSubmit(e, datiLogin);
                    }}
                >
                    <Form.Group className="mb-3" controlId="numeUtenteId">
                        <Form.Label>Nome Utente</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setDatiLogin({ ...datiLogin, nomeUtente: e.target.value });
                            }}
                            value={datiLogin.nomeUtente}
                            type="text"
                            placeholder="Inserisci il nome utente"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="PasswordId">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => {
                                setDatiLogin({ ...datiLogin, password: e.target.value });
                            }}
                            value={datiLogin.password}
                        />
                    </Form.Group>
                    <Button type="submit"> Login </Button>
                </Form>
            </div>
        </Col>
    );
};

export default LoginFormComponent;
