import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllClasses = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="All Classes" title="Welcome to the Dashboard" />
        </Row>
        <h1> All Classes </h1>
      </div>
    </React.Fragment>
  );
};

export default AllClasses;
