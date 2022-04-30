import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllClasses = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Classes" />
        </Row>
        <h1> All Classes </h1>
      </div>
    </React.Fragment>
  );
};

export default AllClasses;
