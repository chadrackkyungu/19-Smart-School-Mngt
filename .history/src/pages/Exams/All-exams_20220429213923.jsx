import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllExams = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Exams" />
        </Row>
        <h1> All Exams </h1>
      </div>
    </React.Fragment>
  );
};

export default AllExams;
