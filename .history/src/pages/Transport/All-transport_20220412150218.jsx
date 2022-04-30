import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllTransport = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Transport" />
        </Row>
        <h1> All Transport </h1>
      </div>
    </React.Fragment>
  );
};

export default AllTransport;
