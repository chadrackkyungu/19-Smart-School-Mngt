import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import { MetaTags } from "react-meta-tags";

const AllClasses = () => {

    const [dataDb, setData] = useState([]);

    let history = useHistory();
    function handleClick(prm) {
      history.push(`/student-detail/${prm}`);
    }
  
    useEffect(() =>{
      const fetchData = async() =>{
        let list = [];
        try {
          const querySnapshot = await getDocs(collection(Db, "CLASSES"));
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
  
    const column = [
     {label: "Teacher Name",field: "teacherName",sort: "asc",width: 150},
     {label: "Subject",field: "subject",sort: "asc",width: 150},
     {label: "Phone number",field: "number",sort: "asc",width: 150},
     {label: "Email",field: "email",sort: "asc",width: 150},
     {label: "Grade ",field: "grade",sort: "asc",width: 150},
     {label: "Gender",field: "gender",sort: "asc",width: 150},
     {label: "Weeks",field: "weeks",sort: "asc",width: 150},
     {label: "Start Time",field: "StartTime",sort: "asc",width: 150},
     {label: "End Time",field: "EndTime",sort: "asc",width: 150},
    ];
  
   const data = { 
    columns: column, //columns Tables
    // rows: player,  
    rows: dataDb,  
   } 


  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Classes" />
        </Row>
        <h1> All Classes </h1>
      </div>
    </React.Fragment>
  );
};

export default AllClasses;