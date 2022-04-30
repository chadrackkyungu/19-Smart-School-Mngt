import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";

const AllTeachers = () => {
    const [dataDb, setData] = useState([]);

    let history = useHistory();
    function handleClick(prm) {
      history.push(`/teacher-details/${prm}`);
    }

    useEffect(() =>{
      const fetchData = async() =>{
        let list = [];
        try {
          const querySnapshot = await getDocs(collection(Db, "TEACHERS"));
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
     {label: "First Name",field: "firstName",sort: "asc",width: 150},
     {label: "Last Name",field: "LastName",sort: "asc",width: 150},
     {label: "Student number",field: "studenNumber",sort: "asc",width: 150},
     {label: "Email",field: "email",sort: "asc",width: 150},
     {label: "Phone Number",field: "number",sort: "asc",width: 150},
     {label: "Gender",field: "gender",sort: "asc",width: 150},
     {label: "Grade",field: "grade",sort: "asc",width: 150},
     {label: "Date Of birth day",field: "date_of_birth",sort: "asc",width: 150},
    ];
  
   const data = { 
    columns: column, 
    rows: dataDb,  
   } 

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Teachers" />
        </Row>
        <h1>All Teachers</h1>
      </div>
    </React.Fragment>
  );
};

export default AllTeachers;
