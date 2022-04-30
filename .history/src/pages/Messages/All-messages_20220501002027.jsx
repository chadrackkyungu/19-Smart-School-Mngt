import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardText, CardSubtitle, CardTitle} from "reactstrap"
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllMessages = () => {
  const [dataDb, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "MESSAGES"));
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
        <Breadcrumb breadcrumbItem="Dashboard" title="All Messages" />
      </Row>
      <MetaTags>
        <title> Smart-school | All Messages</title>
      </MetaTags>
     
      <Row className="subjects-container">
          {
            dataDb.map((message, i) => {
              return(
            <Col mg={12} lg={12}>
              <Card key={i}  data-aos="fade-up">
             
                  <CardBody>
                    <CardText>
                      <p className="text-muted"> {message.date} || {message.title} </p>
                    </CardText>
                     <h6 className="green-500">{message.recipient}</h6>
                    <CardText >
                      <small className="text-muted orange-600"> { 5 }min ago  </small>
                    </CardText>
                    <CardText>
                      <small className="text-muted"> {message.message } </small>
                    </CardText>

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

export default AllMessages;
