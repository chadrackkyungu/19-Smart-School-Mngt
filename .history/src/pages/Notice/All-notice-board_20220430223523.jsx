import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardText, CardSubtitle, CardTitle} from "reactstrap"
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllNotice = () => {
  const [dataDb, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "NOTICE"));
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

  return (
    <React.Fragment>
    <div className="page-content">
      <Row>
        <Breadcrumb breadcrumbItem="Dashboard" title="All Notice" />
      </Row>
      <MetaTags>
        <title> Smart-school | All Notice</title>
      </MetaTags>
     
      <Row className="subjects-container">
          {
            dataDb.map((notice, i) => {
              return(
            <Col mg={6} lg={4}>
              <Card key={i}  data-aos="fade-up">
                <Row> 
                  <Col md={12}>
                  <CardBody>
                    <h5>{notice.title} </h5>

                    <CardText>
                      <small className="text-muted"> {notice.date}  </small>
                    </CardText>

                    <CardText>
                      <small className="text-muted"> { 5 } min ago  </small>
                    </CardText>

                    <CardText>
                      <small className="text-muted"> {notice.details } </small>
                    </CardText>

                  </CardBody>
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

export default AllNotice;
