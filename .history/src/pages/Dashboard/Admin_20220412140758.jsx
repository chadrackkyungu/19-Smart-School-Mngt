import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Admin" />
        </Row>

        <h1>Admin main dashboard</h1>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
