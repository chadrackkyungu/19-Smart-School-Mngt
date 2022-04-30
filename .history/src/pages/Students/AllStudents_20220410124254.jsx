import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllStudents = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="All Students" title="Students" />
        </Row>
      </div>

      <h1>All Student</h1>
    </React.Fragment>
  );
};

export default AllStudents;