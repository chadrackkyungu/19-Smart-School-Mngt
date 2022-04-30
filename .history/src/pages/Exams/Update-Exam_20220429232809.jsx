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
import { successTost_Update_Std, failUpdate_std, successTost } from '../../components/Toast'; 
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';
import BackBtn from "../../components/Back-btn";
import { useParams, useHistory } from "react-router-dom";

function UpdateExam() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    let history = useHistory();
  
  //GET STUDENTS PAYMENT DATA FROM THE DB
  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "EXAMS"));
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


   //DELETE PAYMENT
   const deleteStudent = async() => {
    try {
      await deleteDoc(doc(Db, "EXAMS", data.id));
      successTost();
      history.push(`/all-subjects`);
    }catch(err){
      console.log("Error".err);
    }
  }
  
   // UPDATE STUDENT
   const handleValidSubmit = async(e, std_Input) => {
    const { EndTime,StartTime,exam,grade,section, semester,subjectName,notice, urlImage} = std_Input;
    const allfield = { EndTime,StartTime,exam,grade,section, semester,subjectName,notice,urlImage,  timeStamp: serverTimestamp()};
    try {
        const updateRes = doc(Db, "EXAMS", data.id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std(); 
    } catch (error) {
        failUpdate_std() 
    }
  };
  

  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title> Smart-school | Update Subjects</title>
      </MetaTags>
      <Row>
        <Breadcrumb breadcrumbItem="Dashboard" title="Add A Subject" />
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-4">
              <BackBtn url_Link="all-subjects" />
              <div className="btn-center text-center ">
                 <button className="btn btn-primary" onClick={deleteStudent}> delete </button>
              </div>
      </div>
    <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add Subjects  </h5>
            <hr />
            <Row> 
              <Col md={6}> 

                <AvField type="select" name="exam" label="Select Exam or Test" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option>select...</option>
                  <option>Exam </option>
                  <option>Test 1</option>
                  <option>Test 2</option>
                </AvField>
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectName"
                      label="Subject Name"
                      type="text"
                      errorMessage="Please enter subject name"
                      validate={{ required: { value: true } }}
                  />

                <AvField type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
                  {
                    grade_Arrays().map((grade, key) => 
                      <option key={key}> {grade} </option>
                    )
                  }
                </AvField>

                <AvField type="select" name="section" label="Select section" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option> select section</option>
                  <option>A </option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </AvField>
              </Col> 

              <Col md={6}>
              
              
              <AvField type="select" name="semester" label="Semester" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option>Select semester</option>
                  <option>1</option>
                  <option>2</option>
                </AvField>

                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="date"
                      label="Subject Name"
                      type="date"
                      errorMessage="Please enter date "
                      validate={{ required: { value: true } }}
                  />
                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="StartTime"
                      label="Start Time"
                      type="time"
                      errorMessage="Please enter time"
                      validate={{ required: { value: true } }}
                  />
                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="EndTime"
                      label="End Time"
                      type="time"
                      errorMessage="Please enter end time"
                      validate={{ required: { value: true } }}
                  />
              </Col>

              <Col lg={12} md={6}>
              <AvField
                placeholder="https://www.lipsum.com/"
                className="mb-3 input-style"
                type="text"
                label="URL Image"
                name="urlImage"
                errorMessage="This value is required."
                validate={{
                  required: { value: true },
                }}
              />
              </Col>

              <Col lg={12} md={6}>
              <AvField
              placeholder="notice"
                className="mb-3 input-style"
                type="textarea"
                label="Notice"
                rows="5"
                name="notice"
                errorMessage="This value is required."
                validate={{
                  required: { value: true },
                }}
              />
              </Col>

                <FormGroup className="mb-0">
                  <div className="d-flex justify-content-center p-2 text-center">
                    <Button type="submit" color="primary" className="m-2  btn-mobile-width" >
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
  )
}

export default UpdateExam