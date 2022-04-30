
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
   return toast.error("failed to Added Student, Incorrect email or student Exist already. please try again!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}

  // Successfull Updated Student 
  export  const successTost_Update_Std = () =>   {
    return toast.success("Successfull Added Student!!!",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}


  // Fail to updated Student 
  export  const failUpdate_std = () =>   {
    return toast.error("Failed to Updated Student or Student does not existes ",{
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored"
    });
}