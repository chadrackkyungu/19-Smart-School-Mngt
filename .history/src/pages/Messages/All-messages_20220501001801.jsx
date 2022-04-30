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
          <Breadcrumb breadcrumbItem="Home" title="All Messages" />
        </Row>
        <h1> All Messages</h1>
      </div>
    </React.Fragment>
  );
};

export default AllMessages;
