import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddNewBook = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Books" title="All Books" />
        </Row>
        <h1>Add Books</h1>
      </div>
    </React.Fragment>
  );
};

export default AddNewBook;