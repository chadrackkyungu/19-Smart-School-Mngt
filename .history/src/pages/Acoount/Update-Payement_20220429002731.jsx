import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import MetaTags from "react-meta-tags";
import Breadcrumb from '../../components/Common/Breadcrumb';

import { serverTimestamp, doc, collection, getDocs, updateDoc} from 'firebase/firestore';
import { Db} from '../../Database/init-firebase';

import { successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';

import BackBtn from "../../components/Back-btn";
import { useParams } from "react-router-dom";

function UpdatePayement() {

  const { id } = useParams();
  const [data, setData] = useState([]);


    //GET STUDENTS DATA FROM THE DB
 useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "PAYMENTS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === id)
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id])
  


   // UPDATE STUDENT
   const handleValidSubmit = async(e, std_Input) => {
    const { ID_Number,Status,amount,date,name,payment_Method,grade } = std_Input;
    const allfield = { ID_Number,Status,amount,date,name,payment_Method,grade,  timeStamp: serverTimestamp()};
    try {
        const updateRes = doc(Db, "PAYMENTS", id);
        await updateDoc(updateRes, {allfield});
        successTost_Update_Std();  //Toast a popUp that say successfull
    } catch (error) {
        failUpdate_std()  //Toast a popUp that say failed
    }
    };


  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title> Smart-school | Update Payment</title>
      </MetaTags>
      <Row>
        <Breadcrumb breadcrumbItem="Home" title="Add Book" />
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-4">
              <BackBtn url_Link="all-fees-collection" />
              <div className="btn-center text-center ">
                 <h5> Update Payment </h5>
              </div>
      </div>
  <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
    <Col xl={12} md={6}>
      <Card className="mini-stat bg-white text-black ">
        <CardBody>
          <AvForm onValidSubmit={(e, v) => {
             handleValidSubmit(e, v);
          }}>
          <h5 className="mb-5"> Update Payment  </h5>
          <hr />
          <Row> 
            <Col md={6}> 
             
                <AvField
                value={data.name}
                    className="mb-3 p-2 bg-white input-style"
                    name="name"
                    label="Your Name"
                    type="text"
                    errorMessage="Please enter a name"
                    validate={{ required: { value: true } }}
                />

                <AvField
                value={data.ID_Number}
                    className="mb-3 p-2 bg-white input-style"
                    name="ID_Number"
                    label="ID"
                    type="text"
                    errorMessage="Please Enter the id number"
                    validate={{ required: { value: true } }}
                />

                <AvField
                value={data.amount}
                    className="mb-3 p-2 bg-white input-style"
                    name="amount"
                    label="Total Fees"
                    type="number"
                    errorMessage="Please EnterThe Amount"
                    validate={{
                      required: { value: true },
                      pattern: {
                        value: "^[0-9]+$",
                        errorMessage: "Only Numbers",
                      },
                    }}
                  />
                     

              <AvField value={data.Status} type="select" name="Status" label="Select Status" className="mb-3 p-2 bg-white input-style"   errorMessage="please select payment method"  validate={{ required: { value: true }}}>
                <option></option>
                <option>PAID</option>
                <option>Pending</option>
              </AvField>

            </Col> 


            <Col md={6}> 
            <AvField 
            value={data.date}
                    className="mb-3 p-2 bg-white input-style"
                    name="date"
                    label="Date" 
                    type="date" 
                    errorMessage="Invalid date of birth"
                    validate={{ required: { value: true }}}
                    title="Use MM/DD/YYYY"
               /> 
                                
           
            <AvField value={data.grade} type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
            {
              grade_Arrays().map((grade, key) => 
                <option key={key}> {grade} </option>
              )
            }
            </AvField>

            <AvField value={data.payment_Method} type="select" name="payment_Method" label="Select Payment Method" className="mb-3 p-2 bg-white input-style"   errorMessage="please select payment method"  validate={{ required: { value: true }}}>
                <option></option>
                <option>CASH</option>
                <option>FNB</option>
                <option>ABSA</option>
                <option>CAPITEC</option>
                <option>STANARD BANK</option>
                <option>NEDBANK</option>
                <option>PAYPAL</option>
            </AvField>
                 
            </Col>

          
              <FormGroup className="mb-0">
                <div className="d-flex justify-content-center p-2 text-center">
                  <Button type="submit" color="primary" className="m-2  btn-mobile-width">
                    Submit
                  </Button>
                </div>
              </FormGroup>
              </Row>
            </AvForm>
            </CardBody>
      </Card>
    </Col>
  </Row> 
    </div>
  </React.Fragment>
  )
}

export default UpdatePayement