import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddTransport = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Transport" />
        </Row>
        <h1> Add Transport </h1>
      </div>
    </React.Fragment>
  );
};

export default AddTransport;
