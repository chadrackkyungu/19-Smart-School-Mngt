import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllFeesCollections = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Fees Collections" />
        </Row>
        <h1>Fees Collections</h1>
      </div>
    </React.Fragment>
  );
};

export default AllFeesCollections;
