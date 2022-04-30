import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags"

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
    </React.Fragment>
  );
};

export default Dashboard;
