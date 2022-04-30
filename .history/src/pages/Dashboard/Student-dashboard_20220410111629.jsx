import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';
const StudentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Student" title="Welcome to Student Dashboard" />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default StudentDashboard;