import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllNotice = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="All Notice  " title="Welcome to the Dashboard" />
        </Row>
        <h1> All Notice </h1>
      </div>
    </React.Fragment>
  );
};

export default AllNotice;
