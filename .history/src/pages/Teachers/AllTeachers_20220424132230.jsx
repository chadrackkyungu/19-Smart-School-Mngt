import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

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
     {label: "First Name",field: "TeacherName",sort: "asc",width: 150},
     {label: "Last Name",field: "TeacherLastName",sort: "asc",width: 150},
     {label: "Teacher Id Number",field: "TeacherIdNumber",sort: "asc",width: 150},
     {label: "Email",field: "email",sort: "asc",width: 150},
     {label: "Phone Number",field: "number",sort: "asc",width: 150},
     {label: "Gender",field: "gender",sort: "asc",width: 150},
     {label: "Date Of birth day",field: "date_of_birth",sort: "asc",width: 150},
    ];
  
   const data = { 
    columns: column, 
    rows: dataDb,  
   } 

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | All Teachers</title>
        </MetaTags>
             <Row>
               <Breadcrumb breadcrumbItem="Dashboard
               " title="All Teachers" />
            </Row>

                <div className="btn-center text-right mt-4 mb-4">
                    <Link to="/new-teacher"  className="btn  waves-effect waves-light text-center red-500 shadow-sm  bg-white rounded">
                      Add New Teacher 
                    </Link>
                </div>
      
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

export default AllTeachers;
