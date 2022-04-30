import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddExpenses = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Add Expenses" title="Welcome to the Dashboard" />
        </Row>
        <h1> Add new Expenses </h1>
      </div>
    </React.Fragment>
  );
};

export default AddExpenses;
