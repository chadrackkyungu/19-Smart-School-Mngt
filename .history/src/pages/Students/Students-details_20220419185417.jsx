import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams} from "react-router-dom";

  import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import BackBtn from '../../components/Back-btn';
import { useHistory } from "react-router-dom";

import { successTost } from '../../components/Toast'; //Toast Notification

function StudentsDetails() {

    const { id } = useParams();
    const [dataDb, setData] = useState([]);

    let history = useHistory();
    const handleClick = (e) =>{};

    useEffect(() =>{
        const fetchData = async() =>{
          let list = [];
          try {
            const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
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
          history.push(`/all-students`);
        }catch(err){
          console.log("Error".err);
        }
      }


  return (
    <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Smart School Management System</title>
        </MetaTags>
        <Row>
            <Breadcrumb breadcrumbItem="Home" title="Students details" />
        </Row>

      <Card>

      
        <Row>
          {/* <Col xl={6} md={6}> */}
                <BackBtn url_Link="all-students" />
          {/* </Col> */}

          {/* <Col xl={6} md={6}> */}
                <div className="btn-center text-center m-4">
                    <button type="button" className="btn btn-danger waves-effect waves-light text-center" onClick={deleteStudent}>
                        <i className="bx bx-block font-size-16 align-middle me-2"></i>
                        Delete students
                    </button>
                </div>
          {/* </Col> */}
        </Row>
        </Card>
      
        <Card className="mini-stat bg-white text-black  d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
                <Col xl={6} md={6}>
                   
                   <CardBody>
                   <CardImg className="img-fluid" src={dataDb.img} alt="smart-school" />
                   </CardBody>
                   
                </Col>

                <Col xl={6} md={6}>
                  <CardBody>
                    <h3> User ID# : {dataDb.id}</h3>
                    <h5>Name : {dataDb.firstName  +"  "+ dataDb.LastName} </h5>
                    <h5>Email :  {dataDb.email}</h5> 
                    <h5> Date of birth : {dataDb.date_of_birth}</h5> 
                  
                    <div className="st-details-conatiner">
                    <div>
                        <h5>Gender : {dataDb.gender}</h5> 
                        <h5>Grade {dataDb.grade}</h5> 
                        <h5>Phone number {dataDb.number}</h5> 
                    </div>

                    <div>
                        <h5>Religion : {dataDb.religion}</h5> 
                        <h5> students Number : {dataDb.studenNumber}</h5>
                    </div>
                    </div>
                
                      <div>
                        <h5>Student description</h5>
                        <p className="card-title-desc"> {dataDb.address}</p> 
                      </div>
                    </CardBody>
                </Col>
        </Row>
    </Card>
                 
               
    </div>
    </React.Fragment>
  )
}

export default StudentsDetails