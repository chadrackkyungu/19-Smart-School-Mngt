import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllFeesCollections = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Students Payments" title="Welcome to the Dashboard" />
        </Row>
        <h1>Students Payments</h1>
      </div>
    </React.Fragment>
  );
};

export default AllFeesCollections;
