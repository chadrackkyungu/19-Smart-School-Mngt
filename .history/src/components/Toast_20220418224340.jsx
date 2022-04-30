
import { toast } from 'react-toastify';

export const successTost = () =>   {
    return  toast.success("Successfull deleted student !!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}

  // Successfull tost
export  const successTost_addStd = () =>   {
    return toast.success("Successfull Added Student!!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
  }

  // Error tost
export  const errorTost = () =>   {
   return toast.error("failed to Added Student please try again",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
  }