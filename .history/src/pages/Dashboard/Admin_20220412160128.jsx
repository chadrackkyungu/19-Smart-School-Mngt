import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { FaPeopleCarry } from 'react-icons/fa';

import Breadcrumb from '../../components/Common/Breadcrumb';



const AdminJSON = [
  {
    icon: 'St',
    title: "Students",
    number: 15000
  },
  {
    icon: 'Tch',
    title: "Teachers",
    number: 15000
  },
  {
    icon: 'Pr',
    title: "Parents",
    number: 15000
  },
  {
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
                <CardBody>
                                    <div class="bg-green-light">
                                      <FaPeopleCarry size={30}  />
                                    </div>

                                    <div class="item-content">
                                        <div class="item-title">Students</div>
                                        <div class="item-number"><span class="counter" data-num="150000">150000</span></div>
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
