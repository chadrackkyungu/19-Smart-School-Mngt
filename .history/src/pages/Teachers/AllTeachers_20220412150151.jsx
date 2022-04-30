import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllTeachers = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Teachers" />
        </Row>
        <h1>All Teachers</h1>
      </div>
    </React.Fragment>
  );
};

export default AllTeachers;
