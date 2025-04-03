import {toast, ToastContainer, Bounce} from "react-toastify/unstyled"
const Notification = ({Toast}) => {
    toast.info(Toast, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        return (
            <ToastContainer
              position="top-center"
              autoClose={1000}
              limit={30}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          )
}

export default Notification
