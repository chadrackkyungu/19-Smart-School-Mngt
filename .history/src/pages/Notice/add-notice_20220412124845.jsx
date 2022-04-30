import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddNotice = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Add Notice " title="Welcome to the Dashboard" />
        </Row>
        <h1> Add Notice </h1>
      </div>
    </React.Fragment>
  );
};

export default AddNotice;
