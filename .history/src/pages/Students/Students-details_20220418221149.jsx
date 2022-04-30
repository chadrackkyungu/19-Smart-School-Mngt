import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardImg,
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams , Link} from "react-router-dom";

  import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import BackBtn from '../../components/Back-btn';

function StudentsDetails() {

    
    const { id } = useParams();
    const [dataDb, setData] = useState([]);

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
            <Breadcrumb breadcrumbItem="Home" title="Students details" />
        </Row>

        <Row className="d-flex justify-content-start">
                <BackBtn url_Link="all-students" />
        </Row>
      


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
    <div className="btn-center text-center">
    <button type="button" className="btn btn-danger waves-effect waves-light text-center">
                        <i className="bx bx-block font-size-16 align-middle me-2"></i>
                        Delete students
                    </button>
    </div>
               
    </div>
    </React.Fragment>
  )
}

export default StudentsDetails