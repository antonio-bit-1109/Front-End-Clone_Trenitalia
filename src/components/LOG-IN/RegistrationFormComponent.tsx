import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useForm } from "react-hook-form";
import { PostUtenteDTO } from "../../interfaces/Interfaces";
// import { postUtenteRegistrazione } from "../../fetches/POST/PostUtente";
// import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { postUtenteRegistrazione } from "../../fetches/POST/PostUtente";

const RegistrationFormComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const possiedeCodiceFiscale = watch("possiedeCodiceFiscale");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandlerRegistration = (data: any) => {
        const postData: PostUtenteDTO = data as PostUtenteDTO;
        if (data.codiceFiscale && possiedeCodiceFiscale) {
            toast.warning(`ricontrolla il campo Codice Fiscale.`, {
                position: "top-center",
                autoClose: 4000,
            });
            reset();
            return;
        }

        console.log(postData);
        dispatch(postUtenteRegistrazione(data));
        reset();
    };

    return (
        <>
            <Form className="alignment" onSubmit={handleSubmit(submitHandlerRegistration)}>
                {" "}
                <Col xs="7">
                    <div className="my-3">
                        {" "}
                        <p className="fw-bold fs-5">Registrazione</p>
                    </div>
                </Col>{" "}
                <Col xs="7">
                    <div className="rounded-5 shadow-lg p-3 bg-white">
                        <p className="text-center">Iscriviti</p>

                        <div className="d-flex column-gap-3">
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nome </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nome*"
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
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Cognome*"
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
                        </div>
                        <div className="d-flex align-items-end column-gap-3">
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Codice Fiscale</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="CF*"
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
                                        {typeof errors.codiceFiscale.message === "string" &&
                                            errors.codiceFiscale.message}
                                    </div>
                                )}
                            </Form.Group>{" "}
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Check
                                    type="checkbox"
                                    {...register("mancanzaCodiceFiscale", {})}
                                    // {...register("codiceFiscale", {
                                    //     required: "Questa casella deve essere selezionata.",
                                    // })}
                                    label="Non ho un codice Fiscale"
                                />
                                {/* {errors.codiceFiscale && (
                                    <div className="text-danger">
                                        {typeof errors.codiceFiscale.message === "string" &&
                                            errors.codiceFiscale.message}
                                    </div>
                                )} */}
                            </Form.Group>{" "}
                        </div>
                        <div className="d-flex column-gap-3">
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email*"
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
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
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
                        </div>
                        <div className="d-flex column-gap-3">
                            {" "}
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
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
                            <Form.Group className="mb-3 flex-grow-1" controlId="exampleForm.ControlTextarea1">
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
                        </div>

                        {/* <Button type="submit"> Registrati </Button> */}
                    </div>
                </Col>
                <Col xs="7">
                    <div>
                        <p className="text-start mt-3 fw-bold">
                            Aderisci ai nostri programmi e scopri tutti i vantaggi riservati a te!
                        </p>
                    </div>
                </Col>
                <Col xs="7">
                    <div
                        style={{ backgroundColor: "#B51039" }}
                        className="d-flex column-gap-3 p-3 py-4 rounded-3 my-3 shadow-lg"
                    >
                        <div className="d-flex w-50">
                            <div className="d-flex flex-column">
                                <p className="text-light fw-bold size-large mb-3">
                                    Iscriviti a CartaFRECCIA, il programma riservato ai clienti che viaggiano con le
                                    Frecce, ti aspettano tanti premi, vantaggi e promozioni dedicate.
                                </p>
                                <Form.Check
                                    {...register("aderisciCartaFreccia", {
                                    // required: "Inserisci il tuo Nome.",
                                    // pattern: {
                                    //     value: /^[A-Za-z]+$/i,
                                    //     message: "Il nome può contenere solo lettere maiuscole o minuscole ",
                                    // },
                                })} // prettier-ignore
                                    className="text-light fw-bold"
                                    type="switch"
                                    id="custom-switch"
                                    label="Voglio aderire"
                                />
                            </div>
                        </div>
                        <div className="d-lg-flex w-50 d-sm-none">
                            <div
                                style={{ height: "180px" }}
                                className="border rounded-3 border-1 w-75 p-2 ms-auto background shadow-lg"
                            >
                                <p className="text-light ms-3 fw-bold ">CARTAFRECCIA</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="7">
                    <div
                        style={{ backgroundColor: "#64A70B" }}
                        className="d-flex column-gap-3 p-3 py-4 rounded-3 shadow-lg"
                    >
                        <div className="d-flex w-50">
                            <div className="d-flex flex-column">
                                <p className="text-light fw-bold size-large mb-3">
                                    Scopri X-GO, il programma dedicato ai clienti che viaggiano con i treni Regionale e
                                    Intercity, ti aspettano vantaggi imperdibili.
                                </p>
                                <Form.Check // prettier-ignore
                                    {...register("aderisciXGo", {
                                        // required: "Inserisci il tuo Nome.",
                                        // pattern: {
                                        //     value: /^[A-Za-z]+$/i,
                                        //     message: "Il nome può contenere solo lettere maiuscole o minuscole ",
                                        // },
                                    })} // prettier-ignore
                                    className="text-light fw-bold"
                                    type="switch"
                                    id="custom-switch"
                                    label="Voglio aderire"
                                />
                            </div>
                        </div>
                        <div className="d-lg-flex w-50 d-sm-none">
                            <div
                                style={{ height: "180px" }}
                                className="border rounded-3 border-1 w-75 p-2 ms-auto background1 shadow-lg"
                            ></div>
                        </div>
                    </div>
                </Col>
                <Col xs="7">
                    <div className="bg-white my-3 rounded-3">
                        <div className="p-3">
                            {" "}
                            <p className="fw-bold">PROTEZIONE DATI E DICHIARAZIONI DI CONSENSO</p>
                        </div>
                        <div className="p-3">
                            <p className="fw-bold">
                                Scegli tu! Solo con il tuo consenso ti invieremo le migliori offerte per viaggiare nel
                                modo più conveniente. Riceverai solo ciò che potrebbe interessarti. In qualsiasi momento
                                puoi ripensarci e modificare la tua scelta
                            </p>
                        </div>
                        <div className="p-3">
                            <p className="color mb-2">
                                {" "}
                                Selezionando "Do il consenso" esprimi il tuo consenso all'invio da parte di Trenitalia
                                di materiale informativo, pubblicitario, promozionale e indagini sul grado di
                                soddisfazione della clientela, relativi ai servizi di Trenitalia o di altri Partner.
                                Tale materiale potrà essere trasmesso tramite modalità automatizzate (e-mail, SMS/MMS,
                                notifiche app, internet) e tradizionali (posta, telefono).
                            </p>
                            <div className="d-flex column-gap-3">
                                {" "}
                                <Form.Check
                                    {...register("giveConsenso1", {})}
                                    className="fw-bold"
                                    aria-label="option 1"
                                    label="Do il consenso"
                                />{" "}
                                <Form.Check className="fw-bold" aria-label="option 1" label="Non do il consenso" />
                            </div>
                        </div>{" "}
                        <div className="p-3">
                            <p className="color mb-2">
                                {" "}
                                Selezionando "Do il consenso" esprimi il tuo consenso per attività di profilazione
                                mediante rilevazione delle abitudini di viaggio e scelte di consumo, ai fini della
                                programmazione da parte di Trenitalia di un'offerta in linea con le preferenze della
                                clientela.
                            </p>
                            <div className="d-flex column-gap-3">
                                {" "}
                                <Form.Check
                                    {...register("giveConsenso2", {})}
                                    className="fw-bold"
                                    aria-label="option 1"
                                    label="Do il consenso"
                                />{" "}
                                <Form.Check className="fw-bold" aria-label="option 1" label="Non do il consenso" />
                            </div>
                        </div>{" "}
                        <div className="p-3">
                            <p className="color mb-2">
                                {" "}
                                Selezionando "Do il consenso" esprimi il tuo consenso all'invio, tramite email o
                                SMS/MMS, da parte di Trenitalia France di materiale informativo, pubblicitario e
                                promozionale relativi a servizi che Trenitalia France o altri Partners propongono dalla
                                Francia.
                            </p>
                            <div className="d-flex column-gap-3">
                                {" "}
                                <Form.Check
                                    {...register("giveConsenso3", {})}
                                    className="fw-bold"
                                    aria-label="option 1"
                                    label="Do il consenso"
                                />{" "}
                                <Form.Check className="fw-bold" aria-label="option 1" label="Non do il consenso" />
                            </div>
                        </div>{" "}
                    </div>
                </Col>
                <Col xs="7">
                    <div className="mt-2 mb-5">
                        <div className="d-flex">
                            {" "}
                            <Button className="ms-auto" variant="danger" type="submit">
                                <p className="fw-bold py-1">PROSEGUI</p>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Form>{" "}
        </>
    );
};

export default RegistrationFormComponent;
