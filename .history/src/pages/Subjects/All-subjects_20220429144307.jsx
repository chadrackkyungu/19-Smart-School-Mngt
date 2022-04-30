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
          <Col mg={6} lg={3}>
            <Card>
              <CardImg top className="img-fluid" src={img1} alt="Card image cap" />
              <CardBody>
                <CardSubtitle className="h4 mt-0">Card title</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                  </CardText>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Button
                  </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AllSubjects;
