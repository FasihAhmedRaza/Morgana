import { toast } from "react-toastify";

export const successMessage = (successMsg: string = "Success!") => {
  toast.success(successMsg, {
    position: "bottom-right",
  });
};

export const errorMessage = (errorMsg: string | any = "Error!") => {
  toast.error(errorMsg, {
    position: "bottom-right",
  });
};
