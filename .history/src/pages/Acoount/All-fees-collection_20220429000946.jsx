import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllFeesCollections = () => {

  const [dataDb, setData] = useState([]);

  let history = useHistory();
  
  function handleClick(prm) {
    history.push(`/book-details/${prm}`);
  }

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "PAYMENTS"));
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
    {label: "ID Numner",field: "ID_Number",sort: "asc",width: 150},
   {label: "Name",field: "name",sort: "asc",width: 150},
   {label: "Grade",field: "grade",sort: "asc",width: 150},
   {label: "Amount Paid",field: "amount",sort: "asc",width: 150},
   {label: "Payment Method",field: "payment_Method",sort: "asc",width: 150},
   {label: "Status",field: "Status",sort: "asc",width: 150},
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
             " title="All Fees Collections" />
          </Row>

          <div className="btn-center text-right mt-4 mb-4">
                  <Link to="/create-student-payment"  className="btn  waves-effect waves-light text-center red-500 shadow-sm  bg-white rounded">
                    Add New Payment 
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

export default AllFeesCollections;
