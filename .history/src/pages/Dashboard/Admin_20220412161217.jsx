import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { FaPeopleCarry } from 'react-icons/fa';

import Breadcrumb from '../../components/Common/Breadcrumb';



const AdminJSON = [
  {
    id:1,
    size:80,
    icon: 'St',
    title: "Students",
    number: 15000
  },
  {
    id:2,
    size:80,
    icon: 'Tch',
    title: "Teachers",
    number: 15000
  },
  {
    id:3,
    size:80,
    icon: 'Pr',
    title: "Parents",
    number: 15000
  },
  {
    id:4,
    size:80,
    icon: 'Earn',
    title: "Earnings",
    number: 15000
  },
];



const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Admin" />
        </Row>

      
      
      <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-white text-black">
                <CardBody className="d-flex justify-content-around align-items-center">
                    <div class="bg-green-light">
                      <FaPeopleCarry size={80}  />
                    </div>

                    <div class="item-content">
                      <div className="text-black">Students</div>
                      <div className="item-number"><span class="counter" data-num="150000">150000</span></div>
                    </div>
                </CardBody>
              </Card>
            </Col>

            </Row>
            </div>
    </React.Fragment>
  );
};

export default Dashboard;
