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
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";

const AddNewBook = () => {


  const [fileName, setFileName] = useState("");
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();

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
    console.log(std_Input);
    const {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address, bio,birthCountry } = std_Input;
    const allfield = {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address, bio ,birthCountry, img,  timeStamp: serverTimestamp()};
    try {
      const rslt = await createUserWithEmailAndPassword(auth, std_Input.email, std_Input.TeacherIdNumber); 
      await setDoc(doc(Db, "TEACHERS", rslt.user.uid), { allfield });
     successTost_addStd();
    } catch (error) {
      errorTost()
    }
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | Add New Book</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Book" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-books" />
                <div className="btn-center text-center ">
                   <h5> Add New Book</h5>
                </div>
        </div>




<Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add New Book  </h5>
            <Row> 
              <Col md={6}> 
               
                  <AvField
                      className="mb-3 p-2 bg-white"
                      name="bookName"
                      label="First Name"
                      type="text"
                      errorMessage="Please Enter Your Book Name"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                      className="mb-3 p-2 bg-white"
                      name="subject"
                      label="Subject"
                      type="text"
                      errorMessage="Please Enter Your subject"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                      className="mb-3 p-2 bg-white"
                      name="writerName"
                      label="Writer Name"
                      type="text"
                      errorMessage="Please Enter writer name"
                      validate={{ required: { value: true } }}
                  />
                 
                

                    
              </Col> 

              <Col md={6}> 
              <AvField 
                      className="mb-3 p-2 bg-white"
                      name="publishYear"
                      label="Publish Year" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                 /> 
                                  
              <AvField
                className="mb-3 p-2 bg-white"
                name="number"
                label="Book ID No"
                type="number"
                errorMessage="Please Enter book id"
                validate={{
                  required: { value: true },
                  pattern: {
                    value: "^[0-9]+$",
                    errorMessage: "Only Numbers",
                  },
                }}
              />
              <AvField type="select" name="birthCountry"  label="Select Grade" className="mb-3 p-2 bg-white"  validate={{ required: { value: true }}}>
              {
                grade_Arrays().map((grade, key) => 
                  <option key={key}> {grade} </option>
                )
              }
              </AvField>
              </Col>

              <Col lg={12} md={6}>
              <AvField
                className="mb-3"
                type="textarea"
                label="Book Description"
                rows="5"
                name="bio"
                placeholder="Book description"
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
    </Row> 
    
      </div>
    </React.Fragment>
  );
};

export default AddNewBook;