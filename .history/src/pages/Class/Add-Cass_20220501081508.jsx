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

import { serverTimestamp, addDoc, collection} from 'firebase/firestore';
import { Db } from '../../Database/init-firebase';
import { successTost_addStd, errorTost } from '../../components/Toast'; //Toast Notification
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';
import BackBtn from "../../components/Back-btn";

const AddClass = () => {

  const handleValidSubmit = async(e, std_Input) => {
    console.log(std_Input);

    const {bookName,subject,writerName,publishYear,number,grade,desc } = std_Input;
    const allfield = {bookName,subject,writerName,publishYear,number,grade,desc,  timeStamp: serverTimestamp()};
    try {
      await addDoc(collection(Db, "CLASSES"), { allfield });
     successTost_addStd();
     
    } catch (error) {
      errorTost()
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | Add Class Time Table</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Class Time Table" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-books" />
                <div className="btn-center text-center ">
                   <h5> Add Class Time Table </h5>
                </div>
        </div>


        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add Class Time Table  </h5>
            <hr />
            <Row> 
              <Col md={6}> 
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="teacherName"
                      label="Teacher Name"
                      type="text"
                      errorMessage="Please Name is required"
                      validate={{ required: { value: true } }}
                  />
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subject"
                      label="Subject"
                      type="text"
                      errorMessage="Please subject is required"
                      validate={{ required: { value: true } }}
                  />

              <AvField
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

              </Col> 

              <Col md={6}> 
                                  
              <AvField type="select" name="grade" placeholder="Select grade..."  label="Select Grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
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

export default AddClass;