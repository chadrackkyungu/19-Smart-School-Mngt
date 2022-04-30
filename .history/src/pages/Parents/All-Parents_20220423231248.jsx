import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";

const AllParents = () => {

  const [dataDb, setData] = useState([]);
  let history = useHistory();
 
  function handleClick(prm) {
    history.push(`/parent-details/${prm}`);
  }

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "STUDENTS"));
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
   {label: "First Name",field: "parentName",sort: "asc",width: 150},
   {label: "Last Name",field: "parentLastName",sort: "asc",width: 150},
   {label: "Phone number",field: "CellNumber",sort: "asc",width: 150},
   {label: "Email",field: "parentEmail",sort: "asc",width: 150},
   {label: "Job Title",field: "jobTitle",sort: "asc",width: 150},
  ];

  console.log(dataDb);

 const data = { 
  columns: column,
  rows: dataDb,  
 } 

  return (
    <React.Fragment>
      <div className="page-content">
             <Row>
               <Breadcrumb breadcrumbItem="Dashboard" title="All Parents" />
            </Row>
        <Row className="d-flex justify-content-around align-items-center">
           <Col className="col-12">
             <Card>
               <CardBody>
                 <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data} fullPagination />            
               </CardBody>
             </Card>
           </Col>
         </Row>
      </div>
    </React.Fragment>
  );
};
export default AllParents;