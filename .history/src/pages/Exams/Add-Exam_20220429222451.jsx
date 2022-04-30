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
import { serverTimestamp,addDoc, collection} from 'firebase/firestore';
import { Db} from '../../Database/init-firebase';
import { successTost_addStd, errorTost} from '../../components/Toast'; //Toast Notification
//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';
import BackBtn from "../../components/Back-btn";

const AddExams = () => {
  
  const handleValidSubmit = async(e, std_Input) => {
    const { EndTime,StartTime,exam,grade,section, semester,subjectName,notice} = std_Input;
    const allfield = { EndTime,StartTime,exam,grade,section, semester,subjectName,notice,  timeStamp: serverTimestamp()};
    try {
      await addDoc(collection(Db, "EXAMS"), { allfield });
     successTost_addStd();
    } catch (error) {
      errorTost()
    }
  };


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title> Smart-school | Add Exam</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add New Exam" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-exams" />
                <div className="btn-center text-center ">
                   <h5> Add Exam </h5>
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
  );
};

export default AddExams;
