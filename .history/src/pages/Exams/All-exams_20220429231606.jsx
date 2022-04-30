import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardText, CardSubtitle, CardTitle} from "reactstrap"
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllExams = () => {

  const [dataDb, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "EXAMS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield});
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
          <Breadcrumb breadcrumbItem="Dashboard" title="All Exams" />
        </Row>
        <MetaTags>
          <title> Smart-school | All Exams</title>
        </MetaTags>
       
        <Row className="subjects-container">
            {
              dataDb.map((exam, i) => {
                return(
              <Col mg={6} lg={4}>
                <Card key={i} className="rounded" data-aos="fade-up">
                  <Row> 
                    <Col md={8}>
                    <CardBody>
                      <CardTitle className="h5">{exam.subjectName} {exam.exam} </CardTitle>

                      <CardText>
                      <small className="text-muted"> {exam.notice}  </small>
                      </CardText>

                      <CardText>
                      <small className="text-muted"> Start Time : {exam.StartTime } End Time : {exam.EndTime}  </small>
                      </CardText>

                      <CardText>
                      <small className="text-muted"> Grade : {exam.grade } semester : {exam.semester}  section : {exam.section} </small>
                      </CardText>

                      <CardText>
                          <small className="text-muted">
                           {/* {exam.timeStamp} */}
                          </small>
                      </CardText>

                      <Link to={`/update-subject/${exam.id}`} className="btn bg-blue-400 gray-100">Update</Link>

                    </CardBody>
                  </Col>

                  <Col md={4}>
                    <div className="image-container-exam">
                        <img  className="img-fluid rounded mt-1" src={exam.urlImage} alt="smart-school-all exams" />
                    </div>
                  </Col>

                  </Row>
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

export default AllExams;
