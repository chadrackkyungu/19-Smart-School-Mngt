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

import {  doc, updateDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';

import { Db, auth, storage } from '../../Database/init-firebase';
import { createUserWithEmailAndPassword, updateEmail } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification
import BackBtn from "../../components/Back-btn";
import { useParams} from "react-router-dom";


//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { countrie_Arrays } from '../ARRAYS-AND-OBJECTS/Arrays-countries.jsx';
import { grade_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";
import { religions_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";



const AddNewStudents = () => {

    const { id } = useParams();

    const [perc, setPerc] = useState(0);
    const [img, setImg] = useState();
    const [data, setData] = useState([]);
    const [fileName, setFileName] = useState("");



    // get the data and populate inside the input
  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === id)
        setData(result);
        setImg(result.img); //the the url image
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id])

  console.log(img);


  //  image upload
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
            setImg(downloadURL) // if the user upload an image  set that image
          });
        }
      );
    };
    fileName && uploadFile();
  }, [fileName]);


  console.log(img);

  // UPDATE STUDENT
  const handleValidSubmit = async(e, std_Input) => {
    const {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber, birthCountry,parentName, parentLastName,CellNumber, parentEmail, jobTitle,parentBirthCountry,parentAddress} = std_Input;
    const allfield = {LastName, address, date_of_birth, email, firstName, gender, grade, number, religion, studenNumber,birthCountry,parentName, parentLastName,CellNumber, parentEmail, jobTitle,parentBirthCountry,parentAddress, img, timeStamp: serverTimestamp()};

    try {
        const updateRes = doc(Db, "STUDENTS", id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std();  //Toast a popUp that say successfull
    } catch (error) {
        failUpdate_std()  //Toast a popUp that say failed
    }
  };



  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Update Students" />
        </Row>

        <Card>
        <div className="d-flex justify-content-between align-items-center">
                <BackBtn url_Link="all-students" />

                <div className="btn-center text-center m-4">
                    <Button  className="btn bg-green-700 waves-effect waves-light m-2 border-0"> Update student details </Button>
                </div>
        </div>
       </Card>

    

      <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
            
            <Col xl={12} md={6}>
              <Card className="mini-stat bg-white text-black ">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                <CardBody>
                      <AvForm onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                        // console.log(e, v);
                      }}>

                  <h5 className="mb-5"> Student Details </h5>

                  <Row> 

                    <Col md={6}> 
                    <AvField
                      value={data.firstName}
                      className="mb-3 p-2 bg-white"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                    value={data.LastName}
                      className="mb-3 p-2 bg-white"
                      label="Last Name"
                      name="LastName"
                      type="Last Name"
                      placeholder="Last Name"
                      errorMessage="Last Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                    value={data.number}
                      className="mb-3 p-2 bg-white"
                      name="studenNumber"
                      label="Student Number"
                      type="text"
                      placeholder="Student Number"
                      errorMessage="Invalid Student Number"
                      validate={{ required: { value: true }}}
                    />
                  
                      <AvField 
                      value={data.date_of_birth}
                      className="mb-3 p-2 bg-white"
                      name="date_of_birth"
                      label="Date (validate prop)" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                       />

                    <AvField
                    value={data.email}
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
                    value={data.number}
                      className="mb-3 p-2 bg-white"
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
                    
                    <AvField value={data.gender} type="select" name="gender" label="Select Gender" className="mb-3 p-2 bg-white" placeholder="Select Gender"  errorMessage="please select gender"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </AvField>

                    <AvField value={data.religion} type="select" name="religion" placeholder="Religion" label="Select your Relion" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      religions_Arrays().map((religion, key) => 
                        <option key={key}> {religion} </option>
                      )
                    }
                    </AvField>

                    <AvField value={data.grade} type="select" name="grade" placeholder="Grade" label="Select your grade" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      grade_Arrays().map((grade, key) => 
                        <option key={key}> {grade} </option>
                      )
                    }
                    </AvField>


                    <AvField value={data.birthCountry} type="select" name="birthCountry" placeholder="Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                    {
                      countrie_Arrays().map((country, key) => 
                        <option key={key}> {country} </option>
                      )
                    }
                    </AvField>

                    </Col>

                    <Col lg={12} md={6}>

                    <AvField
                      value={data.address}
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
                        value={data.parentName}
                          className="mb-3 p-2 bg-white"
                          label="Enter Parent Name"
                          name="parentName"
                          type="text"
                          placeholder="Full Name"
                          errorMessage="full name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                        value={data.parentLastName}
                          className="mb-3 p-2 bg-white"
                          label="Enter Parent Last Name"
                          name="parentLastName"
                          type="text"
                          placeholder="Parent Last Name" n
                          errorMessage="parent Last Name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                        value={data.CellNumber}
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
                      value={data.parentEmail}
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
                      value={data.jobTitle}
                          className="mb-3 p-2 bg-white"
                          label="Job Title"
                          name="jobTitle"
                          type="text"
                          placeholder="Job Title"
                          errorMessage="Job Title is required"
                          validate={{ required: { value: true } }}
                      />


                          <AvField value={data.parentBirthCountry}  type="select" name="parentBirthCountry" placeholder="Parent Birth country" label="Select Country Of birth" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
                              {
                                countrie_Arrays().map((country, key) => 
                                <option key={key}> {country} </option>
                                )
                              }
                          </AvField>
                    </Col>
                      
                    <Col xl={12} md={6}>
                          <AvField
                            value={data.parentAddress}
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
                        <Button type="submit" color="primary" className="m-2 w-25 bg-green-700">
                          Update student details
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