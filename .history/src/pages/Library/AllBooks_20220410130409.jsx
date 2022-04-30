import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AllBooks = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Books" title="All Books" />
        </Row>
        <h1>All Books</h1>
      </div>
    </React.Fragment>
  );
};

export default AllBooks;