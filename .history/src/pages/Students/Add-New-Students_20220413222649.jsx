import React, { useState } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import MetaTags from "react-meta-tags";

import Breadcrumb from '../../components/Common/Breadcrumb';

const AddNewStudents = () => {
  return (
    <React.Fragment>
      <div className="page-content">

        <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>

        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Add Students" />
        </Row>

      </div>

      <Row className="d-flex justify-content-around align-items-center mt-5">
            <Col xl={11} md={6}>
              <Card className="mini-stat bg-white text-black ">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                <CardBody>
                 <AvForm>
                  <Row> 

                    <Col> 
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      label="Last Name"
                      name="LastName"
                      type="Last Name"
                      placeholder="Last Name"
                      errorMessage="Last Name"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="Admission"
                      label="Admission ID"
                      type="text"
                      placeholder="Admission ID"
                      errorMessage="Admission ID"
                      validate={{ required: { value: true }}}
                    />

                    <AvField
                      className="mb-3"
                      type="textarea"
                      label="Textarea "
                      rows="5"
                      name="address"
                      id="address"
                      placeholder="Address"
                      errorMessage="This value is required."
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9a-zA-Z]+$",
                          errorMessage: "Only Alphanumeric",
                        },
                      }}
                    />

                    </Col>


                    <Col> 
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="email"
                      label="E-Mail  "
                      placeholder="Enter Valid Email"
                      type="email"
                      errorMessage="Invalid Email"
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="digits"
                      label="Digits  "
                      placeholder="Enter Only Digits"
                      type="number"
                      errorMessage="Enter Only Digits"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Digits",
                        },
                      }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="number"
                      label="Number  "
                      placeholder="Enter Only number"
                      type="number"
                      errorMessage="Enter Only Number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="alphanumeric"
                      label="Alphanumeric  "
                      placeholder="Enter Only alphanumeric value"
                      type="text"
                      errorMessage="Enter Only Alphanumeric"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9a-zA-Z]+$",
                          errorMessage: "Only Alphanumeric",
                        },
                      }}
                    />
                   
                    </Col>

                    <FormGroup className="mb-0">
                      <div className="d-flex p-2">
                        <Button type="submit" color="primary" className="m-2">
                          Submit
                        </Button>
                        <Button type="update"  className="bg-blue-800 m-2">
                          update
                        </Button>
                      </div>
                    </FormGroup>

                    </Row>
                  </AvForm>

                    </CardBody>
              </Card>
            </Col>
        </Row>

    </React.Fragment>
  );
};

export default AddNewStudents;