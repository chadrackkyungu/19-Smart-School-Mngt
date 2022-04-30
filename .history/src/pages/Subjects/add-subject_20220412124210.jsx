import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddSubjects = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Add Subjects" title="Welcome to the Dashboard" />
        </Row>
        <h1> Add new Subjects </h1>
      </div>
    </React.Fragment>
  );
};

export default AddSubjects;
