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

function UpdateClasse() {

    const { id } = useParams();
    const [data, setData] = useState([]);


    //GET STUDENTS DATA FROM THE DB
 useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "CLASSES"));
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




   // UPDATE STUDENT
   const handleValidSubmit = async(e, std_Input) => {
    const { teacherName, subject, number, email, grade, gender, weeks, StartTime, EndTime } = std_Input;
    const allfield = { teacherName, subject, number, email, grade, gender, weeks, StartTime, EndTime,  timeStamp: serverTimestamp()};
    try {
        const updateRes = doc(Db, "CLASSES", id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std();  //Toast a popUp that say successfull
    } catch (error) {
        failUpdate_std()  //Toast a popUp that say failed
    }
};


  return (
    <div>Update-Classe</div>
  )
}

export default UpdateClasse