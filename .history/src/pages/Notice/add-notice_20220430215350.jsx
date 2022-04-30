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



      </div>
    </React.Fragment>
  );
};

export default AddNotice;
