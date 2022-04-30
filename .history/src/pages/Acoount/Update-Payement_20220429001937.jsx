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

function UpdatePayement() {

    const { id } = useParams();
    const [data, setData] = useState([]);


    //GET STUDENTS DATA FROM THE DB
 useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "PAYMENTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === id)
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id])
  



  return (
    <div>Update-Payement</div>
  )
}

export default UpdatePayement