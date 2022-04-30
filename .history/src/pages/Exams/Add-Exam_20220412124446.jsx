import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddExams = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Add Exam" title="Welcome to the Dashboard" />
        </Row>
        <h1> Add New Exams </h1>
      </div>
    </React.Fragment>
  );
};

export default AddExams;
