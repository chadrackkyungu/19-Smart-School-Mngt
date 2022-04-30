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

import { serverTimestamp, doc, setDoc, addDoc, collection, getDocs, updateDoc} from 'firebase/firestore';
import { Db, auth, storage } from '../../Database/init-firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_addStd, errorTost, successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification
//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";
import { useParams } from "react-router-dom";

const CreateStudentsPayments = () => {

  const handleValidSubmit = async(e, std_Input) => {
    const {bookName,subject,writerName,publishYear,number,grade,desc } = std_Input;
    const allfield = {bookName,subject,writerName,publishYear,number,grade,desc,  timeStamp: serverTimestamp()};

    try {

      await addDoc(collection(Db, "PAYMENTS"), { allfield });
     successTost_addStd();
     
    } catch (error) {
      errorTost()
    }
  };

  return (
   <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | Add Payment</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Book" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-books" />
                <div className="btn-center text-center ">
                   <h5> Add Student Payment </h5>
                </div>
        </div>
    <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add Student Payment  </h5>
            <hr />
            <Row> 
              <Col md={6}> 
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="name"
                      label="Your Name"
                      type="text"
                      errorMessage="Please enter a name"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="ID_Number"
                      label="ID"
                      type="text"
                      errorMessage="Please Enter the id number"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="amount"
                      label="Total Fees"
                      type="number"
                      errorMessage="Please EnterThe Amount"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                       

                       <AvField type="select" name="status" label="Select Status" className="mb-3 p-2 bg-white input-style"   errorMessage="please select payment method"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>CASH</option>
                  <option>EFT</option>
              </AvField>

              </Col> 


              <Col md={6}> 
              <AvField 
                      className="mb-3 p-2 bg-white input-style"
                      name="date"
                      label="Date" 
                      type="date" 
                      errorMessage="Invalid date of birth"
                      validate={{ required: { value: true }}}
                      title="Use MM/DD/YYYY"
                 /> 
                                  
             
              <AvField type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
              {
                grade_Arrays().map((grade, key) => 
                  <option key={key}> {grade} </option>
                )
              }
              </AvField>

              <AvField type="select" name="payment_Method" label="Select Payment Method" className="mb-3 p-2 bg-white input-style"   errorMessage="please select payment method"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>CASH</option>
                  <option>EFT</option>
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

export default CreateStudentsPayments;
