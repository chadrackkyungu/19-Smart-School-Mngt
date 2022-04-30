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
import BackBtn from "../../components/Back-btn";

const AddExpenses = () => {

  const handleValidSubmit = async(e, std_Input) => {
    console.log(std_Input);
    const { ID_Number,Status,amount,date,name,payment_Method,grade } = std_Input;
    const allfield = { ID_Number,Status,amount,date,name,payment_Method,grade,  timeStamp: serverTimestamp()};

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
          <title> Smart-school | Add New Expenses</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Book" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-expenses" />
                <div className="btn-center text-center ">
                   <h5> Add New Expenses </h5>
                </div>
        </div>



        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add New Expenses  </h5>
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
                      name="expense"
                      label="Expense Type Name"
                      type="text"
                      errorMessage="Please Enter expense type name"
                      validate={{ required: { value: true } }}
                  />

                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="amount"
                      label="Expense Amount "
                      type="number"
                      errorMessage="Please Enter expense Amount"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />


                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="phone"
                      label="Enter Phone Number"
                      type="number"
                      errorMessage="Please Enter phone number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                       
                       <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="date"
                      label="Choose date"
                      type="date"
                      errorMessage="Please date is required"
                      validate={{ required: { value: true } }}
                  />

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
                  <option>FNB</option>
                  <option>ABSA</option>
                  <option>CAPITEC</option>
                  <option>STANARD BANK</option>
                  <option>NEDBANK</option>
                  <option>PAYPAL</option>
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

export default AddExpenses;
