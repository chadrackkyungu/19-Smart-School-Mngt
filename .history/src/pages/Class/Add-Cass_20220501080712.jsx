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
import { Db, auth, storage } from '../../Database/init-firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_addStd, errorTost } from '../../components/Toast'; //Toast Notification
//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";

const AddClass = () => {


  const handleValidSubmit = async(e, std_Input) => {
    console.log(std_Input);

    const {bookName,subject,writerName,publishYear,number,grade,desc } = std_Input;
    const allfield = {bookName,subject,writerName,publishYear,number,grade,desc, img,  timeStamp: serverTimestamp()};
    try {
      // const rslt = await createUserWithEmailAndPassword(auth, std_Input.email, std_Input.number); 
      // await setDoc(doc(Db, "BOOKS", rslt.user.uid), { allfield });
      await addDoc(collection(Db, "BOOKS"), { allfield });
     successTost_addStd();
     
    } catch (error) {
      errorTost()
    }
  };
   

  
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Classes" />
        </Row>
        <h1> Add Classes </h1>
      </div>
    </React.Fragment>
  );
};

export default AddClass;