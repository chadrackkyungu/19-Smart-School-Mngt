import React, { useState, useEffect } from "react"
import Select from "react-select"; //it comes with react
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
import { grade_Arrays, teacher_Grade_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";
import { religions_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";

function UpdateTeacher() {

  const { id } = useParams();
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("");

//GET STUDENTS DATA FROM THE DB
useEffect(() =>{
  const fetchData = async() =>{
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(Db, "TEACHERS"));
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

// UPLOAD STUDENT IMAGE
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

const [selectedMulti, setselectedMulti] = useState(null) // this is for multiple selection input

// UPDATE STUDENT
const handleValidSubmit = async(e, std_Input) => {
  const {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address,birthCountry } = std_Input;
  const allfield = {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address,birthCountry, img,selectedMulti,  timeStamp: serverTimestamp()};
  try {
      const updateRes = doc(Db, "TEACHERS", id);
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
          <title> Smart-school | update teacher </title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Update Teacher" />
        </Row>

        <div className="d-flex justify-content-between align-items-center  mb-4">
                <BackBtn url_Link="all-teachers" />

                <div className="btn-center text-center">
                    <h5> Update Teacher details </h5>
                </div>
        </div>

        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Update Teacher Details </h5>
            <Row> 
              <Col md={6}> 
               
                  <AvField
                  value={data.TeacherName}
                      className="mb-3 p-2 bg-white"
                      name="TeacherName"
                      label="First Name"
                      placeholder="Teacher Name"
                      type="text"
                      errorMessage="Please Enter Your Name"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                  value={data.TeacherLastName}
                      className="mb-3 p-2 bg-white"
                      name="TeacherLastName"
                      label="LastName"
                      placeholder="Teacher last name"
                      type="text"
                      errorMessage="Please Enter Your last name"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                  value={data.TeacherIdNumber}
                      className="mb-3 p-2 bg-white"
                      name="TeacherIdNumber"
                      label="Teacher Id Number"
                      placeholder="Teacher id Number"
                      type="text"
                      errorMessage="Please Enter Your id number"
                      validate={{ required: { value: true } }}
                  />
                 
                 <AvField 
                      value={data.date_of_birth}
                      className="mb-3 p-2 bg-white"
                      name="date_of_birth"
                      label="Date Of Birth Day" 
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

                <label className="control-label">Select Grade that you teach</label>
                    <Select
                    value={data.selectedMulti.value}
                      defaultValue={selectedMulti}
                      options={teacher_Grade_Arrays()}
                      isMulti={true}
                      onChange={setselectedMulti}
                    />

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
                        className="mb-3 p-2 bg-white"
                        name="address"
                        label="Your Address" 
                        type="text" 
                        errorMessage="Please enter your address"
                        validate={{ required: { value: true }}}
                  /> 
              </Col>

              <Col lg={12} md={6}>
              <AvField
              value={data.bio}
                className="mb-3"
                type="textarea"
                label="Short Bio"
                rows="5"
                name="bio"
                id="address"
                placeholder="Short bio"
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
                      <div className="d-flex align-items-center justify-centent">
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

                <FormGroup className="mb-0">
                  <div className="d-flex justify-content-center p-2 text-center">
                    <Button type="submit" color="primary" className="m-2  btn-mobile-width" >
                      Update teacher
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
  )
}

export default UpdateTeacher