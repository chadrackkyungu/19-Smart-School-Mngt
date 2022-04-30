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

import { collection, getDocs} from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import BackBtn from '../../components/Back-btn';
import { useHistory } from "react-router-dom";


function ParentDetails() {
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

     

  return (
    <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Smart School Management System</title>
        </MetaTags>
        <Row>
            <Breadcrumb breadcrumbItem="Dashboard" title="Students details" />
        </Row>

      <Card>
        <div className="d-flex justify-content-between align-items-center">
                <BackBtn url_Link="parents" />
               
        </div>
      </Card>
      
        <Card className="mini-stat bg-white text-black  d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
                <Col xl={6} md={6}>
                   <CardBody className='image-container'>
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
                      <div>
                          <h5>Country Of Birth : {dataDb.birthCountry}</h5> 
                      </div>
                    </div>
                      <div>
                        <h5>Student description</h5>
                        <p className="card-title-desc"> {dataDb.address}</p> 
                      </div>
                      <h5 className="mt-4 mb-4"> Parent Details </h5>
                      <div className="prt-details-container">
                        <p> {` Full Name : ${dataDb.parentName}  ${dataDb.parentLastName}`}</p> 
                        <p> Cell Phone Number : {dataDb.CellNumber}</p> 
                        <p> Address Email : {dataDb.parentEmail}</p> 
                      </div>
                      
                    </CardBody>
                </Col>
        </Row>
    </Card>                 
    </div>
    </React.Fragment>
  )
}

export default ParentDetails