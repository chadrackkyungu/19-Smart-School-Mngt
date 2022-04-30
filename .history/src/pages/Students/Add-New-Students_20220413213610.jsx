import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddNewStudents = () => {
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

      <Row className="mt-5">
            <Col xl={3} md={6} key={i}>
              <Card className="mini-stat bg-white text-black" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <CardBody className="d-flex justify-content-around align-items-center"  >
                        <h1>web</h1>

                    </CardBody>
              </Card>
            </Col>
        </Row>

    </React.Fragment>
  );
};

export default AddNewStudents;