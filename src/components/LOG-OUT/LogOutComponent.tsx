import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { setToken } from "../../redux/reducers/tokenReducer";
import { toast } from "react-toastify";
import { useEffect } from "react";

const LogOutComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { token } = useSelector((store: AppState) => store.token);

    const HandleLogOut = () => {
        dispatch(setToken(null));
    };

    useEffect(() => {
        if (!token) {
            toast.info("logout effettuato.");
        } else {
            toast.info("sei loggato.");
        }
    }, [token]);

    return (
        <>
            {token && (
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Button onClick={HandleLogOut}> Log Out </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default LogOutComponent;
