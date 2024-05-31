import { ToastContainer } from "react-toastify";

const ToasterComponent = () => {
    return (
        <div>
            {" "}
            <ToastContainer
                autoClose={2000}
                position="top-left"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ToasterComponent;
