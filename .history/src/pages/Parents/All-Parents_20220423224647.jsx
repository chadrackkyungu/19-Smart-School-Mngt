import React, {useEffect, useState} from "react"
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { Row, Col, Card, CardBody} from "reactstrap"
import { Link, useHistory } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import Breadcrumb from '../../components/Common/Breadcrumb';

const AllParents = () => {
  return (
    <React.Fragment>
      <div className="page-content">
             <Row>
               <Breadcrumb breadcrumbItem="Dashboard" title="All Parents" />
            </Row>
      </div>
    </React.Fragment>
  );
};

export default AllParents;