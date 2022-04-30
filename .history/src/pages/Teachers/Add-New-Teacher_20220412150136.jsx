import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddTeachers = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Teachers" />
        </Row>
        <h1>Add Teachers</h1>
      </div>
    </React.Fragment>
  );
};

export default AddTeachers;