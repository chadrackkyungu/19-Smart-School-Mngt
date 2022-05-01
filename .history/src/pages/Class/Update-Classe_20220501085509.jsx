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

import { serverTimestamp, doc, collection, getDocs, updateDoc, deleteDoc} from 'firebase/firestore';
import { Db} from '../../Database/init-firebase';
import {  successTost_Update_Std, failUpdate_std, successTost } from '../../components/Toast'; 
//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";
import { useHistory, useParams } from "react-router-dom";

function UpdateClasse() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    let history = useHistory();


    //GET STUDENTS DATA FROM THE DB
 useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "CLASSES"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === id)
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id])


   // UPDATE STUDENT
   const handleValidSubmit = async(e, std_Input) => {
    const { teacherName, subject, number, email, grade, gender, weeks, StartTime, EndTime } = std_Input;
    const allfield = { teacherName, subject, number, email, grade, gender, weeks, StartTime, EndTime,  timeStamp: serverTimestamp()};
    try {
        const updateRes = doc(Db, "CLASSES", id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std();  //Toast a popUp that say successfull
    } catch (error) {
        failUpdate_std()  //Toast a popUp that say failed
    }
};

// Delete stuents from the database
const deleteStudent = async() => {
    try {
      await deleteDoc(doc(Db, "CLASSES", data.id));
      successTost();
      history.push(`/all-classes`);
    }catch(err){
      console.log("Error".err);
    }
  }


  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title> Smart-school | Update Class Time Table</title>
      </MetaTags>
      <Row>
        <Breadcrumb breadcrumbItem="Home" title="Add Class Time Table" />
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex justify-content-between"> 
              <BackBtn url_Link="all-classes" />
              <button type="button" className="btn btn-danger waves-effect waves-light text-center px-4" onClick={deleteStudent}>
                Delete 
                </button>
          </div>
              <div className="btn-center text-center ">
                 <h5> Update Class Time Table </h5>
              </div>
      </div>

      <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
    <Col xl={12} md={6}>
      <Card className="mini-stat bg-white text-black ">
        <CardBody>
          <AvForm onValidSubmit={(e, v) => {
             handleValidSubmit(e, v);
          }}>
          <h5 className="mb-5"> Update Class Time Table  </h5>
          <hr />
          <Row> 
            <Col md={6}> 
             
                <AvField
                value={data.teacherName}
                    className="mb-3 p-2 bg-white input-style"
                    name="teacherName"
                    label="Teacher Name"
                    type="text"
                    errorMessage="Please Name is required"
                    validate={{ required: { value: true } }}
                />
                <AvField
                value={data.subject}
                    className="mb-3 p-2 bg-white input-style"
                    name="subject"
                    label="Subject"
                    type="text"
                    errorMessage="Please subject is required"
                    validate={{ required: { value: true } }}
                />

            <AvField
            value={data.number}
              className="mb-3 p-2 bg-white input-style"
              name="number"
              label="Phone number"
              type="number"
              errorMessage="Please phone number require"
              validate={{
                required: { value: true },
                pattern: {
                  value: "^[0-9]+$",
                  errorMessage: "Only Numbers",
                },
              }}
            />

                <AvField
                value={data.email}
                    className="mb-3 p-2 bg-white input-style"
                    name="email"
                    label="E-Mail  "
                    type="email"
                    errorMessage="Invalid Email"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />   

            </Col> 

            <Col md={6}> 
                                
              <AvField value={data.grade} type="select" name="grade"  label="Select Grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
              {
                grade_Arrays().map((grade, key) => 
                  <option key={key}> {grade} </option>
                )
              }
              </AvField>

              <AvField value={data.gender} type="select" name="gender" label="Select Gender" className="mb-3 p-2 bg-white input-style"   errorMessage="please select gender"  validate={{ required: { value: true }}}>
                    <option>Select gender...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </AvField>

              <AvField value={data.weeks} type="select" name="weeks" label="Select Week" className="mb-3 p-2 bg-white input-style"   errorMessage="please select gender"  validate={{ required: { value: true }}}>
                    <option>Select week...</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wensday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Surterday</option>
                </AvField>

                <Row>

                <Col md={6}> 
                <AvField
                value={data.StartTime}
                    className="mb-3 p-2 bg-white input-style"
                    name="StartTime"
                    label="Start Time"
                    type="time"
                    errorMessage="Please enter time"
                    validate={{ required: { value: true } }}
                />
                </Col>  


                <Col md={6}> 
                <AvField
                value={data.EndTime}
                    className="mb-3 p-2 bg-white input-style"
                    name="EndTime"
                    label="End Time"
                    type="time"
                    errorMessage="Please enter end time"
                    validate={{ required: { value: true } }}
                />
                </Col>  
                 </Row>  
           
            </Col>

              <FormGroup className="mb-0">
                <div className="d-flex justify-content-center p-2 text-center">
                  <Button type="submit" color="primary" className="m-2  btn-mobile-width">
                    Update Class Time Table
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

export default UpdateClasse