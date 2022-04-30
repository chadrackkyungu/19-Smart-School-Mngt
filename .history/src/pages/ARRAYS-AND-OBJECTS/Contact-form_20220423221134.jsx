const ArrayForm = [
{
      id:1,
      name:"firstName",
      label:"First Name",
      placeholder:"First Name",
      type:"text",
      errorMessage:"Enter Name",
},
    {
      id:2,
      label:"Last Name",
      name:"LastName",
      type:"Last Name",
      placeholder:"Last Name",
      errorMessage:"Last Name",
    },
{
     id:3,
      name:"studenNumber",
      label:"Student Number",
      type:"text",
      placeholder:"Student Number",
      errorMessage:"Invalid Student Number"
 },
  
     {
      id:4,
      name:"date_of_birth",
      label:"Date Of Birth Day", 
      type:"date" ,
      errorMessage:"Invalid date of birth",
      title:"Use MM/DD/YYYY"
    //   validate={{ required: { value: true }}}
     },

     {
      id:5,
      type:"select",
      name:"gender",
      label:"Select Gender", 
      placeholder:"Select Gender", 
      errorMessage:"please select gender",  
    },

       
   

{    id:6,
      name:"number",
      label:"Number  ",
      placeholder:"Enter your phone number",
      type:"number",
      errorMessage:"Please Enter Your Phone Number",
    //   validate={{
    //     required: { value: true },
    //     pattern: {
    //       value: "^[0-9]+$",
    //       errorMessage: "Only Numbers",
    //     },
      },

      {
        id:7,
        name:"email",
        label:"E-Mail  ",
        placeholder:"Enter Valid Email",
        type:"email",
        errorMessage:"Invalid Email",
      //   validate={{
      //     required: { value: true },
      //     email: { value: true },
      //   }}
      }    ,     
     
    

    {
      id:8,
      type:"select" ,
      name:"religion" ,
      label:"Select your Relion",
      placeholder:"Religion" ,
      errorMessage:"please select gender",  
    },

     {
         id:9, 
         type:"select", 
         name:"grade", 
         placeholder:"Grade", 
         label:"Select your grade" ,
         errorMessage:"please select grade", 
     } ,


    { 
        id:10,
        type:"select",
        name:"birthCountry", 
        placeholder:"Birth country", 
        label:"Select Country Of birth", 
        errorMessage:"Select Country Of birth", 
    },

   {
      id:11,
      type:"textarea",
      label:"Adress",
      rows:"5",
      name:"address",
      placeholder:"Address",
      errorMessage:"This value is required.",
      },

    {
          id:12,
          label:"Enter Parent Name",
          name:"parentName",
          type:"text",
          placeholder:"Full Name",
          errorMessage:"full name",
        //   validate={{ required: { value: true } }}
     },
          {
          id:13,
          label:"Enter Parent Last Name",
          name:"parentLastName",
          type:"text",
          placeholder:"Parent Last Name",
          errorMessage:"parent Last Name"
        //   validate={{ required: { value: true } }}
          },
          {
          id:14,
          name:"CellNumber",
          label:"Enter cell phone Number ",
          type:"text",
          placeholder:"Cell phone Number",
          errorMessage:"Invalid cell phone Number",
        //   validate={{ required: { value: true }}}
        },

{
        id:15,
        name:"parentEmail",
        label:"E-Mail  ",
        placeholder:"Enter Valid Email",
        type:"email",
        errorMessage:"Invalid Email",
        // validate={{
        //   required: { value: true },
        //   email: { value: true },
        // }}
    },

     {    
         id:16,
          className:"mb-3 p-2 bg-white",
          label:"Job Title",
          name:"jobTitle",
          type:"text",
          placeholder:"Job Title",
          errorMessage:"Job Title is required",
        //   validate={{ required: { value: true } }}
     },


         
         {
            id:17,
            type:"textarea",
            label:"Your Adress",
            rows:"5",
            name:"parentAddress",
            placeholder:"Parent Address",
            errorMessage:"This value is required.",
        }
]

export function input_form_Arrays() {
    return ArrayForm;
}



 /* <AvField
                      className="mb-3 p-2 bg-white"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-2 bg-white"
                      label="Last Name"
                      name="LastName"
                      type="Last Name"
                      placeholder="Last Name"
                      errorMessage="Last Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-2 bg-white"
                      name="studenNumber"
                      label="Student Number"
                      type="text"
                      placeholder="Student Number"
                      errorMessage="Invalid Student Number"
                      validate={{ required: { value: true }}}
                    />
                  
                      <AvField 
                      className="mb-3 p-2 bg-white"
                      name="date_of_birth"
                      label="Date (validate prop)" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                       />

                    <AvField
                      className="mb-3 p-2 bg-white"
                      name="email"
                      label="E-Mail  "
                      placeholder="Enter Valid Email"
                      type="email"
                      errorMessage="Invalid Email"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />   */