import { Container } from "react-bootstrap";

import NavbarCompUP from "./NavbarCompUP";
import NavBarCompDOWN from "./NavBarCompDOWN";
import NavBarCompDOWNDOWN from "./NavBarCompDOWNDOWN";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWidthWindow } from "../../redux/reducers/firstReducer";

const NavBarComp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWidthWindow(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);

        // Pulizia allo smontaggio
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);

    return (
        <div className="sticky-top">
            <Container fluid className="p-0">
                <NavbarCompUP />
                <NavBarCompDOWN />
                <NavBarCompDOWNDOWN />
            </Container>
        </div>
    );
};

export default NavBarComp;
