import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const CreateMessages = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Create Message" />
        </Row>
        <h1> Create new Messages</h1>
      </div>
    </React.Fragment>
  );
};

export default CreateMessages;
