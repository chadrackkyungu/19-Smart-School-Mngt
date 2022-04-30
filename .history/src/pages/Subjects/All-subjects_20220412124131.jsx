import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllSubjects = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="All Subjects" title="Welcome to the Dashboard" />
        </Row>
        <h1>All Subjects</h1>
      </div>
    </React.Fragment>
  );
};

export default AllSubjects;
