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
import BackBtn from "../../components/Back-btn";



const AddNewStudents = () => {

  const [fileName, setFileName] = useState("");
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();



  useEffect(() => {
    const uploadFile = () =>{

      const name = new Date().getTime() + fileName.name; 

      console.log(name);
      console.log( fileName.name);

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

    const {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber} = std_Input;
    const allfield = {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber, img};

    try {
      //added user to authentication storage
      const rslt = await createUserWithEmailAndPassword(auth, std_Input.email, std_Input.number);
     // const res = await addDoc(collection(Db, "STUDENTS"), { data}); //*without adding the user to authentication

     //* (1)Db <=> database;   (2)rslt.user.uid <=> it's the user ID;    (3)std_Input <=> user input field;  (4)timeStamp
     const res = await setDoc(doc(Db, "STUDENTS", rslt.user.uid), { allfield, timeStamp: serverTimestamp()});
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
          <Breadcrumb breadcrumbItem="Home" title="Add Students" />
        </Row>

        <Card>
        <div className="d-flex justify-content-between align-items-center">
                <BackBtn url_Link="student-details" />
        </div>
      </Card>

    

      <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
            <Col xl={11} md={6}>
              <Card className="mini-stat bg-white text-black ">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                <CardBody>
                      <AvForm onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                        // console.log(e, v);
                      }}>
                  <Row> 

                    <Col md={6}> 
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      label="Last Name"
                      name="LastName"
                      type="Last Name"
                      placeholder="Last Name"
                      errorMessage="Last Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="studenNumber"
                      label="Student Number"
                      type="text"
                      placeholder="Student Number"
                      errorMessage="Invalid Student Number"
                      validate={{ required: { value: true }}}
                    />
                  
                      <AvField 
                      className="mb-3 p-3 bg-white"
                      name="date_of_birth"
                      label="Date (validate prop)" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                       />

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


                    <Col md={6}> 
                    <AvField
                      className="mb-3 p-3 bg-white"
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
                    
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="number"
                      label="Number  "
                      placeholder="Enter Only number"
                      type="number"
                      errorMessage="Enter Only Number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                    
                    <AvField type="select" name="gender" label="Select Gender" className="mb-3 p-3 bg-white" placeholder="Select Gender"  errorMessage="please select gender"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </AvField>

                    <AvField type="select" name="religion" placeholder="Religion" label="Select your Relion" className="mb-3 p-3 bg-white"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Christian</option>
                      <option>Islam</option>
                      <option>Hindu</option>
                      <option>Buddish</option>
                    </AvField>

                    <AvField type="select" name="grade" placeholder="Grade" label="Select your grade" className="mb-3 p-3 bg-white"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </AvField>

                    {
                      perc > 1 &&(
                        <div class="d-flex align-items-center justify-centent">
                        <progress  max="100" value={perc} class="amount-progress" ></progress> 
                        <span>{perc}%</span>
                     </div>  
                      )
                    }

                    

                    <AvField 
                      className="mb-3 p-3 bg-white select-file"                   
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

                    <FormGroup className="mb-0">
                      <div className="d-flex justify-content-center p-2 text-center">
                        <Button type="submit" color="primary" className="m-2 w-25"  disabled={perc !== null && perc < 100}>
                          Submit
                        </Button>
                      </div>
                    </FormGroup>

                    </Row>
                  </AvForm>

                    </CardBody>
              </Card>
            </Col>
        </Row>

        </div>

    </React.Fragment>
  );
};

export default AddNewStudents;