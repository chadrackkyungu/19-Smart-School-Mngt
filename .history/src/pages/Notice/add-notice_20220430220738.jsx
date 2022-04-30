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

const AddNotice = () => {


  const handleValidSubmit = async(e, std_Input) => {
    const { EndTime,StartTime,exam,grade,section, semester,subjectName,notice, urlImage} = std_Input;
    const allfield = { EndTime,StartTime,exam,grade,section, semester,subjectName,notice,urlImage,  timeStamp: serverTimestamp()};
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
          <title> Smart-school | Add notice </title>
        </MetaTags>

        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add Notice" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-notice" />
                <div className="btn-center text-center">
                   <h5> Add Notice </h5>
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
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectName"
                      label="Subject Name"
                      type="text"
                      errorMessage="Please enter subject name"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectCode"
                      label="Code"
                      type="number"
                      errorMessage="Please Enter subject number"
                      validate={{ required: { value: true } }}
                  />

                 
                       

                <AvField type="select" name="type" label="Select Subject Type" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>Mathematics</option>
                  <option>Theory</option>
                  <option>Practical</option>
                </AvField>

                <AvField type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
                  {
                    grade_Arrays().map((grade, key) => 
                      <option key={key}> {grade} </option>
                    )
                  }
              </AvField>

              </Col> 

            
                <FormGroup className="mb-0">
                  <div className="d-flex justify-content-center p-2 text-center">
                    <Button type="submit" color="primary" className="m-2  btn-mobile-width">
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

export default AddNotice;
