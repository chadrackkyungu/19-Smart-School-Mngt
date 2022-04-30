import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody} from "reactstrap"
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
        <h1>All Subjects</h1>
      </div>
    </React.Fragment>
  );
};

export default AllSubjects;
