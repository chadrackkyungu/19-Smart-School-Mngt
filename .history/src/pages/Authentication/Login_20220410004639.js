import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { Row, Col, Alert, Container } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm-dark.png";
import login from "../../assets/images/login/smart2.PNG";

const Login = (props) => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history);
  };

  return (
    <React.Fragment>
      <div className="bg-page">
        <div className="account-pages pt-sm-5">
          <Container>
            <Row className="login-page-content">
              <Col md={12} lg={6} xl={5}>
                <div className="login-container">
                  <img src={login} alt="" />
                </div>
              </Col>

              <Col md={8} lg={6} xl={5}>
                {/* <div className="card overflow-hidden">
                  <div className="bg-login text-center">
                    <div className="bg-login-overlay"></div>
                    <div className="position-relative">
                      <h5 className="text-white font-size-20">
                        Welcome Back !
                      </h5>
                      <p className="text-white-50 mb-0">
                        Sign in to continue to Qovex.
                      </p>
                      <Link to="/" className="logo logo-admin mt-4">
                        <img src={logo} alt="" height="30" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pt-5">
                    <div className="p-2">
                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={(e, v) => {
                          handleValidSubmit(e, v);
                        }}
                      >
                        {props.error && typeof props.error === "string" ? (
                          <Alert color="danger">{props.error}</Alert>
                        ) : null}

                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            value="admin@themesbrand.com"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="Password"
                            value="123456"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customControlInline"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customControlInline"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="mt-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <Link to="/forgot-password" className="text-muted">
                            <i className="mdi mdi-lock me-1"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </AvForm>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p>
                    Don't have an account ?{" "}
                    <Link to="/register" className="fw-medium text-primary">
                      {" "}
                      Signup now{" "}
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} Smart School.
                    <i className="mdi mdi-heart text-danger"></i> by
                    Chadrack_code
                  </p>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
};
