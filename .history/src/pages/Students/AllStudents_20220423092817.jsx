import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";



const AllStudents = () => {

  // const [player, setplayers] = useState([]); //* check line 94
  const [dataDb, setData] = useState([]);

  let history = useHistory();
  // * Wen the user click on the row table take me to student details page
  function handleClick(prm) {
    history.push(`/student-detail/${prm}`);
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
  columns: column, //columns Tables
  // rows: player,  
  rows: dataDb,  
 } 


  return(
    <React.Fragment>
           <div className="page-content">
             <Row>
               <Breadcrumb breadcrumbItem="Home" title="All Students" />
            </Row>
          </div>
      
          <Row className="d-flex justify-content-around align-items-center">
           <Col className="col-11">
             <Card>
               <CardBody>
                 {/* <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data} fullPagination />             */}
                 <MDBDataTableV5 entries={10} entriesOptions={[10, 20, 30, 50]} responsive bordered  hover  data={data} fullPagination 
                 />            
               </CardBody>
             </Card>
           </Col>
         </Row>
    </React.Fragment>
  )
}

export default AllStudents;



//! this is how you can fetch the ata from an API then display it in the DAta Table
  // const getplayeData = async () => {
  //   fetch('https://nba-players.herokuapp.com/players-stats')
  //   .then(response => response.json())
  //   .then(data => {
  //     setplayers(data);
      
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // }

  // useEffect(() => {
  //   getplayeData();
  // }, []);


