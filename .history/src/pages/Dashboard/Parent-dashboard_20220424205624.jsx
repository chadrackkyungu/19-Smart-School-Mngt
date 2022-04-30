import React from "react";
import { MetaTags } from "react-meta-tags";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const ParentDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Smart School | Parent </title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Parent" />
        </Row>

        <h1>Parents Dashboard</h1>
      </div>
    </React.Fragment>
  );
};

export default ParentDashboard;