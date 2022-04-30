import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllExpenses = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="All Expenses" />
        </Row>
        <h1> All Expenses </h1>
      </div>
    </React.Fragment>
  );
};

export default AllExpenses;
