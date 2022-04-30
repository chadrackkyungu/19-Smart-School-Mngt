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



      </div>
    </React.Fragment>
  );
};

export default AddExpenses;
