import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardImg, CardText, CardSubtitle} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";
import { successTost } from "../../components/Toast";

const AllSubjects = () => {


  const [dataDb, setData] = useState([]);
  const [data, setData_id] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "SUBJECTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield});
        })
        setData(list);

        // const result = list.find((stId) => stId.id === id)
        // setData_id(result);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log(dataDb);
  console.log(dataDb.id);


  
  //DELETE PAYMENT
  const deleteStudent = async(e) => {
    console.log(e);
    // try {
    //   await deleteDoc(doc(Db, "SUBJECTS", dataDb.id));
    //   successTost();
    // }catch(err){
    //   console.log("Error".err);
    // }
  }

  return (
    <React.Fragment>
      <div className="page-content">
       <MetaTags>
          <title> Smart-school | All Subject</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="All Subjects" />
        </Row>
        <Row>

            {
              dataDb.map((subject, i) => {
                return(
                  <Col mg={6} lg={4}>
                      <Card key={i} className="rounded" data-aos="fade-up">

                          <div className="image-container">
                            <img  className="img-fluid rounded-top" src={subject.img} alt="smart-school-all subject" />
                          </div>

                        <CardBody>
                          <CardSubtitle className="h4 mt-0 ">{subject.subjectName}</CardSubtitle>
                          <CardText>
                            <h5 className="mt-3 mb-3"> Code : {subject.subjectCode}  ||  Type : {subject.type}</h5> 
                            <p> Grade : {subject.grade} </p> 
                          </CardText>
                          <div className="d-flex justify-content-between  btn-container">
                            <Link to={`/update-subject/${dataDb.id}`} className="btn bg-blue-400 waves-effect waves-light gray-100">Update</Link>
                            <Link to="#"className="btn bg-pink-600 waves-effect waves-light gray-100" onClick={deleteStudent}>Delete</Link>
                          </div>
                        </CardBody>

                    </Card>
                  </Col>
                )
              })
            }
          
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AllSubjects;
