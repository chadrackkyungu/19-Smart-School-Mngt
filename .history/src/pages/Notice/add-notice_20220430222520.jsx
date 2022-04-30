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
                      name="title"
                      label="Title"
                      type="text"
                      errorMessage="Please enter title"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="postedBy"
                      label="Posted By"
                      type="text"
                      errorMessage="Please require"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="date"
                      label="Date"
                      type="date"
                      errorMessage="Please require"
                      validate={{ required: { value: true } }}
                  />
              </Col> 

              <Col md={6}> 

              <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="details"
                      label="Details"
                      type="textarea"
                      rows="10"
                      errorMessage="Please require"
                      validate={{ required: { value: true } }}
                  />
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
