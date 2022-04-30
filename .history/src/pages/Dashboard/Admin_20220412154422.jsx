import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom"

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

        <div class="row gutters-20">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="dashboard-summery-one mg-b-20">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <div class="item-icon bg-light-green ">
                                        <i class="flaticon-classmates text-green"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="item-content">
                                        <div class="item-title">Students</div>
                                        <div class="item-number"><span class="counter" data-num="150000">150000</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>


      
      <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-info text-white">
                <CardBody>
                  <div className="mb-4" data-aos={"fade-left"}>
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      School Ranking
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-warning">
                      <p className="mb-0">+ 95%</p>
                    </div>
                  </div>
                  <div className="pt-2" data-aos={"fade-right"}>
                    <div className="float-end">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            </Row>
    </React.Fragment>
  );
};

export default Dashboard;
