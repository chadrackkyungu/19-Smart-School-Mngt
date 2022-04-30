import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';
const ParentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Parent" title="Welcome to Parent Dashboard" />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ParentDashboard;