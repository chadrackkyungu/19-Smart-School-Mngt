import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllParents = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Parents" title="Welcome to Parents " />
        </Row>
        <h1>All Parents</h1>
      </div>
    </React.Fragment>
  );
};

export default AllParents;