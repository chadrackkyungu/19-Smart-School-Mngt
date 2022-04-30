import React from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';

function StudentsDetails() {
  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title>Smart School Management System</title>
      </MetaTags>
      <Row>
        <Breadcrumb breadcrumbItem="Home" title="Add Students" />
      </Row>

    </div>

    <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
          <Col xl={11} md={6}>
            <Card className="mini-stat bg-white text-black ">
              <CardBody>

                  <h1> Students details </h1>

              </CardBody>
              </Card>
            </Col>
        </Row>

    </React.Fragment>
  )
}

export default StudentsDetails