import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddNewStudents = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Students" />
        </Row>
      </div>

      <h1>Added Students</h1>

    </React.Fragment>
  );
};

export default AddNewStudents;