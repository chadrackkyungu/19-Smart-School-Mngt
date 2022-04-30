import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import MetaTags from "react-meta-tags";
import Breadcrumb from '../../components/Common/Breadcrumb';

import { serverTimestamp, doc, setDoc} from 'firebase/firestore';
import { Db, auth, storage } from '../../Database/init-firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_addStd, errorTost } from '../../components/Toast'; //Toast Notification

//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { countrie_Arrays } from '../ARRAYS-AND-OBJECTS/Arrays-countries.jsx';
import { grade_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";
import { religions_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";
import { input_form_Arrays } from "../ARRAYS-AND-OBJECTS/Contact-form.jsx";

import BackBtn from "../../components/Back-btn";

const AddNewStudents = () => {

  const [fileName, setFileName] = useState("");
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();
  const[show, setShow]=useState(false);

  useEffect(() => {
    const uploadFile = () =>{
      const name = new Date().getTime() + fileName.name; 

      const storageRef = ref(storage, fileName.name);
      const uploadTask = uploadBytesResumable(storageRef, fileName)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          setPerc(progress.toFixed(0));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL)
          });
        }
      );
    };

    fileName && uploadFile();
  }, [fileName]);


  const handleValidSubmit = async(e, std_Input) => {
    const {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber,birthCountry,parentName, parentLastName,CellNumber, parentEmail, jobTitle,parentBirthCountry,parentAddress   } = std_Input;
    const allfield = {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber,birthCountry,parentName, parentLastName,CellNumber, parentEmail, jobTitle,parentBirthCountry,parentAddress, img,  timeStamp: serverTimestamp()};

    try {
      const rslt = await createUserWithEmailAndPassword(auth, std_Input.email, std_Input.number);  //added user to authentication storage
     // const res = await addDoc(collection(Db, "STUDENTS"), { data}); // without adding the user to authentication

     // (1)Db <=> database;   (2)rslt.user.uid <=> it's the user ID;    (3)std_Input <=> user input field;  (4)timeStamp
     const res = await setDoc(doc(Db, "STUDENTS", rslt.user.uid), { allfield });
     successTost_addStd();
    } catch (error) {
      errorTost()
    }
  };

  return (
    <React.Fragment>
   
      <div className="page-content">
        <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add Students" />
        </Row>
        {/* <Card> */}
        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-students" />
                <div className="btn-center text-center ">
                    <button type="button" className="btn btn-danger waves-effect waves-light text-center" onClick={()=>setShow(!show)} >
                       Add New Student
                    </button>
                </div>
        </div>
      {/* </Card> */}

      { show ? 

      <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
            <Col xl={12} md={6}>
              <Card className="mini-stat bg-white text-black ">
                <CardBody>
                  <AvForm onValidSubmit={(e, v) => {
                     handleValidSubmit(e, v);
                  }}>

                  <h5 className="mb-5"> Student Details </h5>

                  <Row> 
                    <Col md={6}> 
                      {
                        input_form_Arrays().map((input, i) => {
                          if(i < 3)
                          return(
                            <AvField
                              className="mb-3 p-2 bg-white"
                              name={input.name}
                              label={input.label}
                              placeholder={input.placeholder}
                              type={input.text}
                              errorMessage={input.errorMessage}
                              validate={{ required: { value: true } }}
                          />
                          )
                        })
                      }  

                       <AvField 
                      className="mb-3 p-2 bg-white"
                      name="date_of_birth"
                      label="Date Of Birth Day" 
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
                    />      
                    </Col> 

                    <Col md={6}> 
                                        
                    <AvField
                      className="mb-3 p-2 bg-white"
                      name="number"
                      label="Enter you phone number"
                      placeholder="Enter you phone number"
                      type="number"
                      errorMessage="Please Enter your phone number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                    
                    <AvField type="select" name="gender" label="Select Gender" className="mb-3 p-2 bg-white" placeholder="Select Gender"  errorMessage="please select gender"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </AvField>

                    <AvField type="select" name="religion" placeholder="Religion" label="Select your Relion" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      religions_Arrays().map((religion, key) => 
                        <option key={key}> {religion} </option>
                      )
                    }
                    </AvField>

                    <AvField type="select" name="grade" placeholder="Grade" label="Select your grade" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      grade_Arrays().map((grade, key) => 
                        <option key={key}> {grade} </option>
                      )
                    }
                    </AvField>
                    <AvField type="select" name="birthCountry" placeholder="Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      countrie_Arrays().map((country, key) => 
                        <option key={key}> {country} </option>
                      )
                    }
                    </AvField>
                    </Col>
                    <Col lg={12} md={6}>
                    <AvField
                      className="mb-3"
                      type="textarea"
                      label="Adress"
                      rows="5"
                      name="address"
                      id="address"
                      placeholder="Address"
                      errorMessage="This value is required."
                      validate={{
                        required: { value: true },
                      }}
                    />
                    </Col>

                      <Row className="m-4"> 
                    <Col xl={16} md={6}>
                        {
                          perc > 1 &&(
                            <div class="d-flex align-items-center justify-centent">
                            <progress  max="100" value={perc} class="amount-progress" ></progress> 
                            <span>{perc}%</span>
                        </div>  
                          )
                        }

                        <AvField 
                          className="mb-3 p-2 bg-white select-file"                   
                          type="file"  
                          name="pic"
                          label="choose image"
                          errorMessage="Please select image"
                          aria-describedby="inputGroupFileAddon01"
                          validate={{
                            required: { value: true },
                          }}
                          onChange={(e) => setFileName(e.target.files[0])}
                    />
                    </Col>

                        <Col lg={6} md={6}>
                          <img src={img ? img : schoolImg} className="rounded-circle avatar-lg" alt="" />
                        </Col>
                              
                    </Row>
                      <h5 className="mb-5"> Parent Details </h5>
                    <Row>
                      <Col xl={6} md={6}>
                        <AvField
                          className="mb-3 p-2 bg-white"
                          label="Enter Parent Name"
                          name="parentName"
                          type="text"
                          placeholder="Full Name"
                          errorMessage="full name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                          className="mb-3 p-2 bg-white"
                          label="Enter Parent Last Name"
                          name="parentLastName"
                          type="text"
                          placeholder="Parent Last Name" n
                          errorMessage="parent Last Name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                          className="mb-3 p-2 bg-white"
                          name="CellNumber"
                          label="Enter cell phone Number "
                          type="text"
                          placeholder="Cell phone Number"
                          errorMessage="Invalid cell phone Number"
                          validate={{ required: { value: true }}}
                        />
                      </Col>

                    <Col xl={6} md={6}>
                      <AvField
                        className="mb-3 p-2 bg-white"
                        name="parentEmail"
                        label="E-Mail  "
                        placeholder="Enter Valid Email"
                        type="email"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                      />

                      <AvField
                          className="mb-3 p-2 bg-white"
                          label="Job Title"
                          name="jobTitle"
                          type="text"
                          placeholder="Job Title"
                          errorMessage="Job Title is required"
                          validate={{ required: { value: true } }}
                      />
                          <AvField type="select" name="parentBirthCountry" placeholder="Parent Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                              {
                                countrie_Arrays().map((country, key) => 
                                <option key={key}> {country} </option>
                                )
                              }
                          </AvField>
                    </Col>                     
                    <Col xl={12} md={6}>
                          <AvField
                            className="mb-3"
                            type="textarea"
                            label="Your Adress"
                            rows="5"
                            name="parentAddress"
                            id="address"
                            placeholder="Parent Address"
                            errorMessage="This value is required."
                            validate={{
                              required: { value: true },
                            }}
                          />

                      </Col>

                    </Row>
                    <FormGroup className="mb-0">
                      <div className="d-flex justify-content-center p-2 text-center">
                        <Button type="submit" color="primary" className="m-2  btn-mobile-width"  disabled={perc !== null && perc < 100}>
                          Submit
                        </Button>
                      </div>
                    </FormGroup>

                    </Row>
                  </AvForm>

                    </CardBody>
              </Card>
            </Col>
        </Row> : null
        }
        </div>  
    </React.Fragment>
  );  
};
export default AddNewStudents;