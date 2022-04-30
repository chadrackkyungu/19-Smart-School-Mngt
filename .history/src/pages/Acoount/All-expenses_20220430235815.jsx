import React, {useEffect, useState} from "react"
import { MDBDataTable  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";


const AllExpenses = () => {

  const [dataDb, setData] = useState([]);


  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "EXPENSES"));
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

  const column = [
    {label: "Name",field: "name",sort: "asc",width: 150},
   {label: "Expenses",field: "expense",sort: "asc",width: 150},
   {label: "Amount",field: "amount",sort: "asc",width: 150},
   {label: "Phone Number",field: "phone",sort: "asc",width: 150},
   {label: "Email",field: "email",sort: "asc",width: 150},
   {label: "Date",field: "date",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column, 
  rows: dataDb,  
 } 


  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title> Smart-school | All Fees </title>
      </MetaTags>
           <Row>
             <Breadcrumb breadcrumbItem="Dashboard
             " title="All Exepenses" />
          </Row>

          <div className="btn-center text-right mt-4 mb-4">
                  <Link to="/add-new-expense"  className="btn  waves-effect waves-light text-center red-500 shadow-sm  bg-white rounded">
                    Add New Expenses 
                  </Link>
              </div>

              <Row className="d-flex justify-content-around align-items-center">
         <Col className="col-12">
           <Card>
             <CardBody>
               <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data}  />            
             </CardBody>
           </Card>
         </Col>
       </Row>
    </div>
  </React.Fragment>
  );
};

export default AllExpenses;
