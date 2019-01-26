import React from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Notifications extends React.Component {
  error() {
    toast.dismiss();
    toast.error("You guessed wrong!", {
      autoClose: 1500,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  newImageSetLoaded() {
    toast.dismiss();
    toast.info("New images loaded", {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  success() {
    toast.dismiss();
    toast.success("You guessed right!", {
      autoClose: 1500,
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  render() {
    return <ToastContainer transition={Zoom} />;
  }
}

export default Notifications;
