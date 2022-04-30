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

import {  doc, updateDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { Db, auth, storage } from '../../Database/init-firebase';
import { createUserWithEmailAndPassword, updateEmail } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification
import BackBtn from "../../components/Back-btn";
import { useParams} from "react-router-dom";

//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { countrie_Arrays } from '../ARRAYS-AND-OBJECTS/Arrays-countries.jsx';
import { grade_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";
import { religions_Arrays } from "../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx";

function UpdateTeacher() {

  const { id } = useParams();
  const [perc, setPerc] = useState(0);
  const [img, setImg] = useState();
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("");

//GET STUDENTS DATA FROM THE DB
useEffect(() =>{
  const fetchData = async() =>{
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
          querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data().allfield}); 
      })
      const result = list.find((stId) => stId.id === id)
      setData(result);
      setImg(result.img); //the the url image
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, [id])

// UPLOAD STUDENT IMAGE
useEffect(() => {
  const uploadFile = () =>{
    const name = new Date().getTime() + fileName.name; 

    const storageRef = ref(storage, fileName.name);
    const uploadTask = uploadBytesResumable(storageRef, fileName)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setPerc(progress.toFixed(0));

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL) // if the user upload an image  set that image
        });
      }
    );
  };
  fileName && uploadFile();
}, [fileName]);

const [selectedMulti, setselectedMulti] = useState(null) // this is for multiple selection input

// UPDATE STUDENT
const handleValidSubmit = async(e, std_Input) => {
  const {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address,birthCountry } = std_Input;
  const allfield = {TeacherName, TeacherLastName, TeacherIdNumber,date_of_birth,  email, number, gender, religion, address,birthCountry, img,selectedMulti,  timeStamp: serverTimestamp()};
  try {
      const updateRes = doc(Db, "TEACHERS", id);
      await updateDoc(updateRes, {allfield});
      successTost_Update_Std();  //Toast a popUp that say successfull
  } catch (error) {
      failUpdate_std()  //Toast a popUp that say failed
  }
};

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | update teacher </title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add Teachers" />
        </Row>

      </div>
    </React.Fragment>
  )
}

export default UpdateTeacher