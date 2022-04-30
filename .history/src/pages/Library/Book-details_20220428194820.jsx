import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    Button
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams} from "react-router-dom";

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import BackBtn from '../../components/Back-btn';
import { useHistory } from "react-router-dom";
import { successTost } from '../../components/Toast'; //Toast Notification

function BookDetails() {

    const { id } = useParams();
    const [dataDb, setData] = useState([]);

    let history = useHistory();

    const handleClick = (e) =>{};
        useEffect(() =>{
        const fetchData = async() =>{
          let list = [];
          try {
            const querySnapshot = await getDocs(collection(Db, "BOOKS"));
                querySnapshot.forEach((doc) => {
                list.push({id: doc.id, ...doc.data().allfield, clickEvent: () => handleClick(doc.id)}); 
            })
            const res = list.find((stId) => stId.id === id)
            setData(res);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, [id])

      // Delete stuents from the database
      const deleteStudent = async() => {
        try {
          await deleteDoc(doc(Db, "BOOKS", dataDb.id));
          successTost();
          history.push(`/all-books`);
        }catch(err){
          console.log("Error".err);
        }
      }

      // Edit Student
      const editStudent = async() => {
        try {
          history.push(`/update-book/${id}`);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <React.Fragment>
    <div className="page-content">
    <MetaTags>
        <title>Smart School | Book Details </title>
    </MetaTags>
    <Row>
        <Breadcrumb breadcrumbItem="Dashboard" title="Teacher details" />
    </Row>

      <div className="d-flex justify-content-between align-items-center mobile-flex-box mb-4">
              <BackBtn url_Link="all-teachers" />
              <div className="btn-center text-center mobile-flex">
                  <Button  className="btn bg-blue-700 waves-effect waves-light m-2 border-0" onClick={editStudent}> Update book </Button>
                  <button type="button" className="btn btn-danger waves-effect waves-light text-center" onClick={deleteStudent}>
                      Delete Book
                  </button>
              </div>
      </div>
  
          <Card className="mini-stat bg-white text-black  d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
            <Col xl={6} md={6}>
               <CardBody>
               <CardImg className="img-fluid" src={dataDb.img} alt="smart-school" />
               </CardBody>
            </Col>

            <Col xl={6} md={6}>
                {/* <h3 className="st-id-db"> User ID# : {dataDb.id}</h3> */}
                <CardBody> 
                <h5>Name : {dataDb.TeacherName  +"  "+ dataDb.TeacherLastName} </h5>
                <h5>Email :  {dataDb.email}</h5> 
                <h5> Date of birth : {dataDb.date_of_birth}</h5> 
                <div className="st-details-conatiner">
                  <div>
                      <h5>Gender : {dataDb.gender}</h5> 
                      <h5>Phone number {dataDb.number}</h5> 
                  </div>
                  <div>
                      <h5>Religion : {dataDb.religion}</h5> 
                      <h5> students Number : {dataDb.number}</h5>
                  </div>
                  <div>
                      <h5>Country Of Birth : {dataDb.birthCountry}</h5> 
                  </div>
                </div>
                  <div className="mb-4 mt-4">
                      <h5>Address : {dataDb.address}</h5> 
                  </div>
                  <div>
                    <h5>Teacher Bio</h5>
                    <p className="card-title-desc"> {dataDb.bio}</p> 
                  </div>
                  <h5> Attending Classes   </h5>
                        { dataDb.selectedMulti === undefined ? null :
                           dataDb.selectedMulti.map((grade, i) =>{
                            return (
                              <div key={i}>
                                <h5> {grade.value} </h5> 
                              </div>
                            )
                          })
                        }
                  </CardBody>
            </Col>
    </Row>
</Card>                 
</div>
</React.Fragment>
  )
}

export default BookDetails