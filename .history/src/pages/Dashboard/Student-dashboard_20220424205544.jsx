import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';
const StudentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Student" />
        </Row>
        <h1>Student Dashboard</h1>
      </div>
    </React.Fragment>
  );
};

export default StudentDashboard;