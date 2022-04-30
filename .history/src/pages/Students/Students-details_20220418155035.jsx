import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams , Link} from "react-router-dom";

  import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";

function StudentsDetails() {

    const [dataDb, setData] = useState([]);

    const { id_params } = useParams();
    const handleClick = (e) =>{};

   console.log(id);

    useEffect(() =>{
        const fetchData = async() =>{
          let list = [];
          try {
            const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
                querySnapshot.forEach((doc) => {
                list.push({id: doc.id, ...doc.data().allfield, clickEvent: () => handleClick(doc.id)}); //Note : this clickEvent: () => handleClick(id) will help for the click events
            })
            setData(list);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, [])

    let studentsData = dataDb.find((stId) => stId.id === id_params);
    console.log(studentsData);
    const {id} = studentsData;
    console.log(id);


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

                    {/* <h3> {studentsData.id}</h3> */}
                    {/* <p> {studentsData.firstName}</p>
                    <p> {studentsData.LastName}</p> 
                    <p> {studentsData.address}</p> 
                    <img src={studentsData.img} alt="smart-school" />
                    <p> {studentsData.date_of_birth}</p> 
                    <p> {studentsData.email}</p> 
                    <p> {studentsData.gender}</p> 
                    <p> {studentsData.grade}</p> 
                    <p> {studentsData.number}</p> 
                    <p> {studentsData.religion}</p> 
                    <p> {studentsData.studenNumber}</p>  */}

                </CardBody>
                </Card>
                </Col>
            </Row>

    </React.Fragment>
  )
}

export default StudentsDetails