import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Row, Col, Alert } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link, useHistory, useLocation } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions";




// import images
import logo from "../../assets/images/logo-sm-dark.png";
import login from "../../assets/images/login/smart2.PNG";


import { Db } from '../../Database/init-firebase';
import { collection, addDoc } from 'firebase/firestore/lite';
import { useAuth } from "../../Contexts/AuthContext"


const Login = (props) => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
  });

  const history = useHistory()
  const location = useLocation()

  const [msg, setMsg] = useState("")

  const { login} = useAuth()

  const handleValidSubmit = (event, values) => {
    event.preventDefault()

    const { email, password } = values
    login(email, password)
      .then(res => {
        const { accessToken } = res.user
        localStorage.setItem("token", JSON.stringify(accessToken))
        setMsg("Login successful")
        history.replace(location.state?.from ?? "/dashboard")
      })
      .catch(err => setMsg("Email or Password Incorrect, Please Try Again"))
  }
  return (
    <React.Fragment>
      <div className="bg-page">
        <div className="account-pages pt-sm-5">
          {/* <Container> */}
          <Row className="login-page-content">
            
            <Col md={6} lg={6} xl={5}>
              <div className="login-container">
                <img src={login} alt="" />
              </div>
              <div className="mt-5 text-center login-p desktop">
                {/* <p>
                  Don't have an account ?
                  <Link to="/register" className="fw-medium text-primary">
                    Signup now
                  </Link>
                </p> */}
                <p>
                  © {new Date().getFullYear()} Smart School, Created
                  <i className="mdi mdi-heart text-danger"></i> by Chadrack_code
                </p>
              </div>
            </Col>

            <Col md={6} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Smart School</h5>
                    <p className="text-white-50 mb-0">
                      Sign in to continue to smart School
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
                          // value="admin@themesbrand.com"
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
                          // value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                     

                      <div className="mt-5">
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
              <div className="mt-5 text-center login-p mobile">
                {/* <p>
                  Don't have an account ?
                  <Link to="/register" className="fw-medium text-primary">
                    Signup now
                  </Link>
                </p> */}
                <p>
                  © {new Date().getFullYear()} Smart School, Created
                  <i className="mdi mdi-heart text-danger"></i> by Chadrack_code
                </p>
              </div>
            </Col>
          </Row>
          {/* </Container> */}
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
