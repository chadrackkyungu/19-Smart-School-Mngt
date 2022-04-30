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
  import { useParams, Link} from "react-router-dom";

import { collection, getDocs} from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
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

                <div className="btn-center text-right mt-4 mb-4">
                    <Link to="/parents"  className="btn  waves-effect waves-light text-center red-500 shadow-sm  bg-white rounded">
                      Back
                    </Link>
                </div>
      
        <Card className="mini-stat bg-white text-black  d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
                <Col xl={6} md={6}>
                    <CardBody>
                   <CardImg className="img-fluid" src={dataDb.img} alt="smart-school" />
                   </CardBody> 
                </Col>

                <Col xl={6} md={6}>
                    <h3 className="mt-4 mb-4"> Parent Details </h3>
                      <div className="prt-details-container">
                        <h5> {` Full Name : ${dataDb.parentName}  ${dataDb.parentLastName}`}</h5> 
                        <h5> Cell Phone Number : {dataDb.CellNumber}</h5> 
                        <h5> Address Email : {dataDb.parentEmail}</h5> 
                      </div>
                      
                      <h3 className="mt-4 mb-4"> Student Details </h3>
                    <h5>Name : {dataDb.firstName  +"  "+ dataDb.LastName} </h5>
                    <h5>Email :  {dataDb.email}</h5> 
                    <div className="st-details-conatiner">
                      <div>
                          <h5>Gender : {dataDb.gender}</h5> 
                          <h5>Grade : {dataDb.grade}</h5> 
                          <h5>Phone number : {dataDb.number}</h5> 
                      </div>
                      <div>
                          <h5>Religion : {dataDb.religion}</h5> 
                          <h5> Students Number : {dataDb.studenNumber}</h5>
                      </div>
                    </div>
                </Col>
        </Row>
    </Card>                 
    </div>
    </React.Fragment>
  )
}

export default ParentDetails