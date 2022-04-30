import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardImg, CardText, CardSubtitle} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllSubjects = () => {


  const [dataDb, setData] = useState([]);

  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/update-subject/${prm}`);
  }

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "SUBJECTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield, clickEvent: () => handleClick(doc.id)});
        })
        setData(list);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log(dataDb);

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Subjects" />
        </Row>
        <Row>

            {
              dataDb.map((subject, i) => {
                return(
                  <Col mg={6} lg={4}>
                      <Card key={i} className="rounded">

                          <div className="image-container">
                            <img  className="img-fluid rounded-top" src={subject.img} alt="smart-school-all subject" />
                          </div>


                        <CardBody>
                          <CardSubtitle className="h4 mt-0 ">{subject.subjectName}</CardSubtitle>
                          <CardText>
                            <h5 className="mt-3"> Code : {subject.subjectCode} </h5> 
                            <p> Grade : {subject.grade} </p> 
                          </CardText>
                          <div className="d-flex justify-content-between  btn-container">
                            <Link to="#"className="btn btn-primary waves-effect waves-light">Update</Link>
                            <Link to="#"className="btn btn-primary waves-effect waves-light">Delete</Link>
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
