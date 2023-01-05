import { toast } from "react-toastify";

const errorHandler = (error) => {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === "string") toast.error(message);

      return Promise.reject(error);
    }
  }
};

export default errorHandler;
