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

import { serverTimestamp, doc, setDoc, addDoc, collection} from 'firebase/firestore';
import { Db} from '../../Database/init-firebase';

import { successTost_addStd, errorTost} from '../../components/Toast'; //Toast Notification
import BackBtn from "../../components/Back-btn";

const CreateMessages = () => {


  const handleValidSubmit = async(e, std_Input) => {
    const {  title, recipient, message } = std_Input;
    const allfield = { title, recipient, message,  timeStamp: serverTimestamp()};

    try {
      await addDoc(collection(Db, "MESSAGES"), { allfield });
     successTost_addStd();
    } catch (error) {
      errorTost()
    }
  };


  return (
    <React.Fragment>
      <div className="page-content">
         <MetaTags>
          <title> Smart-school | Write Message </title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Write Message" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-message" />
                <div className="btn-center text-center ">
                   <h5> Write Message </h5>
                </div>
        </div>


        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Write Messages  </h5>
            <hr />
            <Row> 
              <Col md={12}> 
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="title"
                      label="Title"
                      type="text"
                      errorMessage="Please enter title"
                      validate={{ required: { value: true } }}
                  />

                    <AvField type="select" name="recipient" label="Select Recipient" className="mb-3 p-2 bg-white input-style"   errorMessage="please select recipient"  validate={{ required: { value: true }}}>
                      <option>Select Recipient...</option>
                      <option>Admin</option>
                      <option>Principal</option>
                      <option>Mr Joel</option>
                      <option>Mr Kane</option>
                    </AvField>

                    <AvField
                      className="mb-3 input-style"
                      type="textarea"
                      label="Write Message"
                      rows="10"
                      name="message"
                      errorMessage="This value is required."
                      validate={{
                        required: { value: true },
                      }}
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

export default CreateMessages;
