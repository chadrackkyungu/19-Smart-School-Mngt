import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    Button
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams} from "react-router-dom";

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import BackBtn from '../../components/Back-btn';
import { useHistory } from "react-router-dom";

import { successTost } from '../../components/Toast'; //Toast Notification

function TeacherDetails() {
    const { id } = useParams();
    const [dataDb, setData] = useState([]);

    let history = useHistory();

    const handleClick = (e) =>{};
    useEffect(() =>{
        const fetchData = async() =>{
          let list = [];
          try {
            const querySnapshot = await getDocs(collection(Db, "TEACHERS"));
                querySnapshot.forEach((doc) => {
                list.push({id: doc.id, ...doc.data().allfield, clickEvent: () => handleClick(doc.id)}); //Note : this clickEvent: () => handleClick(id) will help for the click events
            })
            const res = list.find((stId) => stId.id === id)
            setData(res);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();

      }, [id])

      // Delete stuents from the database
      const deleteStudent = async() => {
        try {
          await deleteDoc(doc(Db, "STUDENTS", dataDb.id));
          successTost();
          history.push(`/all-teachers`);
        }catch(err){
          console.log("Error".err);
        }
      }

      // Edit Student
      const editStudent = async() => {
        try {
          history.push(`/update-teacher/${id}`);
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>Teacher-details</div>
  )
}

export default TeacherDetails