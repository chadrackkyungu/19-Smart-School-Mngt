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

      <Row className="mt-5">
            <Col xl={12} md={6}>
              <Card className="mini-stat bg-white text-black">
                    {/* <CardBody className="d-flex justify-content-around align-items-center"> */}
                    <CardBody>
                       
                    <AvForm>
                  <Row> 

                    <Col> 
                    <AvField
                      className="mb-3 p-3 bg-white"
                      name="username"
                      label="Required"
                      placeholder="Type Something"
                      type="text"
                      errorMessage="Enter Name"
                      validate={{ required: { value: true } }}
                    />
                    <Label>Equal To</Label>
                    <AvField
                      name="password"
                      type="password"
                      placeholder="Password"
                      errorMessage="Enter password"
                      validate={{ required: { value: true } }}
                    />
                    <AvField
                      className="mt-2 mb-3"
                      name="password1"
                      type="password"
                      placeholder="Re-type Password"
                      errorMessage="Enter Re-password"
                      validate={{
                        required: { value: true },
                        match: { value: "password" },
                      }}
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
                      className="mb-3"
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
                      className="mb-3"
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
                      className="mb-3"
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
                      className="mb-3"
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
                      <div>
                        <Button type="submit" color="primary" className="ms-1">
                          Submit
                        </Button>{" "}
                        <Button type="reset" color="secondary">
                          Cancel
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