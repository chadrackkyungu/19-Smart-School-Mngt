
import { toast } from 'react-toastify';

export const successTost = () =>   {
    return  toast.success("Successfull deleted student !!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}