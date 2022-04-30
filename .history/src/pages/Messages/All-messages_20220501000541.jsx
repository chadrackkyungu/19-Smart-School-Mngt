import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllMessages = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Messages" />
        </Row>
        <h1> All Messages</h1>
      </div>
    </React.Fragment>
  );
};

export default AllMessages;
