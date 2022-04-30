import React from "react";
import { MetaTags } from "react-meta-tags";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';
const StudentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Smart School | Student</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Student" />
        </Row>
        <h1>Student Dashboard</h1>
      </div>
    </React.Fragment>
  );
};

export default StudentDashboard;