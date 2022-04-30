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

function StudentsDetails() {

    
    const { id } = useParams();

    const [dataDb, setData] = useState([]);
    const [disPldata, setDisPldata] = useState([]);

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


    console.log(dataDb.id);



  return (
    <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Smart School Management System</title>
        </MetaTags>
        <Row>
            <Breadcrumb breadcrumbItem="Home" title="Add Students" />
        </Row>

        </div>


        <Row className="d-flex justify-content-start">
                <Col xl={1} md={6}>
                    <Card className="btn-back text-center p-1">
                        <Link to="/all-students" className="clr-gray-500"> Back </Link>   
                    </Card>
                </Col>
        </Row>
      

        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
            <Col xl={11} md={6}>
                   
                <Card className="mini-stat bg-white text-black ">
                    {/* <Card className="btn-back text-center p-1 w-25">
                        <Link to="/all-students" className="clr-gray-500"> Back </Link>   
                    </Card> */}
                <CardBody>

                <CardTitle className="h4">{dataDb.firstName  +"  "+ dataDb.LastName} </CardTitle>
                    <h3> {dataDb.id}</h3>
                  
                    
                    <CardImg className="img-fluid" src={dataDb.img} alt="smart-schhol" />
                    <p className="card-title-desc"> {dataDb.address}</p> 
                    <p> {dataDb.date_of_birth}</p> 
                    <p> {dataDb.email}</p> 
                    <p> {dataDb.gender}</p> 
                    <p> {dataDb.grade}</p> 
                    <p> {dataDb.number}</p> 
                    <p> {dataDb.religion}</p> 
                    <p> {dataDb.studenNumber}</p>  


                </CardBody>
                </Card>
                </Col>
            </Row>

    </React.Fragment>
  )
}

export default StudentsDetails