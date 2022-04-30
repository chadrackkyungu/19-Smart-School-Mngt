
import { toast } from 'react-toastify';

//Successfull Deleted Student
export const successTost = () =>   {
    return  toast.success("Successfull deleted student !!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}

  // Successfull Added Student 
export  const successTost_addStd = () =>   {
    return toast.success("Successfull Added Student!!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}

  // couuldn't be able to add students 
export  const errorTost = () =>   {
   return toast.error("failed to Added Student please try again",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}