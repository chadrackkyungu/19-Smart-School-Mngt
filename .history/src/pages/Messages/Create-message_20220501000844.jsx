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
    const {  name, expense, amount, phone, date, email } = std_Input;
    const allfield = { name, expense, amount, phone, date, email,  timeStamp: serverTimestamp()};

    try {
      await addDoc(collection(Db, "EXPENSES"), { allfield });
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

      </div>
    </React.Fragment>
  );
};

export default CreateMessages;
