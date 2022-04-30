import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";


const AllBooks = () => {

  const [dataDb, setData] = useState([]);

  let history = useHistory();
  function handleClick(prm) {
    history.push(`/teacher-details/${prm}`);
  }

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "BOOKS"));
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
    {label: "Book ID No",field: "number",sort: "asc",width: 150},
   {label: "Book Name",field: "bookName",sort: "asc",width: 150},
   {label: "Subject",field: "subject",sort: "asc",width: 150},
   {label: "Writer Name",field: "writerName",sort: "asc",width: 150},
   {label: "Grade",field: "grade",sort: "asc",width: 150},
   {label: "Year Published",field: "publishYear",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column, 
  rows: dataDb,  
 } 

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Smart-school | All Books </title>
        </MetaTags>
             <Row>
               <Breadcrumb breadcrumbItem="Dashboard
               " title="All Books" />
            </Row>

            <div className="btn-center text-right mt-4 mb-4">
                    <Link to="/add-book"  className="btn  waves-effect waves-light text-center red-500 shadow-sm  bg-white rounded">
                      Add New Book 
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

export default AllBooks;