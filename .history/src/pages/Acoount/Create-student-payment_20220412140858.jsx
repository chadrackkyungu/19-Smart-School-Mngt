import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const CreateStudentsPayments = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Students Payments" />
        </Row>
        <h1>Students Payments</h1>
      </div>
    </React.Fragment>
  );
};

export default CreateStudentsPayments;
