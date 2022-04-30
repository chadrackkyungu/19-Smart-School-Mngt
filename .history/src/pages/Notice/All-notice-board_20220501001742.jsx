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
            <Col mg={12} lg={12}>
              <Card key={i}  data-aos="fade-up">
             
                  <CardBody>
                    <CardText>
                      <p className="text-muted"> {notice.date} || {notice.title} </p>
                    </CardText>
                    <h6 className="green-500">{notice.postedBy}</h6>
                    

                    <CardText >
                      <small className="text-muted orange-600"> { notice.timeStamp.toString() }min ago  </small>
                    </CardText>

                    <CardText>
                      <small className="text-muted"> {notice.details } </small>
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

export default AllNotice;
