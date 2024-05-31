import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useForm } from "react-hook-form";
import { PostUtenteDTO } from "../../interfaces/Interfaces";
import { postUtenteRegistrazione } from "../../fetches/POST/PostUtente";

const RegistrationFormComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        // watch,
        reset,
    } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (data: any) => {
        const postData: PostUtenteDTO = data as PostUtenteDTO;
        console.log(postData);
        dispatch(postUtenteRegistrazione(data));
        reset();
    };

    return (
        <>
            {" "}
            <Col>
                <div className="border border-2">
                    <p className="text-center">Iscriviti</p>
                    <Form onSubmit={handleSubmit(submitHandler)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci il nome"
                                {...register("nome", {
                                    required: "Inserisci il tuo Nome.",
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Il nome può contenere solo lettere maiuscole o minuscole ",
                                    },
                                })}
                            />
                            {errors.nome && (
                                <div className="text-danger">
                                    {typeof errors.nome.message === "string" && errors.nome.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci il cognome"
                                {...register("cognome", {
                                    required: "Inserisci il tuo cognome.",
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Il cognome può contenere solo lettere maiuscole o minuscole ",
                                    },
                                })}
                            />
                            {errors.cognome && (
                                <div className="text-danger">
                                    {typeof errors.cognome.message === "string" && errors.cognome.message}
                                </div>
                            )}
                        </Form.Group>{" "}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Codice Fiscale</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci il codice fiscale"
                                {...register("codiceFiscale", {
                                    required: "Inserisci il tuo codice Fiscale.",
                                    pattern: {
                                        value: /^[A-Za-z0123456789]+$/i,
                                        message: "Il C.F può contenere solo lettere e numeri ",
                                    },
                                })}
                            />
                            {errors.codiceFiscale && (
                                <div className="text-danger">
                                    {typeof errors.codiceFiscale.message === "string" && errors.codiceFiscale.message}
                                </div>
                            )}
                        </Form.Group>{" "}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Inserisci la tua email"
                                {...register("email", {
                                    required: "Inserisci il tuo codice Fiscale.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Formato mail non valido. Controlla di nuovo.",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className="text-danger">
                                    {typeof errors.email.message === "string" && errors.email.message}{" "}
                                </div>
                            )}
                        </Form.Group>{" "}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Data di Nascita</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="inserisci data di nascita"
                                {...register("dataNascita", {
                                    required: "Inserisci il tua data di nascita.",
                                })}
                            />
                            {errors.dataNascita && (
                                <div className="text-danger">
                                    {typeof errors.dataNascita.message === "string" && errors.dataNascita.message}{" "}
                                </div>
                            )}
                        </Form.Group>{" "}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Sesso</Form.Label>
                            <Form.Select
                                {...register("sesso", {
                                    required: "Inserisci il tuo sesso.",
                                })}
                            >
                                <option>Scegli il sesso</option>
                                <option value="M">Maschio</option>
                                <option value="F">Femmina</option>
                                <option value="O">Altro</option>
                            </Form.Select>
                            {errors.sesso && (
                                <div className="text-danger">
                                    {typeof errors.sesso.message === "string" && errors.sesso.message}{" "}
                                </div>
                            )}
                        </Form.Group>{" "}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Cellulare</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="inserisci numero di cellulare"
                                {...register("cellulare", {
                                    required: "Inserisci il tuo numero di cellulare.",
                                    pattern: {
                                        value: /^[0123456789]+$/i,
                                        message: "Numero di cellulare non valido. Riprova",
                                    },
                                })}
                            />{" "}
                            {errors.cellulare && (
                                <div className="text-danger">
                                    {typeof errors.cellulare.message === "string" && errors.cellulare.message}
                                </div>
                            )}
                        </Form.Group>
                        <Button type="submit"> Registrati </Button>
                    </Form>
                </div>
            </Col>
        </>
    );
};

export default RegistrationFormComponent;
