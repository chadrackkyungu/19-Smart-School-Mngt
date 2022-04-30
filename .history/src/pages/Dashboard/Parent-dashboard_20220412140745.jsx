import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const ParentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Parent" />
        </Row>

        <h1>Parents Dashboard</h1>
      </div>
    </React.Fragment>
  );
};

export default ParentDashboard;