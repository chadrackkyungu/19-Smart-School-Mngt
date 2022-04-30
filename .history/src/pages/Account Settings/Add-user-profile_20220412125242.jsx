import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddUserProfile = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Add User Profile" title="Welcome to the Dashboard" />
        </Row>
        <h1> Add User Profile </h1>
      </div>
    </React.Fragment>
  );
};

export default AddUserProfile;
