import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { setToken } from "../../redux/reducers/tokenReducer";
// import { toast } from "react-toastify";
// import { useEffect } from "react";

const LogOutComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { token } = useSelector((store: AppState) => store.token);

    const HandleLogOut = () => {
        dispatch(setToken(null));
    };

    // useEffect(() => {
    //     if (!token) {
    //         toast.info("logout effettuato.");
    //     } else {
    //         toast.info("sei loggato.");
    //     }
    // }, [token]);

    return (
        <>
            {token && (
                <Button className="border border-2 border-black py-0" variant="transparent" onClick={HandleLogOut}>
                    {" "}
                    Log Out{" "}
                </Button>
            )}
        </>
    );
};

export default LogOutComponent;
