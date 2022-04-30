import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";
import CountUp from "react-countup";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { admin_json_Obj  } from '../OBJECTS/Admin-object';
import StudentChart from '../../components/Admin/Admin-students-cart';
import Earnings from '../../components/Admin/Admin-earnings';


const Dashboard = () => {

  let AdminJSON = admin_json_Obj();


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Admin" />
        </Row>
      
          <Row className="mt-5">
            {
              AdminJSON.map((cardNumber, i) => {
                return(
                <Col xl={3} md={6} key={i}>
                  <Card className="mini-stat bg-white text-black">
                    <CardBody className="d-flex justify-content-around align-items-center">
                    <div className="red-200 ">
                      <cardNumber.icon size={cardNumber.size}  />
                    </div>

                    <div className="item-content">
                      <h4 className="gray-500">{cardNumber.title}</h4>
                      <h2 className="item-number">
                        <CountUp
                          start={0}
                          end={cardNumber.number}
                          duration={2.75}
                          useEasing={true}
                          useGrouping={true}
                          separator=" "
                          // decimals={4}
                          decimal=","
                          // prefix="EUR"
                          // suffix=" left"
                        
                        />
                      </h2>
                    </div>
                </CardBody>
              </Card>
            </Col>
                )
              })
            }
            
          </Row>


          <Row>
                <Col xl={6} md={6} >
                  <Card className=" ">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                     <StudentChart />
                    {/* </CardBody> */}
                  </Card>
                </Col>

                <Col xl={6} md={6} >
                  <Card className="">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                     <Earnings />
                    {/* </CardBody> */}
                  </Card>
                </Col>
          </Row>
      

      </div>
    </React.Fragment>
  );
};




export default Dashboard;